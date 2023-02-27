<template>
  <div v-if="restaurant" class="text-center">
    <h1>{{ restaurant.name }}</h1>
    <img v-if="restaurant.img" :src="restaurant.img" :alt="restaurant.name">
    <div class="text-center">
      <small>Indirizzo: {{ restaurant.address }}</small>
      <div>Descrizione: {{ restaurant.description }}</div>
      <span>Costo spedizione: {{ restaurant.price_shipping }}€</span>
      <div class="m-4">
        <router-link class="text-decoration-none text-white  btn btn-warning rounded-0"
          :to="{ name: 'checkout' }">Menù</router-link>
      </div>
      <h5>I nostri piatti:</h5>
      <!-- inizio form -->
      <form @submit.prevent="saveData()">
            <div v-for="dish in restaurant.dishes">
            <div>
              <label for="check">{{ dish.name }}</label>
              <input type="checkbox" name="check" id="check" v-model="order.dish">
            </div>
            <div>
              <label class="w-25px" for="number">Inserisci la quantità</label>
              <input type="number" name="quantity" id="quantity" pattern="[0-9]+([\.][0-9]+)?">
            </div>
          </div>
          <button class="btn btn-warning" type="submit" >Aggiungi al carrello</button>
          <button @click="showlog()">Log</button>
        </form>        

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
      order:{
        dish:[],
        quantity:[]
      },
      currentUser: ''
    };
  },
  methods:{
    saveData(){
      localStorage.setItem('my_data', JSON.stringify(this.user))
      }
    },
    showlog(){
      console.log('ciao')
    },
  mounted(){
    if(this.currentUser){
      this.currentUser = JSON.parse(localStorage.getItem('my_data'))
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
img {
  width: 800px;
}
</style>
