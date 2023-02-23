<template>
  <div v-if="restaurant" class="text-center">
    <h1>{{ restaurant.name }}</h1>
    <img v-if="restaurant.img" :src="restaurant.img" :alt="restaurant.name">
    <div class="text-center">
      <small>Indirizzo: {{ restaurant.address }}</small>
      <div>Descrizione: {{ restaurant.description }}</div>
      <span>Costo spedizione: {{ restaurant.price_shipping }}</span>
      <div class="m-4">
        <router-link class="text-decoration-none text-white  btn btn-warning rounded-0"
          :to="{ name: 'checkout' }">Ordina</router-link>
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
    };
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

<style lang="scss" scoped></style>
