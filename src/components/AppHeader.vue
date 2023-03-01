<script>
export default {
  name: "AppHeader",
};
$(document).ready(function() {
    $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        e.stopPropagation();
    });

    $('html').click(function(){
        $('.nav-dropdown').hide();
    })
    $('#nav-toggle').click(function(){
        $('nav ul').slideToggle();
    })
    $('#nav-toggle').on('click', function(){
        this.classList.toggle('active');
    });
});
</script>

<template>
  <div class="all-header">
  <div class="img-preheader"></div>
  <div class="nav-bar">
        <div class="nav-container">
            <div class="brand">
                <a href="#">Logo</a>
            </div>
            <nav>
                <div class="nav-mobile">
                    <a href="#" id="nav-toggle">
                        <span></span>
                    </a>
                </div>
                <ul class="nav-list">
                  <li class="nav-item"><router-link class="text-decoration-none text-white nav-link mx-2" :to="{ name: 'homepage' }">Home</router-link></li>
                  <li class="nav-item"><router-link class="text-decoration-none text-white nav-link mx-2" :to="{ name: 'restaurants' }">Ristoranti</router-link></li>
                  <li class="nav-item"><router-link class="text-decoration-none text-white nav-link mx-2" :to="{ name: 'about-us' }">Chi siamo</router-link></li>
                  <li class="nav-item"><router-link class="text-decoration-none text-white  nav-link mx-2 btn rounded-0" style="background: linear-gradient(0deg, rgba(195,65,34,1) 0%, rgba(78,11,11,1) 100%)" :to="{ name: 'checkout' }"><i class="fa-solid fa-cart-shopping my-cart"></i></router-link></li>
                </ul>
            </nav>
        </div>
    </div>
  </div>
  <!-- <div class="all-header">
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
  </div> -->
</template>

<style lang="scss" scoped>

.nav-bar{
    height: 70px;
    background: rgb(253, 187, 45);
    background: linear-gradient(0deg, rgba(253, 187, 45, 1) 0%, rgba(195, 34, 34, 1) 100%);
}

.brand{
    float: left;
    position: absolute;
    padding-left: 20px;
    line-height: 70px;
    font-size: 1.5em;
}

.brand a{
    text-decoration: none;
    color: white;
}

.nav-container{
    max-width: 1000px;
    margin: 0 auto;
}

nav{
    float: right;
}

nav ul{
    list-style: none;
}

nav ul li{
    float: left;
    position: relative;
}

nav ul li a{
    display: block;
    padding: 0 20px;
    line-height: 70px;
    background: rgb(253, 187, 45);
    background: linear-gradient(0deg, rgba(253, 187, 45, 1) 0%, rgba(195, 34, 34, 1) 100%);
    text-decoration: none;
    color: #fff;
}

nav ul li a:hover{
    background: #2ab1ce;
    color: #fff;
}

nav ul li a:not(:only-child):after{
    content: '▼';
    padding-left: 5px;
}

nav ul li ul li {
    min-width: 190px;
}

nav ul li ul li a{
    padding: 15px;
    line-height: 20px;
}

.nav-dropdown{
    position: absolute;
    display: none;
    z-index: 1;
}

.nav-mobile{
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    height: 70px;
    width: 70px;
}

#nav-toggle{
    position: absolute;
    left: 18px;
    top: 22px;
    cursor: pointer;
    padding: 10px 35px 15px 0px;
}

#nav-toggle span,
#nav-toggle span::before,
#nav-toggle span::after{
    position: absolute;
    display: block;
    content: '';
    background: #fff;
    height: 5px;
    width: 35px;
    transition: all 300ms ease-in-out;
}

#nav-toggle span::before{
    top: -10px;
}

#nav-toggle span::after{
    bottom: -10px;
}

#nav-toggle.active span{
    background-color: transparent;
}

#nav-toggle.active span::before, #nav-toggle.active span::after{
    top: 0;
}

#nav-toggle.active span::before{
    transform: rotate(45deg);
}

#nav-toggle.active span::after{
    transform: rotate(-45deg);
}

@media only screen and (max-width: 768px) {

    .nav-mobile{
        display: block;
    }

    nav{
        width: 100%;
        padding: 70px 0 15px;
    }

    nav ul{
        display: none;
    }

    nav ul li {
        float: none;
    }

    nav ul li a{
        padding: 15px;
        line-height: 20px;
        padding-left: 25%;
    }


    nav ul li ul li a{
        padding-left: 30%;
    }

    .nav-dropdown{
        position: static;
    }
    .brand{
      display: block;
    }
}

@media screen and (min-width: 799px){
    .nav-list{
        display: block !important;
    }
    .brand{
      display: none;
    }
}
// @media screen and (min-width: 777px) {
//   .nav-link {
//     padding: 18px 0;
//     min-width: 120px;
//   }

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

//   .navbar {
//     padding: 0;
//   }

//   .my-nav {
//     position: relative;

//     width: 100%;
//     z-index: 1;
//     background: rgb(253, 187, 45);
//     background: linear-gradient(0deg, rgba(253, 187, 45, 1) 0%, rgba(195, 34, 34, 1) 100%);
//   }

  .my-cart {
    font-size: 20px;
  }
// }

// @media screen and (max-width: 777px){
//   .my-nav {
//     position: relative;

//     width: 100%;
//     z-index: 1;
//     background: rgb(253, 187, 45);
//     background: linear-gradient(0deg, rgba(253, 187, 45, 1) 0%, rgba(195, 34, 34, 1) 100%);
//   }
// }
</style>
