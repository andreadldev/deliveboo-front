<script>
import { store } from "../store";
import RestaurantCard from "./RestaurantCard.vue";

export default {
  name: "RestaurantsList",
  components: {
    RestaurantCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <section class="container">
    <div class="row">
      <div class="col-4" v-for="restaurant in store.restaurants">
        <RestaurantCard :data="restaurant" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
