<script>
import { store } from "../store";

export default {
    name: "CategorysList",
    data() {
        return {
            store,
            visible: false,
        };
    },
    methods:{
        toggleCategory(index) {
            this.store.categories.forEach(element => {                
                element[index].selected = !element[index].selected;
            });

        },
    },
    computed: {
    filteredRestaurants() {
            //prendo l'array dei nomi delle categorie
            const selectedCategories = this.store.categories
            .filter(category => category.selected)
            .map(category => category.name);
                 
            // filtro i risultati basandomi su quell'array
            return this.store.restaurants.filter(restaurant => {
                // prendo l'array dei nomi delle categorie per quei ristoranti
                const categoryNames = restaurant.categories.map(category => category.name);
            // controllo se TUTTE le categorie selezionate sono presenti in quelle dei risto
            return selectedCategories.every(category => categoryNames.includes(category));
        });
        },
        isActive(){
            // di base nasconde la sezione dedicata ai ristoranti ma si attiva se almeno uno è selezionato
            return this.store.categories.some(category => category.selected);
        }
    },
};
</script>
<template>
    <div class="d-flex justify-content-around">
        <div>
            <h2>Categories</h2>
            <ul>
                <li v-for="(category, index) in store.categories" :key="index">
                <div>
                    <input type="checkbox" v-model="category.selected" @change="toggleCategory(index)">
                    {{ category.name }}
                </div>
                </li>
            </ul>
        </div>
        <div>
           <h2>Restaurants</h2>
            <ul v-if="isActive">
                <li v-for="(restaurant, index) in filteredRestaurants" :key="index">
                <router-link :to="{name:'single-restaurant', params: { slug: restaurant.slug }}">{{ restaurant.name }}</router-link>
                </li>
            </ul> 
        </div>
    </div>
  </template>

<style lang="scss" scoped>
ul {
    list-style: none;
}
</style>