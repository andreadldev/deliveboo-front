<template>
  <div v-if="restaurant" class="text-center my-restaurant">

<div class="container">
  <div class="row ">
    <div class="col-lg-6 info">
      <h1 class="name">{{ restaurant.name }}</h1>
      <img class="my-img" v-if="restaurant.img" :src="restaurant.img" :alt="restaurant.name">
      <div class="text-center">
        <div> {{ restaurant.description }}</div>
        <div>{{ restaurant.address }}</div>
        <div>Orario Apertura {{ restaurant.opening_time }} </div>
        <div>Orario Chiusura {{ restaurant.closing_time }} </div>
        <span>Costo spedizione: {{ restaurant.price_shipping }}€</span>            
      </div>
    </div>
    <div class="col-lg-6 dish">
      <!-- form -->
      <div class="row">
        <h5>I nostri piatti:</h5>
          <form  @submit.prevent="saveData()">
            <div v-for="(dish, index) in restaurant.dishes" :key="index">
              <div>
                <article class="wrapper" id="demo">
                    <input :id="'check-' + index" class="check ms-1 mt-2" type="checkbox" :value="dish" v-model="order.dish">
                      <div>
                      <label :for="'check-' + index">{{ dish.name }}</label>
                      <div>
                        <label :for="'check-' + index">{{ dish.price }}</label>
                      </div>
                      <!-- <img  class="img-fluid w-50" :src="dish.img" alt=""> -->
                    </div>
                    <!-- modificare e aggiungere bottone -->
                </article>
              </div>
            </div>
            <div>
            <div class="m-4">
            <div>
              <button class="text-white btn rounded-3 m-4 " type="submit">Aggiungi al carrello</button>
              <!-- <button @click="showlog()">Log</button> -->
            </div>
            <div id="advise" class="d-none"><p>Non puoi ordinare da più ristoranti!</p></div>
            <div id="success" class="d-none"><p>Piatti aggiunti al carrello!</p></div>
            <div id="warning" class="d-none"><p>Piatto già presenti nel carrello!</p></div>
            <div id="select" class="d-none"><p>Seleziona almeno un piatto!</p></div>
            <!-- <div id="modifying" class="d-none"><p>Attenzione stai creando un nuovo carrello!</p></div> -->

            <!-- //bootstrap modal -->
            <div id="myModal" class="modal fade" role="dialog" style="display: none;">
              <form @submit.prevent="overWriteCart()">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h4 class="modal-title">ATTENZIONE</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                      </div>
                      <div class="modal-body">
                        <p>ATTENZIONE STAI CREANDO UN NUOVO CARRELLO!</p>
                      </div>
                      <div class="modal-footer">
                        <button id="cart" class="text-white btn rounded-3 m-4 " type="submit">Aggiungi al Carrello</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <p id="confirmed" class="d-none">CARRELLO MODIFICATO!</p>
                      </div>
                    </div>
                  </div>
              </form>
            </div>
            <router-link class="text-decoration-none text-white btn rounded-3" :to="{ name: 'checkout' }">Vai al Carrello</router-link>
          </div>
      </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store'
import axios from "axios";
export default {
  name: "SingleRestaurant",
  data() {
    return {
      components: {
        store
      },
      restaurant: null,
      order: {
        dish: [],
      },
    };
  },
  methods: {

    overWriteCart() {
      localStorage.removeItem('my_data')

      localStorage.setItem('my_data', JSON.stringify(this.order));
      localStorage.setItem('slug', JSON.stringify(this.$route.params.slug));
      localStorage.setItem('price_shipping', JSON.stringify(this.restaurant));

      store.userCart = JSON.parse(localStorage.getItem("my_data"));

      document.getElementById('confirmed').classList.remove('d-none');
      document.getElementById('cart').classList.add('d-none');

    },

    saveData() {

      if (store.userCart) {
        if (this.order.dish.length != 0) {
          let foundMatchingRestaurant = false;
          store.userCart.dish.forEach(element => {
            if (element.restaurant_id === this.restaurant.id) {
              foundMatchingRestaurant = true;
            }
          });

          if (store.userCart.dish.length > 0 && !foundMatchingRestaurant) {

            document.getElementById('advise').classList.remove('d-none');

          } else {
            if (store.userCart.dish.length > 0 && foundMatchingRestaurant) {

              store.userCart.dish.forEach(cartDish => {
                this.order.dish.forEach(menuDish => {
                  if (cartDish.name === menuDish.name) {

                    document.getElementById('warning').classList.remove('d-none');

                  } else {

                    $('#myModal').modal('show');

                  }

                });
              });

            } else {

              localStorage.setItem('my_data', JSON.stringify(this.order));
              localStorage.setItem('slug', JSON.stringify(this.$route.params.slug));
              localStorage.setItem('price_shipping', JSON.stringify(this.restaurant));

              store.userCart = JSON.parse(localStorage.getItem("my_data"));

              document.getElementById('success').classList.remove('d-none');
            }
          }
        } else {
          document.getElementById('select').classList.remove('d-none');
        }
      } else {

        localStorage.setItem('my_data', JSON.stringify(this.order));
        localStorage.setItem('slug', JSON.stringify(this.$route.params.slug));
        localStorage.setItem('price_shipping', JSON.stringify(this.restaurant));

        store.userCart = JSON.parse(localStorage.getItem("my_data"));

        document.getElementById('success').classList.remove('d-none');
      }

    },

    showlog() {
      // console.log(store.userCart.dish)
      console.log(localStorage.getItem('my_data'))
      console.log(this.order)
      console.log(store.userCart)
    },

    disableInput() {
      for (let i = 0; i < this.restaurant.dishes.length; i++) {
        if (document.querySelector(`.check_${i}`).checked === true) {
          document.querySelector(`.input_${i}`).disabled = false;
        }
        else if (document.querySelector(`.check_${i}`).checked === false) {
          document.querySelector(`.input_${i}`).value = '';
          document.querySelector(`.input_${i}`).disabled = true;
        }
      }
    }
  },
  created() {
    axios
      .get(`http://localhost:8000/api/restaurants/${this.$route.params.slug}`)
      .then((response) => {
        this.restaurant = response.data;
        // console.log(this.restaurant)
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

<style lang="scss" scoped>
.my-restaurant {
  background-color: rgb(253, 187, 45);
}

.name {
  padding-top: 10px;
  color: rgb(195, 34, 34);
  font-size: 60px;
  font-weight: 700;
}

h5 {
  color: rgb(195, 34, 34);
  font-weight: 700;
  font-size: 30px;
}

.btn {
  background-color: rgb(195, 34, 34);
}

.info {

  color: white;
  font-size: 20px;
  font-weight: 700;
}

.dish {

  border-radius: 15px;
  padding-top: 60px;

}

.quant {
  width: 50px;
}


.my-img {
  padding-top: 30px;
  padding-bottom: 30px;
  width: 400px;
}

article {
  position: relative;
  width: 160px;
  height: 80px;
  margin: 20px;
  float: left;
  border: 2px solid rgb(195, 34, 34);
  box-sizing: border-box;
  background-color: white;
  color: rgb(253, 187, 45);
  font-weight: 700;
  font-size: 17px;
  text-align: center;
  
}

article div {
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
}

article input {
  position: absolute;
  top: 0;
  left: 0;
  width: 140px;
  height: 100px;
  opacity: 0;
  cursor: pointer;
}

#demo {
  -webkit-box-shadow: 0px 0px 25px 0px rgb(195, 34, 34);
  box-shadow: 0px 0px 25px 0px rgb(195, 34, 34);
}

#demo:hover {
  transform: scale(1.2);
  /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

input[type="checkbox"]:checked~div {
  background-color: rgb(195, 34, 34);
}

#advise, #warning, #select{
  color:rgb(195, 34, 34) ;
  font-size: 20px;
  font-weight: 700;
}

#success{
  color:green;
  font-size: 20px;
  font-weight: 700;
}

@media(max-width: 798px) {
  .dish {
    margin-top: 10px;
  }

  .info {
    margin-bottom: 10px;
    margin-top: 100px;
    padding-bottom: 30px;
  }
}

@media(min-width: 800px) and (max-width: 991px) {

  .info {
    margin-top: 50px;
    margin-bottom: 10px;
    margin-top: 150px;
  }
}

@media(min-width: 768px) and (max-width: 991px) {

  article{
  right: -8%;
}
}

@media(min-width: 992px) and (max-width: 1399px) {
  .dish{
  margin-top: 120px;
}
.info{
  margin-bottom: 50px;
  padding-bottom: 30px;
  margin-top: 150px;
}
article{
  right: -10%;
}
}

@media(min-width: 1400px) {
  .dish {
    margin-top: 150px;
  }

  .info {
    margin-bottom: 50px;
    margin-top: 180px;
    padding-bottom: 30px;
  }
  article{
  right: -4%;
}
}
</style>
