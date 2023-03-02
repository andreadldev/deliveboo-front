<script>
import { store } from '../store';
import axios from 'axios';
import * as braintree from '../braintree';
export default {
    name: "Cart",
    props: {
        data: String,
        slug: String,
        ps: String
    },
    data() {
        return {
            braintree,
            store,
            rest: null,
            restaurant_slug: null,
            restaurant: null,
            userCart: [],
            totalPrice: [],
            subtotal: 0,
            orderData: {
                firstname: "",
                lastname: "",
                code: null,
                price: 0,
                address: "",
                email: "",
                phone_number: "",
                order_date: null,
                additional_info: "",
            },
            cartItems: {
                dishesId: [],
                dishesQuantity: [],
            },
            orderError: false,
            shipping: ''
        };
    },
    methods: {
        addNewOrder() {
            axios
                .post(`http://localhost:8000/api/orders/${this.restaurant_slug}`, {
                    firstname: this.orderData.firstname,
                    lastname: this.orderData.lastname,
                    code: this.orderData.code,
                    price: this.orderData.price,
                    address: this.orderData.address,
                    email: this.orderData.email,
                    phone_number: this.orderData.phone_number,
                    order_date: this.orderData.order_date,
                    additional_info: this.orderData.additional_info,
                    dishes_Id: this.cartItems.dishesId,
                    tot_quantity: this.cartItems.dishesQuantity
                })
                .then((response) => {
                    console.log(response)
                })
                .catch((err) => {

                });
        },
        // addZeroToNumber(num) {
        //     if (num != undefined) {
        //         if (num.toString().includes(".")) {
        //             return num+"0"
        //         } else return num+".00"
        //     }
        // },
        pushPriceInArray(item) {
            this.orderTotal.push(item);
        },
        // orderTotalPrice() {
        //     if (this.orderTotal.length != 0)
        //     return this.orderTotal.reduce(function(a, b){
        //         return a + b;
        //     })
        // },
        QuantityUp(i, price) {
            let oldPrice = price
            // CALCOLO QUANTITA' / PREZZO
            document.querySelector(`#quantity-${i}`).stepUp();
            document.querySelector(`#price-${i}`).innerHTML = price * document.querySelector(`#quantity-${i}`).value;
            if(document.querySelector(`#quantity-${i}`).value == 10){
                document.querySelector(`#up-btn-${i}`).disabled = true
            }
            if(document.querySelector(`#down-btn-${i}`).disabled == true){
                document.querySelector(`#down-btn-${i}`).disabled = false
            }
            if (document.querySelector(`#quantity-${i}`).value <= 10) {
                this.totalPrice[i] += parseFloat(oldPrice)
                this.subtotal = this.totalPrice.reduce((pv, cv) => pv + cv, 0);
                this.orderData.price = this.shipping + this.subtotal
            }

            // AGGIUNGI ZERO ALLA FINE
            if (document.querySelector(`#price-${i}`).innerHTML.includes('.')) {
                document.querySelector(`#price-${i}`).innerHTML += '0'
            } else document.querySelector(`#price-${i}`).innerHTML += '.00'
        },
        QuantityDown(i, price) {
            let oldPrice = price
            // CALCOLO QUANTITA' / PREZZO
            if(document.querySelector(`#up-btn-${i}`).disabled == true){
                document.querySelector(`#up-btn-${i}`).disabled = false
            }
            if(document.querySelector(`#quantity-${i}`).value == 1){
                document.querySelector(`#down-btn-${i}`).disabled = true
            }
            if (parseFloat(document.querySelector(`#price-${i}`).innerHTML) > price) {
                document.querySelector(`#quantity-${i}`).stepDown();
                document.querySelector(`#price-${i}`).innerHTML -= price;
            } else {
                document.querySelector(`#price-${i}`).innerHTML = price;
            }
            if (this.totalPrice[i] > oldPrice) {
                this.totalPrice[i] -= parseFloat(oldPrice)
                this.subtotal = this.totalPrice.reduce((pv, cv) => pv + cv, 0);
                this.orderData.price = this.shipping + this.subtotal
                // console.log(this.orderData.price)
            }
        },

        getQuantities() {
            for (let i = 0; i < this.userCart.dish.length; i++) {

                this.cartItems.dishesQuantity.push(parseFloat(document.querySelector(`#quantity-${i}`).value))
                
            }
        },

    deleteCart(i) {            
        this.userCart.dish.splice(i, 1);
        if(this.userCart.dish.length === 0){
            localStorage.clear()
            // console.log(this.userCart.dish)
            // console.log(localStorage.getItem('my_data'))
            console.log(this.userCart)
        }
    }
    },
    created() {
        // console.log(this.userCart)
        // console.log(localStorage.getItem('my_data'))
        this.userCart = JSON.parse(localStorage.getItem('my_data'))
        console.log(this.userCart)

        this.restaurant_slug = JSON.parse(localStorage.getItem('slug'))
        this.rest = JSON.parse(localStorage.getItem('price_shipping'))
    },

    mounted() {

        //calcolo prezzo totale
        if(this.userCart){
            for (let i = 0; i < this.userCart.dish.length; i++) {
                this.totalPrice.push(parseFloat(document.querySelector(`#price-${i}`).innerHTML));
            }
            this.subtotal = this.totalPrice.reduce((pv, cv) => pv + cv, 0);


        // data locale
        const date = new Date();
        const formattedDate = date.toISOString().replace(/T/, ' ').replace(/\..+/, '');
        this.orderData.order_date = formattedDate.toLocaleString();

        // codice random
        const min = 10000;
        const max = 99999;
        this.orderData.code = Math.floor(Math.random() * (max - min + 1)) + min;


        //prezzo totale
            this.shipping = parseFloat(document.getElementById('price').innerHTML)
            this.orderData.price = this.shipping + this.subtotal
            // console.log(this.userCart.dish)

        // id piatti
        const ids = this.userCart.dish.map(element => element.id);
        this.cartItems.dishesId = ids;
        // console.log(this.dishesId)

        }
    }
}

</script>

<template>
    <section class="pt-5">
        <div class="container pt-5 ">
            <div class="row d-flex justify-content-center my-4 my-cart">
                <div v-if="this.userCart" class="col-md-8" >
                    <div class="card mb-4">
                        <div class="card-header py-3">
                            <div v-if="this.userCart.dish.length > 1">
                                <h5 class="mb-0">Carrello - {{ this.userCart.dish.length }} prodotti selezionati</h5>
                            </div>
                            <div v-else-if="this.userCart.dish.length == 1">
                                <h5 class="mb-0">Carrello - {{ this.userCart.dish.length }} prodotto selezionato</h5>
                            </div>
                            <div v-else-if="this.userCart.dish.length == 0">
                                <h5 class="mb-0">Carrello - nessun prodotto selezionato</h5>
                            </div>
                        </div>
                        <div class="card-body">
                            <!-- PRODOTTO -->
                            <div class="row" v-for="item, index in this.userCart.dish">
                                <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                    <!-- IMMAGINE -->
                                    <div>
                                        <img :src=item.img class="img-fluid rounded-3 w-50" alt="item">
                                    </div>
                                </div>

                                <!-- NOME PRODOTTO -->
                                <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                    <p><strong>{{ item.name }}</strong></p>
                                </div>

                                <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                    <!-- QUANTITA' -->
                                    <div class="d-flex mb-4" style="max-width: 300px">
                                        <button class="btn btn-primary px-3 me-2 mb-5" :id="'down-btn-' + index"
                                            @click="QuantityDown(index, item.price)" disabled>-</button>

                                        <div class="form-outline">
                                            <input :id="'quantity-' + index" required min="1" max="11"
                                                :name="'quantity-' + index" value='1' type="number" class="form-control" />
                                            <label class="form-label" for="form1">Quantità</label>
                                        </div>

                                        <button class="btn btn-primary px-3 ms-2 mb-5" :id="'up-btn-' + index"
                                            @click="QuantityUp(index, item.price)">+</button>
                                    </div>

                                    <!-- PREZZO -->
                                    <div class="text-center fw-bold price">
                                        <span>€</span>
                                        <div class="d-inline text-start text-md-center" :id="'price-' + index">
                                            {{ item.price }}
                                        </div>
                                    </div>
                                    <button class="btn btn-danger" @click="deleteCart(index)">Elimina</button>


                                </div>
                                <div v-if="index != this.userCart.dish.length - 1">
                                    <hr class="mb-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else> <h2>Il carrello è vuoto! </h2></div>

                <!-- RIEPILOGO ORDINE -->
                <div v-if="this.userCart" class="col-md-4">
                    <div class="card mb-4">
                        <div class="card-header py-3">
                            <h5 class="mb-0">Riepilogo ordine</h5>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li
                                    class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                    Subtotale
                                    <span id="subtotal">€ {{ this.subtotal }}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center px-0">Shipping
                                    <span>€ {{ this.rest.price_shipping }}</span>
                                </li>
                                <li
                                    class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                    <div>
                                        <strong>Total amount</strong>
                                        <strong>
                                            <p class="mb-0">(including VAT)</p>
                                        </strong>
                                    </div>
                                    <span>
                                        <strong id="price">€ {{ parseFloat(this.subtotal) +
                                            parseFloat(this.rest.price_shipping) }}
                                        </strong>
                                    </span>
                                </li>
                            </ul>
                            <!-- <button type="button" class="btn btn-primary btn-lg btn-block">Go to checkout</button> -->
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap" @click="getQuantities">Vai
                                all'ordine</button>

                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <form @submit.prevent="addNewOrder()">
                                                <div class="mb-3">
                                                    <label for="first-name" class="col-form-label">Nome*:</label>
                                                    <input type="text" class="form-control" id="first-name"
                                                        v-model="orderData.firstname" required>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="last-name" class="col-form-label">Cognome*:</label>
                                                    <input type="text" class="form-control" id="last-name"
                                                        v-model="orderData.lastname" required>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="address" class="col-form-label">Indirizzo*:</label>
                                                    <input type="text" class="form-control" id="address"
                                                        v-model="orderData.address" required>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="email" class="col-form-label">Email*:</label>
                                                    <input type="email" class="form-control" id="email"
                                                        v-model="orderData.email" required>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="phone-number" class="col-form-label">Numero di
                                                        telefono*:</label>
                                                    <input type="text" class="form-control" id="phone-number"
                                                        pattern="[0-9]+" v-model="orderData.phone_number" required>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="info" class="col-form-label">Informazioni
                                                        aggiuntive:</label>
                                                    <textarea type="textarea" class="form-control" id="info"
                                                        placeholder="Aggiungi informazioni che possono esserci utili"
                                                        v-model="orderData.additional_info"></textarea>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary"
                                                        data-bs-dismiss="modal">Chiudi</button>
                                                    <button type="submit" class="btn btn-primary">Conferma ordine</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div id="dropin-container"></div>
                                        <button id="submit-button"
                                            class="button button--small button--green">Purchase</button>
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

<style lang="scss" scoped>
.price {
    position: relative;
    top: -20px;
}

.button {
    cursor: pointer;
    font-weight: 500;
    left: 3px;
    line-height: inherit;
    position: relative;
    text-decoration: none;
    text-align: center;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    display: inline-block;
}

.button--small {
    padding: 10px 20px;
    font-size: 0.875rem;
}

.button--green {
    outline: none;
    background-color: #64d18a;
    border-color: #64d18a;
    color: white;
    transition: all 200ms ease;
}

.button--green:hover {
    background-color: #8bdda8;
    color: white;
}

.my-cart {
    padding-top: 125px;
}
</style>

