<script>
export default {
  name: "RestaurantCard",
  props: {
    data: Object,
  },
};
</script>

<template>
  <div class="w-100 h-100 card m-4 g-4 my-card-big">
    <div class="card-body ">
      <h5 class="card-title text-center">{{ data.name }}</h5>
      <img v-if="data.img" :src="data.img" class="card-img-top" :alt="data.name" />
      <small>Telefono: {{ data.phone_number }}</small>
      <div>
        <span>Apre: {{ data.opening_time }}</span> <br />
        <span>Chiude: {{ data.closing_time }}</span>
      </div>

      <div>
        <span>Costo di spedizione: €{{ data.price_shipping }}</span>
      </div>
      <div class="text-center m-3">
        <router-link :to="{ name: 'single-restaurant', params: { slug: data.slug } }" class="btn text-white"
          style="background-color: rgb(253, 187, 45)">Dettagli</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border-color: orange;
  border-width: 3px;
}

.my-card-big {
  margin-top: 300px;
}
</style>
