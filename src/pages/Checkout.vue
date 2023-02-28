<script>
import axios from "axios";
import Cart from "../components/Cart.vue";

export default {
    name: "Checkout",
    components: {
        Cart
    },
    data(){
        return {
            orderTotal: [],
            restaurants: [],
            token: '',
            sum: 0,
        }
    },
    computed: {
    myData() {
      return localStorage.getItem('my_data');
    }
    },
    created() {
            axios.get(`http://localhost:8000/api/restaurants/`)
            .then((response) => {
                this.restaurants = response.data;
            })

            // axios.get(`http://localhost:8000/api/clientToken/`)
            // .then((response) => {
            //     this.token = response.data;
            //     console.log(this.token)
            // })
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