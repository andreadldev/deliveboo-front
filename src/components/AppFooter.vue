<script>
export default {
  name: "AppFooter",
};
</script>

<template >
  <!-- Remove the container if you want to extend the Footer to full width. -->
  <div class=" my-footer my-5 ">
    <!-- Footer -->
    <footer class="text-center text-lg-start text-white">
      <!-- Grid container -->
      <div class="container p-4 pb-0">
        <!-- Section: Links -->
        <section class="">
          <!--Grid row-->
          <div class="row">
            <!-- Grid column -->
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 my-column-footer">
              <h6 class="text-uppercase mb-4 my-font">
                Scopri Deliveroo
              </h6>
              <small>
                <a href="/chi-siamo" class="my-link">Investitori</a> <br>
                <a href="/chi-siamo" class="my-link">Chi siamo</a> <br>
                <a href="/ristoranti" class="my-link">Ristoranti</a> <br>
                <a href="" class="my-link">Altro</a> <br>
                <a href="" class="my-link">Lavora con noi</a> <br>
                <a href="" class="my-link">Diventa nostro partner</a>
              </small>
            </div>
            <!-- Grid column -->

            <hr class="w-100 clearfix d-md-none" />

            <!-- Grid column -->
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 my-column-footer">
              <h6 class="text-uppercase mb-4 my-font">Note legali</h6>
              <small>
                <a href="" class="my-link">Termini & Condizioni</a> <br>
                <a href="" class="my-link">Informativa sulla privacy</a> <br>
                <a href="" class="my-link">Cookies</a>
              </small>
            </div>
            <!-- Grid column -->

            <hr class="w-100 clearfix d-md-none" />

            <!-- Grid column -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 my-column-footer">
              <h6 class="text-uppercase mb-4 my-font">
                Contatti
              </h6>
              <small>
                <a href="https://www.google.it/maps/place/Deliveroo+-+Uffici/@45.440727,9.1550847,15z/data=!3m1!4b1!4m5!3m4!1s0x4786c3eb2e46548f:0x41f8390b6101381c!8m2!3d45.4407273!4d9.163818"
                  class="my-link">Indirizzo</a> <br>
                <a href="" class="my-link">+39 3476589065</a> <br>
                <a href="" class="my-link">800 666 898</a> <br>
                <a href="" class="my-link">help@deliveboo.com</a>
              </small>
            </div>

            <!-- Grid column -->
            <hr class="w-100 clearfix d-md-none" />

            <!-- Grid column -->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 my-column-footer">
              <h6 class="text-uppercase mb-4 my-font">Social</h6>

              <small>
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
              </small>
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
  background: rgb(195, 34, 34);
  background: linear-gradient(0deg, rgba(195, 34, 34, 1) 0%, rgba(253, 187, 45, 1) 100%);

}

.my-font {
  font-weight: 800;
}

.my-link {
  color: white;
  text-decoration: none;
}
</style>
