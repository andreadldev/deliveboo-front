<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <div>
    <router-link :to="{ name: 'homepage' }">Home</router-link>
  </div>
  <div>
    <router-link :to="{ name: 'restaurants' }">Ristoranti</router-link>
  </div>
  <div>
    <router-link :to="{ name: 'about-us' }">Chi siamo</router-link>
  </div>
</template>



<style lang="scss" scoped></style>
