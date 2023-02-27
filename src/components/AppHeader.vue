<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-dark my-nav" style="background-color: #ffa500">
    <div class="container">
      <a class="navbar-brand d-md-none d-xs-block py-3 " href="#">
        <img src="../assets/img/DELI.png" height="40" alt="Company Logo">
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
            <router-link class="text-decoration-none text-white nav-link mx-2 btn rounded-0"
              style="background-color: #fa8072" :to="{ name: 'checkout' }">Ordina</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="text-center p-3 d-none d-md-block m-5">
    <img src="../assets/img/HAMB-LOGO orange.png" height="120" alt="Company Logo">
  </div>
</template>



<style lang="scss" scoped>
@media screen and (min-width:777px) {
  .nav-link {
    padding: 18px 0;
    min-width: 120px;
  }

  .navbar {
    padding: 0
  }
  .my-nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
  }
}
</style>
