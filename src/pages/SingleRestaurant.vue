<template>
  <div v-if="restaurant" class="text-center my-restaurant">

    <h1>{{ restaurant.name }}</h1>
    <img v-if="restaurant.img" :src="restaurant.img" :alt="restaurant.name">
    <div class="text-center">
      <small>Indirizzo: {{ restaurant.address }}</small>
      <div>Descrizione: {{ restaurant.description }}</div>
      <span>Costo spedizione: {{ restaurant.price_shipping }}€</span>
      <div class="m-4">
        <router-link class="text-decoration-none text-white  btn btn-warning rounded-0"
          :to="{ name: 'checkout' }">Menù</router-link>
      </div>
      <h5>I nostri piatti:</h5>

      <!-- form -->
      <form @submit.prevent="saveData()">
        <div v-for="(dish, index) in restaurant.dishes" :key="index">
          <div>
            <label :for="'check-' + index">{{ dish.name }}</label>
            <input :id="'check-' + index" class="check" type="checkbox" :value="dish" v-model="order.dish">
          </div>
          <div>
            <label class="w-25px" :for="'quantity-' + index">Inserisci la quantità</label>
            <input :id="'quantity-' + index" class="dish.slug" type="number" min=0 :disabled="!order.dish.includes(dish)"
              v-model="quantity[index]">
          </div>
        </div>
        <button class="btn btn-warning" type="submit">Aggiungi al carrello</button>
        <button @click="showlog()">Log</button>
      </form>

    </div>

  </div>
</template>

<script>
import { store } from "../store";
import axios from "axios";
export default {
  name: "SingleRestaurant",
  data() {
    return {
      store,
      restaurant: null,
      order: {
        dish: [],
        filteredQuantity: []
      },
      quantity: [],
    };
  },
  methods: {
    saveData() {
      // console.log(this.order)
      this.order.filteredQuantity = this.quantity.filter((str) => str !== '')

      // console.log(this.order.filteredQuantity)
      localStorage.setItem('my_data', JSON.stringify(this.order))
      console.log('my_data', JSON.stringify(this.order))
    },
    showlog() {
      console.log(localStorage.getItem('my_data'))
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
  mounted() {
    if (store.currentUser) {
      store.currentUser = JSON.parse(localStorage.getItem('my_data'))
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

.my-restaurant {
  padding-top: 200px;
  padding-bottom: 100px;
}
</style>
