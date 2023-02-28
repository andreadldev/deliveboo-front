<script>
import { store } from "../store";
import CategoryCard from "./CategoryCard.vue";
import RestaurantCard from "./RestaurantCard.vue";

export default {
  name: "CategorysList",
  components: {
    CategoryCard,
    RestaurantCard,
  },
  data() {
    return {
      store,
      visible: false,
    };
  },
  computed: {
    filteredRestaurants() {
      //prendo l'array dei nomi delle categorie
      const selectedCategories = this.store.categories
        .filter((category) => category.selected)
        .map((category) => category.name);

      // filtro i risultati basandomi su quell'array
      return this.store.restaurants.filter((restaurant) => {
        // prendo l'array dei nomi delle categorie per quei ristoranti
        const categoryNames = restaurant.categories.map(
          (category) => category.name
        );
        // controllo se TUTTE le categorie selezionate sono presenti in quelle dei risto
        return selectedCategories.every((category) =>
          categoryNames.includes(category)
        );
      });
    },
    toggleCategory(index) {
      this.store.categories[index].selected =
        !this.store.categories[index].selected;
    },
    isActive() {
      // di base nasconde la sezione dedicata ai ristoranti ma si attiva se almeno uno è selezionato
      return this.store.categories.some((category) => category.selected);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="d-flex flex-column">
      <div>
        <h2 class="mt-5">Scegli una o più Categoria:</h2>
        <ul
          class="d-flex flex-wrap justify-content-between gy-3 col-lg-9 m-auto category "
        >
          <li v-for="(category, index) in store.categories" :key="index">
            <!-- <div>
              <input type="checkbox" v-model="category.selected" @change="toggleCategory(index)">
                  {{ category.name }}
                </div> -->
            <article class="feature1">
              <input
                type="checkbox"
                id="feature1"
                v-model="category.selected"
                @change="toggleCategory(index)"
              />
              <div>
                <span> {{ category.name }}<br /> </span>
              </div>
            </article>
          </li>
        </ul>
      </div>
      <div>
        <h2 class="mt-3">Restaurants</h2>
        <div class="d-flex">
          <ul class="row" v-if="isActive">
            <li
              class="col-3"
              v-for="(restaurant, index) in filteredRestaurants"
              :key="index"
            >
              <RestaurantCard :data="restaurant" />
              <router-link
                :to="{
                  name: 'single-restaurant',
                  params: { slug: restaurant.slug },
                }"
              ></router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  color: #fa8072;
}
ul {
  list-style: none;
}

body {
  text-align: center;
  color: #f5f5f5;
  background-image: linear-gradient(-90deg, #0c0c0d, #1a1a1a);
  font-family: "Roboto";
}

.app {
  max-width: 300px;
  margin: 0 auto;
}

article {
  position: relative;
  width: 140px;
  height: 100px;
  margin: 5px;
  float: left;
  border: 2px solid #f2b150;
  box-sizing: border-box;
}

article div {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 25px;
  transition: 0.5s ease;
}

article input {
  position: absolute;
  top: 0;
  left: 0;
  width: 140px;
  height: 100px;
  opacity: 0;
  cursor: pointer;
}

input[type="checkbox"]:checked ~ div {
  background-color: #f2b150;
}

.category{
  color:#fa8072;
  font-size: 18px;
}
</style>
