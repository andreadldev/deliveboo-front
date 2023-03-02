<template>
  <div v-if="restaurant" class="text-center my-restaurant">

    <h1>{{ restaurant.name }}</h1>
    <img class="my-img" v-if="restaurant.img" :src="restaurant.img" :alt="restaurant.name">
    <div class="text-center">
      <small>Indirizzo: {{ restaurant.address }}</small>
      <div>Descrizione: {{ restaurant.description }}</div>
      <span>Costo spedizione: {{ restaurant.price_shipping }}€</span>

      <h5>I nostri piatti:</h5>

      <!-- form -->
      <form @submit.prevent="saveData()">
        <div v-for="(dish, index) in restaurant.dishes" :key="index">
          <div class="d-flex justify-content-center flex-column w-10">
            <div class="wrapper">
              <label :for="'check-' + index">{{ dish.name }}</label>
              <!-- modificare e aggiungere bottone -->
              <input :id="'check-' + index" class="check ms-1 mt-2" type="checkbox" :value="dish" v-model="order.dish">
            </div>
          </div>
        </div>
        <button class="btn btn-warning m-4" type="submit">Aggiungi al carrello</button>
        <button @click="showlog()">Log</button>
      </form>
      <div class="m-4">
        <router-link class="text-decoration-none text-white  btn btn-warning rounded-0" :to="{ name: 'checkout' }">Vai al
          carrello</router-link>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SingleRestaurant",
  data() {
    return {
      restaurant: null,
      order: {
        dish: [],
      },
    };
  },
  methods: {
    saveData() {

      localStorage.setItem('my_data', JSON.stringify(this.order))
      localStorage.setItem('slug', JSON.stringify(this.$route.params.slug))

      console.log(this.$route.params.slug)
      console.log('slug', JSON.stringify(this.$route.params.slug))
      console.log('my_data', JSON.stringify(this.order))
    },

    showlog() {
      console.log(localStorage.getItem('my_data'))
      console.log(localStorage.getItem('slug'))
    },
    disableInput() {
      for (let i = 0; i < this.restaurant.dishes.length; i++) {
        if (document.querySelector(`.check_${i}`).checked === true) {
          document.querySelector(`.input_${i}`).disabled = false;
        }
        else if (document.querySelector(`.check_${i}`).checked === false) {
          document.querySelector(`.input_${i}`).value = '';
          document.querySelector(`.input_${i}`).disabled = true;
        }
      }
    }
  },
  created() {
    axios
      .get(`http://localhost:8000/api/restaurants/${this.$route.params.slug}`)
      .then((response) => {
        this.restaurant = response.data;
      })
      .catch((err) => {
        console.log(err);
        this.$router.push({ name: "page-404" });
        // if (err.response.status === 404) {
        // }
      });
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 800px;
}

.quant {
  width: 50px;
}

.wrapper {
  position: relative
}

.my-img {
  padding-top: 200px;
}
</style>
