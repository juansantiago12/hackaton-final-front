<template>
   <div class="container">
      <nav>
         <div class="menu">
            <img src="../assets/Pachaqtec-logo.jpg" alt="" class="menu-logo" />
            <div class="menu-list">
               <ul :class="mostrar">
                  <li class="menu-item">
                     <router-link to="/" class="menu-link">Home</router-link>
                  </li>
                  <li class="menu-item">
                     <router-link to="/about" class="menu-link">About</router-link>
                  </li>
                  <li class="menu-item"><a href="#" class="menu-link">Contacts</a></li>
                  <li class="menu-item"><a href="#" class="menu-link">Services</a></li>
                  <li class="menu-item"><a href="#" class="menu-link">More</a></li>
               </ul>
            </div>
            <div class="menu-rigth">
               <router-link to="/carrito"><i class="fas fa-shopping-cart"></i></router-link>
               <a href=""><i class="fas fa-bars" @click.prevent="mostrarMenu"></i></a>
            </div>
         </div>
      </nav>
      <section class="carrito">
         <div class="cursos">
            <article>
               <img src="" alt="" />
               <div class="curso-text">
                  <h3>Gestión de Envaces, Empaques y Embalajes</h3>
               </div>
            </article>
         </div>
         <div class="subtotal"></div>
      </section>
   </div>
</template>

<script>
export default {
   data() {
      return {
         mostrar: '',
      };
   },
   methods: {
      mostrarMenu() {
         if (this.mostrar == 'show') {
            this.mostrar = '';
         } else {
            this.mostrar = 'show';
         }
      },
   },
   name: 'Carrito',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap');

/* estilos generales */
* {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
}
body {
   font-family: 'Roboto', sans-serif;
}
a {
   text-decoration: none;
}
li {
   list-style: none;
}
.container {
   min-height: 100vh;
}
nav {
   background-color: #000425;
}
/* seccion menu */
.menu {
   max-width: 90%;
   height: 70px;
   margin-left: auto;
   margin-right: auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
}
.menu-logo {
   width: 200px;
}
.menu-list ul {
   display: flex;
   justify-content: space-between;
   align-items: center;
}
.menu-item {
   margin: 0 15px;
   color: white;
}
.menu-link {
   color: white;
   font-weight: bold;
}
.menu-link:hover {
   border-bottom: 2px solid white;
   padding-bottom: 2px;
}
.menu-rigth a {
   margin: 0 10px;
   color: white;
}

/* media query menu */
@media screen and (max-width: 800px) {
   .menu-list ul {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      background-color: gray;
      min-width: 25%;
      height: 350px;
      padding: 30px;
      opacity: 0.9;
      transform: translateX(-400px);
      transition: transform 0.5s ease-in-out;
   }
   .menu-list ul.show {
      transform: translateX(0px);
   }
   .menu-list li {
      padding: 15px 0;
   }
}
</style>
