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
            selected: [],
        };
    },
    methods: {
        prova() {
            console.log(store.categories)
        }
    }
};
</script>

<template>
    <section class="container">
        <div class="row">
            <div class="col-4" v-for="category in store.categories">
                <CategoryCard :data="category" />
            </div>
            <div>
                <p> Seleziona categoria </p>

                <div class="col-4" v-for="category in store.categories" @click="prova()">
                    <input type="checkbox" :value=category.slug v-model="selected">
                    <label>{{category.name}}</label>
                </div>
                <p>Lista: {{ selected }}</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>