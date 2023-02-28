<script>
import { store } from "../store.js";

export default {
    name: "Cart",
        data() {
            return {
                store,
            };
        },
        created() {
            console.log(store.userCart);
        },
        methods: {
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
                })
            },
            QuantityUp(i, price) {
                let oldPrice = price
                document.querySelector(`#quantity-${i}`).stepUp();
                document.querySelector(`#price-${i}`).innerHTML = price * document.querySelector(`#quantity-${i}`).value;
            },
            QuantityDown(i, price) {
                let oldPrice = price
                document.querySelector(`#quantity-${i}`).stepDown();
                document.querySelector(`#price-${i}`).innerHTML = price / document.querySelector(`#quantity-${i}`).value;
            }
        }
    };
</script>

<template>
<section class="pt-5">
    <div class="container pt-5">
        <div class="row d-flex justify-content-center my-4">
            <div class="col-md-8">
                <div class="card mb-4">
                    <div class="card-header py-3">
                        <div v-if="store.userCart.dish.length > 1">
                            <h5 class="mb-0">Carrello - {{ store.userCart.dish.length }} prodotti selezionati</h5>
                        </div>
                        <div v-else-if="store.userCart.dish.length == 1">
                            <h5 class="mb-0">Carrello - {{ store.userCart.dish.length }} prodotto selezionato</h5>
                        </div>
                        <div v-else-if="store.userCart.dish.length == 0">
                            <h5 class="mb-0">Carrello - nessun prodotto selezionato</h5>
                        </div>
                    </div>
                    <div class="card-body">
                        <!-- PRODOTTO -->
                        <div class="row" v-for="item, index in store.userCart.dish">
                            <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                <!-- IMMAGINE -->
                                <div>
                                    <img :src=item.img class="img-fluid rounded-3 w-50" alt="item">
                                </div>
                            </div>

                            <!-- NOME PRODOTTO -->
                            <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                <p><strong>{{item.name}}</strong></p>
                            </div>

                            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <!-- QUANTITA' -->
                            <div class="d-flex mb-4" style="max-width: 300px">
                                <button class="btn btn-primary px-3 me-2 mb-5" @click="QuantityDown(index, item.price)">-</button>

                                <div class="form-outline">
                                    <input :id="'quantity-' + index" required min="1" max="10" :name="'quantity-' + index" value="1" type="number" class="form-control" />
                                    <label class="form-label" for="form1">Quantità</label>
                                </div>

                                <button class="btn btn-primary px-3 ms-2 mb-5" @click="QuantityUp(index, item.price)">+</button>
                            </div>

                            <!-- PREZZO -->
                            <div class="mb-2 text-start text-md-center" :id="'price-' + index">
                                €{{ item.price }}
                            </div>

                            </div>
                            <div v-if="index != store.userCart.dish.length -1 ">
                                <hr class="mb-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- RIEPILOGO ORDINE -->
            <div class="col-md-4">
                <div class="card mb-4">
                    <div class="card-header py-3">
                        <h5 class="mb-0">Summary</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">Products
                                <span>$53.98</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center px-0">Shipping
                                <span>Gratis</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                <div>
                                    <strong>Total amount</strong>
                                    <strong><p class="mb-0">(including VAT)</p></strong>
                                </div>
                                <span><strong>$53.98</strong></span>
                            </li>
                        </ul>
                        <button type="button" class="btn btn-primary btn-lg btn-block">Go to checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

