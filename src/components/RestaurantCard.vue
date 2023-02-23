<script>
export default {
  name: "RestaurantCard",
  props: {
    data: Object,
  },
};
</script>

<template>
  <div class="card m-4">
    <div class="card-body">
      <h5 class="card-title">{{ data.name }}</h5>
      <p class="card-text">
        {{ data.description }}
      </p>
      <router-link
        :to="{ name: 'single-restaurant', params: { slug: data.slug } }"
        class="btn btn-primary"
        >Leggi di più</router-link
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
