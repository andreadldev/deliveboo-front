import { createRouter, createWebHistory } from "vue-router";

// Pages
import HomePage from "./pages/HomePage.vue";
import Restaurants from "./pages/Restaurants.vue";
import SingleRestaurant from "./pages/SingleRestaurant.vue";
import SingleCategory from "./pages/SingleCategory.vue";

import AboutUs from "./pages/AboutUs.vue";
import Dishes from "./pages/Dishes.vue";
import Checkout from "./pages/Checkout.vue";

import Page404 from "./pages/Page404.vue";
import Order from "./pages/Order.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/ristoranti",
      name: "restaurants",
      component: Restaurants,
    },
    {
      path: "/chi-siamo",
      name: "about-us",
      component: AboutUs,
    },
    {
      path: "/piatti",
      name: "dishes",
      component: Dishes,
    },
    {
      path: "/ristorante/:slug",
      name: "single-restaurant",
      component: SingleRestaurant,
    },
    {
      path: "/categoria/:slug",
      name: "single-category",
      component: SingleCategory,
    },
    {
      path: "/carrello",
      name: "checkout",
      component: Checkout,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "page-404",
      component: Page404,
    },
    {
      path: "/ordine",
      name: "ordine",
      component: Order,
    },
  ],
});

export { router };
