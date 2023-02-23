<template>
  <div v-if="restaurant">
    <h1>{{ restaurant.name }}</h1>
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
