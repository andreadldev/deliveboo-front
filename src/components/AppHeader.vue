<template>
  <!-- <div>
    <router-link :to="{ name: 'restaurants' }">Contatti</router-link>
  </div> -->

  <header class="container ">
    <nav class="navbar navbar-expand-lg fixed-top navbar-scroll">
      <div class="container">
        <img src="logo" height="70" alt="logo" loading="lazy" />
        <button class="navbar-toggler ps-0" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
          aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon d-flex justify-content-start align-items-center">
            <i class="fas fa-bars"></i>
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarExample01">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" aria-current="page" href="#news">Home</a>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Restaurants' }">Ristoranti</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="">Chi siamo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="">Lavora con noi</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="">Contatti</a>
            </li>
          </ul>

          <ul class="navbar-nav flex-row">
            <li class="nav-item">
              <a class="nav-link px-2" href="#!">
                <i class="fab fa-facebook-square"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-2" href="#!">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ps-2" href="#!">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
.navbar-scroll .nav-link,
.navbar-scroll .fa-bars,
.navbar-scroll .navar-brand {
  color: #4f4f4f;
}

.navbar-scroll .nav-link:hover {
  color: #1266f1;
}

/* Color of the links AFTER scroll */
.navbar-scrolled .nav-link,
.navbar-scrolled .fa-bars,
.navbar-scrolled .navar-brand {
  color: #4f4f4f;
}

/* Color of the navbar AFTER scroll */
.navbar-scroll,
.navbar-scrolled {
  background-color: #fff;
}

/* An optional height of the navbar AFTER scroll */
.navbar.navbar-scroll.navbar-scrolled {
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>
