<script>
export default {
  name: "AppFooter",
};
</script>

<template >
  <!-- Remove the container if you want to extend the Footer to full width. -->
  <div class=" my-footer my-5 ">
    <!-- Footer -->
    <footer class="text-center text-lg-start text-white" style="background-color: #ffa500">
      <!-- Grid container -->
      <div class="container p-4 pb-0">
        <!-- Section: Links -->
        <section class="">
          <!--Grid row-->
          <div class="row">
            <!-- Grid column -->
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 my-column-footer">
              <h6 class="text-uppercase mb-4 my-font">
                Deliveboo
              </h6>
              <small>
                I piatti e i prodotti che ami, consegnati in pochissimo tempo. Vedrai quando il rider ha ritirato
                l'ordine, che potrai seguire passo passo, e riceverai una notifica quando sarà quasi da te.
              </small>
            </div>
            <!-- Grid column -->

            <hr class="w-100 clearfix d-md-none" />

            <!-- Grid column -->
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 my-column-footer">
              <h6 class="text-uppercase mb-4 my-font">Products</h6>
              <p>
                <a class="text-white">MDBootstrap</a>
              </p>
              <p>
                <a class="text-white">MDWordPress</a>
              </p>
              <p>
                <a class="text-white">BrandFlow</a>
              </p>
              <p>
                <a class="text-white">Bootstrap Angular</a>
              </p>
            </div>
            <!-- Grid column -->

            <hr class="w-100 clearfix d-md-none" />

            <!-- Grid column -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 my-column-footer">
              <h6 class="text-uppercase mb-4 my-font">
                Social
              </h6>
              <p>
                <a class="text-white">Facebook</a>
              </p>
              <p>
                <a class="text-white">Instagram</a>
              </p>
              <p>
                <a class="text-white">TikTok</a>
              </p>
              <p>
                <a class="text-white">Twitter</a>
              </p>
            </div>

            <!-- Grid column -->
            <hr class="w-100 clearfix d-md-none" />

            <!-- Grid column -->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 my-column-footer">
              <h6 class="text-uppercase mb-4 my-font">Contatti</h6>
              <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
              <p><i class="fas fa-envelope mr-3"></i> info@deliveboo.com</p>
              <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
              <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
            </div>
            <!-- Grid column -->
          </div>
          <!--Grid row-->
        </section>
        <!-- Section: Links -->

        <hr class="my-3">

        <!-- Section: Copyright -->
        <section class="p-3 pt-0">
          <div class="row d-flex align-items-center my-column-footer">
            <!-- Grid column -->
            <div class="col-md-7 col-lg-8 text-center text-md-start">
              <!-- Copyright -->
              <div class="p-3">
                © 2023 Copyright:
                <a class="text-white" href="">Deliveboo.com</a>
              </div>
              <!-- Copyright -->
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
          </div>
        </section>
        <!-- Section: Copyright -->
      </div>
      <!-- Grid container -->
    </footer>
    <!-- Footer -->
  </div>
  <!-- End of .container -->
</template>



<style lang="scss" scoped>
.my-footer {
  // position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

}

.my-font {
  font-weight: 800;
}
</style>
