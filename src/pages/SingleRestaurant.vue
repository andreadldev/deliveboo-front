<template>
  <div v-if="restaurant" class="text-center my-restaurant">

    <div class="container">
      <div class="row align-items-center">
        <div class="col-6 info">
          <img class="my-img" v-if="restaurant.img" :src="restaurant.img" :alt="restaurant.name">
          <div class="text-center">
            <h1 class="name">{{ restaurant.name }}</h1>
            <div> {{ restaurant.description }}</div>
            <div>{{ restaurant.address }}</div>
            <div>Orario Apertura {{ restaurant.opening_time }} </div>
            <div>Orario Chiusura {{ restaurant.closing_time }} </div>
            <span>Costo spedizione: {{ restaurant.price_shipping }}€</span>
          </div>
        </div>
        <div class="col-6 dish">
          <!-- form -->
              <h5>I nostri piatti:</h5>
              <form @submit.prevent="saveData()">
                <div v-for="(dish, index) in restaurant.dishes" :key="index">
                  <div class="d-flex justify-content-center flex-column w-10">
                    <article class="wrapper " id="demo">
                        <input :id="'check-' + index" class="check ms-1 mt-2" type="checkbox" :value="dish" v-model="order.dish">
                        <div>
                        <label :for="'check-' + index">{{ dish.name }}</label>
                      </div>
                      <!-- modificare e aggiungere bottone -->
                    </article>
                </div>
                </div>
                <button class="btn btn-warning m-4" type="submit">Aggiungi al carrello</button>
                <button @click="showlog()">Log</button>
              </form>
            <div class="m-4">
                <router-link class="text-decoration-none text-white  btn btn-warning rounded-0" :to="{ name: 'checkout' }">Vai al carrello</router-link>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SingleRestaurant",
  data() {
    return {
      restaurant: null,
      order: {
        dish: [],
      },
    };
  },
  methods: {
    saveData() {

      localStorage.setItem('my_data', JSON.stringify(this.order))
      localStorage.setItem('slug', JSON.stringify(this.$route.params.slug))

      console.log(this.$route.params.slug)
      console.log('slug', JSON.stringify(this.$route.params.slug))
      console.log('my_data', JSON.stringify(this.order))
    },

    showlog() {
      console.log(localStorage.getItem('my_data'))
      console.log(localStorage.getItem('slug'))
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
.name{
  padding-top: 40px;
}
img {
  width: 300px;
  border-radius: 15px;
}
.info{
  margin-top: 250px;
  margin-bottom: 50px;
  padding-bottom: 30px;
  border: solid 1px;
  border-radius: 15px;
}
.dish{
  margin-top: 150px;
  border-radius: 15px;
  border: solid 1px;
  padding-top: 60px;
}
.quant {
  width: 50px;
}

.wrapper {
  position: relative
}

.my-img {
  padding-top: 60px;
}
article {
    position: relative;
    width: 140px;
    height: 120px;
    margin: 20px;
    float: left;
    border: 2px solid rgb(253, 187, 45);

    box-sizing: border-box;
}

article div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 25px;
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
    -webkit-box-shadow: 0px 0px 25px 0px #ffc44a;
    box-shadow: 0px 0px 25px 0px #ffc44a;
}

#demo:hover {
    transform: scale(1.2);
    /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

input[type="checkbox"]:checked~div {
    background-color: rgb(253, 187, 45);
}
</style>
