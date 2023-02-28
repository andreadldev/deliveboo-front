<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <div class="all-header">
    <div class="img-preheader">
    </div>
    <nav class="navbar navbar-expand-md navbar-dark my-nav" style="background-color: #ffa500">
      <div class="container">
        <a class="navbar-brand d-md-none d-xs-block py-3" href="#">
          <img src="../assets/img/DELI.png" height="40" alt="Company Logo" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <router-link class="text-decoration-none text-white nav-link mx-2"
                :to="{ name: 'homepage' }">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="text-decoration-none text-white nav-link mx-2"
                :to="{ name: 'restaurants' }">Ristoranti</router-link>
            </li>
            <li class="nav-item">
              <router-link class="text-decoration-none text-white nav-link mx-2" :to="{ name: 'about-us' }">Chi
                siamo</router-link>
            </li>

            <li class="nav-item">
              <router-link class="text-decoration-none text-white  nav-link mx-2 btn rounded-0"
                style="background: linear-gradient(0deg, rgba(195,65,34,1) 0%, rgba(78,11,11,1) 100%)"
                :to="{ name: 'checkout' }"><i class="fa-solid fa-cart-shopping my-cart"></i></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 777px) {
  .nav-link {
    padding: 18px 0;
    min-width: 120px;
  }

  .all-header {
    position: fixed;
    width: 100%;
    z-index: 1;
  }

  .img-preheader {
    background-image: url(https://www.freewebheaders.com/wp-content/gallery/food/delicious-orange-salmon-caviar-website-header.jpg);
    // https://www.freewebheaders.com/wp-content/gallery/food/french-fries-natural-food-website-header-image.jpg
    background-size: cover;
    height: 100px;
    background-repeat: no-repeat;
    position: relative;

  }

  .navbar {
    padding: 0;
  }

  .my-nav {
    position: relative;

    width: 100%;
    z-index: 1;
    background: rgb(253, 187, 45);
    background: linear-gradient(0deg, rgba(253, 187, 45, 1) 0%, rgba(195, 34, 34, 1) 100%);
  }

  .my-cart {
    font-size: 20px;
  }


}
</style>
