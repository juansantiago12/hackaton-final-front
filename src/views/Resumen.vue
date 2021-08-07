<template>
   <div class="container">
      <nav>
         <div class="menu">
            <router-link to="/" class="menu-link">
               <img src="../assets/pachaqtec.png" alt="" class="menu-logo" />
            </router-link>

            <div class="menu-list">
               <ul class="mostrar">
                  <!-- <li class="menu-item"></li>
                  <li class="menu-item">
                     <router-link to="/about" class="menu-link">About</router-link>
                  </li>
                  <li class="menu-item"><a href="#" class="menu-link">Contacts</a></li>
                  <li class="menu-item"><a href="#" class="menu-link">Services</a></li>
                  <li class="menu-item"><a href="#" class="menu-link">More</a></li> -->
               </ul>
            </div>
            <div class="menu-rigth">
               <router-link to="/carrito"><img src="../assets/carrito.png" alt=""/></router-link>
               <a to="/resumen"><img src="../assets/layer.png" alt=""/></a>
            </div>
         </div>
      </nav>
      <section class="carrito">
         <div class="carrito-content">
            <div class="cursos">
               <h2>Resumen de compra</h2>
               <article v-for="(curso, index) in cursoAgregado" :key="index">
                  <img class="curso-img" :src="curso.image" alt="" />
                  <div class="curso-text">
                     <h3>{{ curso.nombre }}</h3>
                     <p>Descuento 25%</p>
                  </div>
                  <p class="curso-precio">S/ {{ curso.precio }}</p>
               </article>
               <div class="curso-total">
                  <p>Precio Final con el descuento</p>
                  <p>S/ {{ order.total }}</p>
               </div>
            </div>
            <div class="subtotal">
               <div class="form">
                  <p class="fin">¡Compra exitosa!</p>
                  <p class="boleta">
                     La boleta o factura solicitada será enviada a tu correo en unos momentos.
                  </p>
                  <button>Volver a mis cursos</button>
               </div>
            </div>
         </div>
      </section>
   </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
   data() {
      return {
         self: this,
      };
   },
   computed: {
      ...mapState(['order', 'cursoAgregado']),
   },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap');
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
   font-size: 18px;
   color: white;
   font-weight: bold;
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

/* seccion cursos comprados */
.carrito {
   background-color: #f8f8fa;
}
.carrito-content {
   max-width: 90%;
   margin-left: auto;
   margin-right: auto;
   display: grid;
   grid-template-columns: 60% 1fr;
}
.cursos h2 {
   margin: 30px 0;
   font-family: 'Poppins', sans-serif;
   font-size: 20px;
   font-weight: bold;
}
.cursos article {
   display: grid;
   grid-template-columns: 30% 1fr 20%;
   margin-bottom: 20px;
}
.curso-img {
   display: block;
   width: 100%;
   max-height: 120px;
   border-radius: 5px;
}
.curso-text {
   margin-left: 20px;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   padding: 8px 0;
}
.curso-text h3 {
   font-family: 'Roboto', sans-serif;
   font-size: 16px;
   font-weight: bold;
   margin-bottom: 16px;
}
.curso-text p {
   font-family: 'Roboto', sans-serif;
   color: #5640ff;
   font-size: 14px;
   font-weight: bold;
}
.curso-text-more {
   display: flex;
}
.curso-text-more a {
   font-family: 'Poppins', sans-serif;
   font-size: 14px;
   color: #5640ff;
   border-bottom: 2px solid #5640ff;
   font-weight: bold;
   cursor: pointer;
}
.curso-text-more p {
   display: none;
}
.curso-precio {
   font-family: 'Poppins', sans-serif;
   font-size: 16px;
   font-weight: bold;
   text-align: center;
}
.curso-total {
   border-top: 1px solid black;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 20px 0;
   color: #5640ff;
   font-weight: bold;
   font-family: 'Poppins', sans-serif;
}
/* subtotal  */
.subtotal {
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 20px;
}
.form {
   width: 100%;
   margin-right: auto;
   margin-left: auto;
   padding: 30px;
   border-radius: 5px;
   background-color: white;
}
.fin {
   font-family: 'Poppins', sans-serif;
   font-size: 20px;
   font-weight: bold;
   margin-bottom: 20px;
}
.boleta {
   font-family: 'Roboto', sans-serif;
   font-size: 16px;
   font-weight: 300;
   margin-bottom: 20px;
}
.form input {
   width: 100%;
   padding: 16px;
   margin-bottom: 30px;
   border: 1px solid rgb(105, 103, 103);
   border-radius: 5px;
}
.form button {
   width: 100%;
   padding: 16px;
   background-color: #5640ff;
   color: white;
   font-weight: bold;
   border: none;
   border-radius: 5px;
   font-family: 'Poppins', sans-serif;
}
::placeholder {
   opacity: 0.5;
}
.form button:hover {
   opacity: 0.5;
   cursor: pointer;
}
/* media query carrito */
@media screen and (max-width: 900px) {
   .carrito-content {
      grid-template-columns: 1fr;
      justify-items: center;
      align-items: center;
   }
   .subtotal {
      width: 90%;
      margin-bottom: 30px;
   }
   .form {
      margin-top: 30px;
   }
}

@media screen and (max-width: 900px) {
   .curso-precio {
      display: none;
   }
   .cursos article {
      grid-template-columns: 40% 60%;
   }
   .curso-text-more p {
      display: block;
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      font-weight: bold;
      color: black;
      margin-left: 50px;
   }
   .form {
      padding: 20px 10px;
   }
}
</style>
