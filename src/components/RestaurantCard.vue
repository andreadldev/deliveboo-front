<script>
export default {
  name: "RestaurantCard",
  props: {
    data: Object,
  },
};
</script>

<template>
  <div class="w-100 card m-4">
    <div class="card-body">
      <h5 class="card-title text-center">{{ data.name }}</h5>
      <img
        v-if="data.img"
        :src="data.img"
        class="card-img-top"
        :alt="data.name"
      />
      <small>Telefono: {{ data.phone_number }}</small>
      <div>
        <span>Apre: {{ data.opening_time }}</span> <br />
        <span>Chiude: {{ data.closing_time }}</span>
      </div>

      <div>
        <span>Costo di spedizione: €{{ data.price_shipping }}</span>
      </div>
      <div class="text-center m-4">
        <router-link
          :to="{ name: 'single-restaurant', params: { slug: data.slug } }"
          class="btn btn-primary"
          >Dettagli</router-link
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
