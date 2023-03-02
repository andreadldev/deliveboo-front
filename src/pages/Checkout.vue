<script>
import Cart from "../components/Cart.vue";

export default {
  name: "Checkout",
  components: {
    Cart
  },
  computed: {
    myData() {
      return localStorage.getItem('my_data');
    },
    ristSlug() {
      return localStorage.getItem('slug')
    },
    price_ship(){
      return localStorage.getItem('price_shipping')
    }
  },
  methods: {
    showlog() {
      console.log(localStorage.getItem('my_data'))
    },
  },
  created() {
        console.log(localStorage.getItem['my_data'])   
  }
};

</script>
<template>
  <Cart :data="myData" :slug="ristSlug" :ps="price_ship" />
</template>

<style lang="scss" scoped></style>