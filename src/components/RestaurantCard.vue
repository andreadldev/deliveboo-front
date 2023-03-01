<script>
export default {
  name: "RestaurantCard",
  props: {
    data: Object,
  },
};
</script>

<template>
  <div id="demoRest" class="w-100 h-100 card m-4 g-4 my-card-big" style="background-color: rgb(253, 187, 45)">
    <router-link :to="{ name: 'single-restaurant', params: { slug: data.slug } }" class="text-white">
      <div class="card-body p-0 d-flex flex-column justify-content-between">
        <img v-if="data.img" :src="data.img" class="card-img my-card" :alt="data.name" />
        <h5 class="card-title text-center">{{ data.name }}</h5>

        <div>
          <span>Costo di spedizione: €{{ data.price_shipping }}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border-color: rgba(216, 143, 84, 0.5);
  border-width: 3px;
}

.my-card-big {
  margin-top: 300px;
  width: 150px;
  height: 100px;
}

#demoRest {
  -webkit-box-shadow: 0px 0px 25px 0px #ffc44a;
  box-shadow: 0px 0px 25px 0px #ffc44a;
}

#demoRest:hover {
  transform: scale(1.1);
  /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

.my-card {
  height: 200px;
  object-fit: cover;
  margin-bottom: 20px;
}
</style>
