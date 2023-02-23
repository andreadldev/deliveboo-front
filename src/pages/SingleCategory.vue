<template></template>
  
<script>
import axios from "axios";
export default {
    name: "SingleCategory",
    data() {
        return {
            restaurants: null,
        };
    },
    created() {
        axios
            .get(`http://localhost:8000/api/restaurants/${this.$route.params.slug}`)
            .then((response) => {
                this.restaurants = response.data;
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