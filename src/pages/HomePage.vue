<script>
import CategoryList from "../components/CategoryList.vue";
export default {
  name: "HomePage",
  components: {
    CategoryList,
  },
};
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <CategoryList class="text-center" />
  </div>
</template>



<style lang="scss" scoped></style>
