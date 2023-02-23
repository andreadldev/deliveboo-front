<script>
import { store } from "../store";
import CategoryCard from "./CategoryCard.vue";

export default {
    name: "CategorysList",
    components: {
        CategoryCard,
    },
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <section class="container">
        <div class="row">
            <div class="col-4" v-for="category in store.categories">
                <CategoryCard :data="category" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>