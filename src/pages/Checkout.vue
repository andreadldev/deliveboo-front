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
    }
    },
    methods:{
    showlog(){
        console.log(localStorage.getItem('my_data'))
      },
    }
};

</script>
<template>
    <Cart :data="myData"/>    
</template>

<style lang="scss" scoped>
</style>