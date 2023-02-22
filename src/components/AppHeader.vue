<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <!-- <header class="container ">

    <div class="d-flex justify-content-between">
      <div><img src="logo" alt="logo"></div>
      <div class="d-flex my-nav">
        <div class="my-link-header">
          <router-link :to="{ name: 'homepage' }">Home</router-link>
        </div>
        <div class="my-link-header">
          <router-link :to="{ name: 'restaurants' }">Ristoranti</router-link>
        </div>
                                    <div class="my-link-header">
                                      <router-link :to="{ name: 'about-us' }">Chi siamo</router-link>
                                    </div>
                                  </div>
                                </div>
                              </header> -->
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand d-md-none d-xs-block py-3" href="#">
        <img src="" height="40" alt="Company Logo">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link class="text-decoration-none nav-link mx-2" :to="{ name: 'homepage' }">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="text-decoration-none nav-link mx-2" :to="{ name: 'restaurants' }">Ristoranti</router-link>
          </li>
          <li class="nav-item">
            <router-link class="text-decoration-none nav-link mx-2" :to="{ name: 'about-us' }">Chi siamo</router-link>
          </li>

          <li class="nav-item">
            <router-link class="text-decoration-none nav-link mx-2 btn rounded-0 btn-danger"
              :to="{ name: 'checkout' }">Ordina</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="text-center p-3 d-none d-md-block">
    <img src="/static_files/images/logos/beer.png" height="120" alt="Company Logo">
  </div>
</template>



<style lang="scss" scoped>
.my-nav {
  .my-link-header {
    margin: 10px;
    text-decoration: none;
  }
}
</style>
