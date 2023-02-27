<script>
import { store } from "../store";
import RestaurantsList from "../components/RestaurantsList.vue";
import CategoryList from "../components/CategoryList.vue"
export default {
  name: "Restaurants",
  components: {
    RestaurantsList, 
    CategoryList,
  },
  data() {
    return {
      store,
    };
  },
};

</script>

<template>
  <!-- <div class="container">
    <h2>Ristoranti 2</h2>
    <RestaurantsList />
  </div> -->
  <div class="mt-5">
      <CategoryList class="text-center" />
    </div>
</template>

<style lang="scss" scoped></style>
