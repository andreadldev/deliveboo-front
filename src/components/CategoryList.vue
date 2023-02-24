<script>
import { store } from "../store";
import CategoryCard from "./CategoryCard.vue";

import axios from "axios";
export default {
    name: "CategorysList",
    components: {
        CategoryCard,
    },
    data() {
        return {
            store,
            selected: [],
            prova: []
            // this.selected.slice(-1)[0]
        };
    },
    methods: {
        prova_api() {
            axios.get(`http://localhost:8000/api/restaurants/`)
            .then((response) => {
                this.prova=response.data;
            })
            .catch((err) => {
                console.log(err);
                // this.$router.push({ name: "page-404" });
            });
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

                <div class="col-4" v-for="category in store.categories" @click="prova_api()">
                    <input type="checkbox" :value=category.slug v-model="selected">
                    <label>{{category.name}}</label>
                </div>
                <p>Lista: {{ selected }}</p>

                <div v-for="(select, index) in selected">
                    <div class="m-4" v-for="restaurant in this.prova">
                        <div v-for="category in restaurant.categories">
                            <div v-if="category.slug == this.selected[index]">
                                <span>{{ restaurant.name }}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>