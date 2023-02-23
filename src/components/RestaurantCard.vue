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
      <h5 class="card-title">{{ data.name }}</h5>
      <img v-if="data.img" :src="data.img" class="card-img-top" :alt="data.name">
      <small>{{ data.phone_number }}</small>
      <span>{{ data.opening_time }}</span>
      <span>{{ data.closing_time }}</span>
      <div>
        <span>€{{ data.price_shipping }}</span>
      </div>

      <router-link :to="{ name: 'single-restaurant', params: { slug: data.slug } }" class="btn btn-primary">Leggi di
        più</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
