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
            visible: false,
        };
    },
    computed: {
    filteredRestaurants() {
            // Get an array of selected category names
            const selectedCategories = this.store.categories
            .filter(category => category.selected)
            .map(category => category.name);     
            // Filter the restaurants based on the selected categories
            return this.store.restaurants.filter(restaurant => {
                // Get an array of category names for the current restaurant
                const categoryNames = restaurant.categories.map(category => category.name);
            // Check if every selected category is included in the current restaurant's categories
            return selectedCategories.every(category => categoryNames.includes(category));
        });
        },
    toggleCategory(index) {
            this.store.categories[index].selected = !this.store.categories[index].selected;

        },
        isActive(){
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
                {{ restaurant.name }}
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