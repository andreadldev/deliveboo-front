<script>
import { store } from "../store";
import CategoryCard from "./CategoryCard.vue";
import RestaurantsList from "./RestaurantsList.vue";
import RestaurantCard from "./RestaurantCard.vue";

export default {
    name: "CategorysList",
    components: {
        CategoryCard,
        RestaurantCard,
    },
    data() {
        return {
            store,
            visible: false,

            images: [
                "https://thumbs.dreamstime.com/b/memorial-day-usa-independence-picnic-party-fourth-july-concept-patriotic-american-traditional-food-watermelon-burgers-hot-219579658.jpg",
                "https://shfoodspro.com/wp-content/uploads/2021/02/Vietnamese-Pho.jpg",
                "https://www.limmi.it/wp-content/uploads/2022/05/insalata-ceci-scaled.jpg",
                "https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750/tk-traditional-indian-foods-to-taste-in-2022-phpEXAXNS",
                "https://theplanetd.com/images/Traditional-Italian-Food.jpg",
                "https://cdn4.tuscanynowandmore.com/storage/app/media/discover-italy/bacalao-fish.jpg",
                "https://blog.amigofoods.com/wp-content/uploads/2020/09/mexican-food.jpg",
                "https://www.viaggioff.it/wp-content/uploads/2021/05/poke-bowl-scaled.jpg",
                "https://www.comeindubai.com/wp-content/uploads/2021/04/fast-food-dubai-scaled.jpeg",
                "https://www.thespruceeats.com/thmb/KKVYHEcAN6Jt7yvULfCB4r3ad30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sushi-5079606-hero-01-e5a0a26f194a49478f84e04193baaefa.jpg",
                "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2018/08/tiramisu-1535368950.jpeg",
            ],
        };
    },
    computed: {
        filteredRestaurants() {
            //prendo l'array dei nomi delle categorie
            const selectedCategories = this.store.categories
                .filter((category) => category.selected)
                .map((category) => category.name);

            // filtro i risultati basandomi su quell'array
            return this.store.restaurants.filter((restaurant) => {
                // prendo l'array dei nomi delle categorie per quei ristoranti
                const categoryNames = restaurant.categories.map(
                    (category) => category.name
                );
                // controllo se TUTTE le categorie selezionate sono presenti in quelle dei risto
                return selectedCategories.every((category) =>
                    categoryNames.includes(category)
                );
            });
        },
        toggleCategory(index) {
            this.store.categories[index].selected =
                !this.store.categories[index].selected;
        },
        isActive() {
            // di base nasconde la sezione dedicata ai ristoranti ma si attiva se almeno uno è selezionato
            return this.store.categories.some((category) => category.selected);
        },
    },
};
</script>
<template>
    <div class="my-category">
        <div class="d-flex flex-column">
            <h2 class="mt-5 ">Seleziona una o più Categorie:</h2>
            <div class="m-auto">

                <ul class="container d-flex flex-wrap justify-content-start">
                    <li v-for="(category, index) in store.categories" :key="index">
                        <!-- <div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <input type="checkbox" v-model="category.selected" @change="toggleCategory(index)">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          {{ category.name }}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div> -->
                        <article id="demo" class="feature1">
                            <input type="checkbox" id="feature1" v-model="category.selected"
                                @change="toggleCategory(index)" />

                            <div class="w-200 d-flex flex-column justify-content-between">
                            <img class="img-fluid w-200" :src="images[index]" alt="" />
                            <span class="my-span"> {{ category.name }}<br /> </span>
                        </div>

                    </article>


                </li>
            </ul>


            </div>
            <!-- INIZIO CAROSELLO -->
            <!-- <div id="carouselExampleCaptions" class="carousel carousel-dark slide" data-bs-ride="false"> -->
            <!-- bottoni slide centrali sotto -->
            <!-- <div class="carousel-indicators">
                                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                                                        aria-current="true" aria-label="Slide 1"></button>
                                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                                        aria-label="Slide 2"></button>

                                                </div> -->
            <!-- fine bottoni slide centrali sotto -->

            <!-- intero carosello -->
            <!-- <div class="carousel-inner"> -->
            <!-- 1 pagina -->
            <!-- <div class="carousel-item active d-flex">
                                                        <div v-for="(category, index) in store.categories" :key="index" class=" card-group col-2 container">
                                                            <div class="card ">
                                                                <img src="..." class="card-img-top" alt="...">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">{{ category.name }}</h5>

                                                                </div>
                                                            </div>


                                                        </div>

                                                    </div> -->
            <!-- fine 1 pagina -->

            <!-- 2 pagina -->
            <!-- <div class="carousel-item">
                                                        <div class="card-group"> -->


            <!-- </div> -->

            <!-- </div> -->
            <!-- fine 2 pagina -->

            <!-- 3 pagina -->

            <!-- fine 3 pagina -->

            <!-- </div> -->
            <!-- fine intero carosello -->

            <!-- bottoni slide -->
            <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                                                    data-bs-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                                                    data-bs-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Next</span>
                                                </button> -->
            <!-- fine bottoni slide -->

            <!-- </div> -->
            <!-- FINE CAROSELLO -->

            <div class="container">
                <div class="d-flex">
                    <ul class="row" v-if="isActive">
                        <h2>La tua selezione: </h2>
                        <li class="col-4 my-card" v-for="(restaurant, index) in filteredRestaurants" :key="index">
                            <RestaurantCard :data="restaurant" />
                            <router-link :to="{
                                name: 'single-restaurant',
                                params: { slug: restaurant.slug },
                            }"></router-link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.my-category {
    margin-top: -100px;
    margin-bottom: -50px;
}

h2 {
    color: rgb(195, 34, 34);
}

ul {
    list-style: none;
}

body {
    text-align: center;
    color: #f5f5f5;
    background-image: linear-gradient(-90deg, #0c0c0d, #1a1a1a);
    font-family: "Roboto";
}

.app {
    max-width: 300px;
    margin: 0 auto;
}

article {
    position: relative;
    width: 140px;
    height: 120px;
    margin: 20px;
    float: left;
    border: 2px solid rgb(253, 187, 45);

    box-sizing: border-box;
}

article div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 25px;
    transition: 0.5s ease;
}

article input {
    position: absolute;
    top: 0;
    left: 0;
    width: 140px;
    height: 100px;
    opacity: 0;
    cursor: pointer;
}

#demo {
    -webkit-box-shadow: 0px 0px 25px 0px #ffc44a;
    box-shadow: 0px 0px 25px 0px #ffc44a;
}

#demo:hover {
    transform: scale(1.2);
    /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

input[type="checkbox"]:checked~div {
    background-color: rgb(253, 187, 45);
}

.category {
    color: rgb(195, 34, 34);
    font-size: 18px;
}

.container {
    margin-top: 50px;
    padding-top: 50px;
}

.my-card {
    margin-top: 25px;
    margin-bottom: 25px;
}
</style>
