<script>
import axios from "axios";
import Cart from "../components/Cart.vue";
import { store } from '../store';

export default {
    name: "Checkout",
    components: {
        Cart
    },
    data(){
        return {
            store,
            orderTotal: [],
            restaurants: [],
            token: '',
            sum: 0
        }
    },
  created() {
        axios.get(`http://localhost:8000/api/restaurants/`)
        .then((response) => {
            this.restaurants = response.data;
            console.log(this.restaurants)
        })

        // axios.get(`http://localhost:8000/api/clientToken/`)
        // .then((response) => {
        //     this.token = response.data;
        //     console.log(this.token)
        // })
    },
};

</script>
<template>
    <Cart/>
</template>

<style lang="scss" scoped></style>