<script>
braintree.dropin.create({
  authorization: 'sandbox_g42y39zw_348pk9cgf3bgyw2b',
  selector: '#dropin-container'
}, function (err, instance) {
    document.querySelector('#submit-button').addEventListener('click', function () {
    instance.requestPaymentMethod(function (err, payload) {
      // Submit payload.nonce to your server
    });
  })
});


import axios from "axios";
import { store } from '../store';
export default {
  name: "Checkout",
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
    axios
      .get(`http://localhost:8000/api/restaurants/`)
      .then((response) => {
        this.restaurants = response.data;
        console.log(this.restaurants)
      }),
      
    axios
      .get(`http://localhost:8000/api/clientToken/`)
      .then((response) => {
        this.token = response.data;
        console.log(this.token)
      })
  },
  methods: {
    showlog(){
        console.log(store.userCart)
    },
    addZeroToNumber(num) {
        if (num != undefined) {
            if (num.toString().includes(".")) {
                return num+"0"
            } else return num+".00"
        }
    },
    pushPriceInArray(item){
        this.orderTotal.push(item);
   },
   orderTotalPrice() {
    if (this.orderTotal.length != 0)
    return this.orderTotal.reduce(function(a, b){
        return a + b;
        }
    )
   },
  },
  };

</script>
<template>
    <section class="h-100 h-custom pt-5" style="background-color: #eee;">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col">
                    <div class="card">
                        <div class="card-body p-4">

                            <div class="row">

                                <div class="col-lg-7">
                                    <h5 class="mb-3"><a href="#!" class="text-body"><i
                                        class="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5>
                                        <button @click="showlog()">Log</button>
                                    <hr>

                                    <div class="d-flex justify-content-between align-items-center mb-4">
                                    <div>
                                        <p class="mb-1">Carrello</p>
                                        <p class="mb-0">{{ store.userCart.dish.length }}  prodotti nel carrello</p>
                                    </div>

                                    <!-- SORT BY -->
                                    <!-- 
                                    <div>
                                        <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!"
                                            class="text-body">price <i class="fas fa-angle-down mt-1"></i></a></p>
                                    </div> 
                                    -->

                                    </div>
                                    <!-- inizio ciclo -->
                                    <div v-for="item, index in store.userCart.dish">
                                        <div class="card mb-3">
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between">
                                                    <div class="d-flex flex-row align-item-center">
                                                        <div>
                                                            <img :src=item.img class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
                                                        </div>
                                                        <div class="ms-3">
                                                            <h5>{{item.name}}</h5>
                                                            <!-- <p class="small mb-0">256GB, Navy Blue</p> -->
                                                        </div>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center">
                                                        <div style="width: 50px;">
                                                            <h5 class="fw-normal mb-0">{{ store.userCart.filteredQuantity[index] }}</h5>
                                                        </div>
                                                        <div style="width: 80px;">
                                                            <h5 class="mb-0">€{{ addZeroToNumber(item.price * store.userCart.filteredQuantity[index]) }}</h5>
                                                        </div>
                                                        <a href="#!" style="color: #cecece;"><i class="fas fa-trash-alt"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-5">
                                    <!-- BRAINTREE -->
                                    <div>4111 1111 1111 1111</div>
                                    <div class="card bg-primary text-white rounded-3">
                                        <div id="dropin-container"></div>
                                        <button id="submit-button" class="button button--small button--green">Purchase</button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>