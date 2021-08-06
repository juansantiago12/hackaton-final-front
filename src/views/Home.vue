<template>
   <header>
      <div class="header">
         <nav>
            <div class="menu">
               <img src="../assets/pachaqtec.png" alt="" class="menu-logo" />
               <div class="menu-list">
                  <ul :class="mostrar">
                     <!-- <li class="menu-item">
                        <router-link to="/" class="menu-link">Home</router-link>
                     </li>
                     <li class="menu-item">
                        <router-link to="/about" class="menu-link">About</router-link>
                     </li>
                     <li class="menu-item"><a href="#" class="menu-link">Contacts</a></li>
                     <li class="menu-item"><a href="#" class="menu-link">Services</a></li>
                     <li class="menu-item">
                        <router-link to="/login" class="menu-link">Login</router-link>
                     </li> -->
                  </ul>
               </div>
               <div class="menu-rigth">
                  <router-link to="/carrito"><img src="../assets/carrito.png" alt=""/></router-link>
                  <a href=""><img src="../assets/layer.png" alt=""/></a>
               </div>
            </div>
         </nav>
         <section class="section-banner">
            <div class="banner">
               <div class="banner-text">
                  <h1>Explota todo tu potencial tecnológico!</h1>
                  <p>Con nuestros programas de especialización</p>
               </div>
            </div>
         </section>
      </div>
      <section class="section-grupos">
         <div class="grupos">
            <!-- <img src="../assets/Intercorp.svg" alt="" />
            <img src="../assets/idat.png" alt="" />
            <img src="../assets/zegel.png" alt="" /> -->
            <img src="../assets/grupo.png" alt="" />
         </div>
      </section>
   </header>

   <div class="cursos-container">
      <h2>Conoce nuestros programas de Especialización</h2>
      <div class="grid">
         <article
            v-for="(curso, index) in cursos"
            :key="index"
            :style="{ 'background-image': `url(${curso.image})` }"
         >
            <div class="curso-text">
               <h3>{{ curso.nombre }}</h3>
               <div class="enlace">
                  <div class="agregar">
                     <img src="../assets/carrito.png" alt="" />
                     <a @click="agregarId(curso.id)" class="agregar">Agregar</a>
                  </div>
                  <div class="ver">
                     <img src="../assets/mas.png" alt="" />
                     <router-link :to="`/infocurso/${curso.id}`" class="ver">Ver más</router-link>
                  </div>
               </div>
            </div>
         </article>
      </div>
   </div>

   <section class="comunidad">
      <div class="comunidad-content">
         <img src="../assets/chinita.png" alt="" />
         <div class="comunidad-text">
            <h3>Sé parte de la comunidad</h3>
            <p>
               Programas semi-presenciales para el desarrollo de habilidades de programación a lo
               largo de todo el Stack tecnológico.
            </p>
            <p>
               Al finalizar sabrás cómo crear una página web y desarrollar la lógica detrás del
               funcionamiento de una aplicación, así como formar parte de una gran comunidad de
               desarrolladores.
            </p>
         </div>
      </div>
   </section>

   <section class="more">
      <div class="more-content">
         <h2>Beneficios</h2>
         <article v-for="(beneficio, index) in beneficios" :key="index">
            <img :src="beneficio.icono" alt="" />
            <div class="more-text">
               <h3>{{ beneficio.titulo }}</h3>
               <p>{{ beneficio.detalle }}</p>
            </div>
         </article>
      </div>
   </section>

   <section class="formulario">
      <form class="form-register" @submit.prevent="getInteresado">
         <p>Postula y obtén un 10% de descuento en el programa</p>
         <input class="control" type="text" placeholder="NOMBRE" v-model="user.nombre" />
         <input class="control" type="number" placeholder="CELULAR" v-model="user.celular" />
         <input
            class="control"
            type="email"
            placeholder="CORREO ELECTRONICO"
            v-model="user.correo"
         />
         <!-- <input class="control" type="text" placeholder="PROGRAMA" v-model="user.curso" /> -->
         <select class="control" name="programa" id="program" v-model="user.curso">
            <option selected disabled>Elija el Programa</option>
            <option :value="curso.id" v-for="(curso, index) in cursos" :key="index">{{
               curso.nombre
            }}</option>
         </select>
         <div class="check">
            <input type="checkbox" value="privacidad" id="privacidad" v-model="aceptar" />
            <label for="privacidad">Acepto las Políticas de privacidad.</label>
         </div>
         <input type="submit" value="Quiero postular" class="control-btn" @click="postUser()" />
      </form>
   </section>
   <footer>
      <div class="footer-content">
         <!-- <img src="../assets/intercorp2.png" alt="" />
         <img src="../assets/idat2.png" alt="" />
         <img src="../assets/zegel.png" alt="" /> -->
         <img src="../assets/grupo2.png" alt="" />
      </div>
   </footer>
   <router-view />
   <!-- <ListaCursos /> -->
</template>

<script>
// import ListaCursos from '@/components/ListaCursos.vue';
import { mapActions, mapState } from 'vuex';

export default {
   data() {
      return {
         mostrar: '',
         user: {
            nombre: '',
            celular: '',
            correo: '',
            curso: '',
         },
         aceptar: false,
         beneficios: [],
      };
   },

   computed: {
      ...mapState(['cursos']),
   },

   methods: {
      ...mapActions(['getCursosAction']),
      ...mapActions(['addCursoAction']),
      // mostrarMenu() {
      //    if (this.mostrar == 'show') {
      //       this.mostrar = '';
      //    } else {
      //       this.mostrar = 'show';
      //    }
      // },

      agregarId(id) {
         this.addCursoAction(id);
      },

      getInteresado() {
         if (
            this.user.nombre === '' ||
            this.user.celular === '' ||
            this.user.correo === '' ||
            this.aceptar === false
         ) {
            alert('falta campos por llenar');
         } else {
            console.log(this.user);
         }
      },

      async postUser() {
         const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.user),
         };
         const response = await fetch('https://no-llores-mas.herokuapp.com/interesados/', request);
         const data = await response.json();
         console.log(data);
         this.user = {
            nombre: '',
            celular: '',
            correo: '',
            curso: '',
         };
      },

      async getBeneficios() {
         const response = await fetch('https://no-llores-mas.herokuapp.com/cursos/beneficios/');
         const data = await response.json();
         this.beneficios = data;
      },
   },

   created() {
      this.getCursosAction();
      this.getBeneficios();
   },
   name: 'Home',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600&display=swap');

/* estilos generales */
* {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
   font-family: 'Poppins', sans-serif;
}

a {
   text-decoration: none;
}
li {
   list-style: none;
}
header {
   height: 100vh;
}
.header {
   background-image: url('../assets/banner.png');
   background-repeat: no-repeat;
   background-size: cover;
   height: 70%;
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
.menu-link:hover {
   border-bottom: 2px solid white;
   padding-bottom: 2px;
}
.menu-rigth {
   display: flex;
   align-items: center;
}
.menu-rigth a {
   margin: 0 15px;
   color: white;
}
.menu-rigth a:hover {
   font-size: 20px;
}
/* seccion banner */
.section-banner {
   height: calc(100% - 70px);
}
.banner {
   max-width: 90%;
   height: 100%;
   margin-right: auto;
   margin-left: auto;
   display: flex;
   align-items: center;
}
.banner-text {
   color: white;
   width: 100%;
}
.banner h1 {
   font-size: 54px;
   font-weight: bold;
   letter-spacing: 2px;
}
.banner p {
   margin-top: 40px;
   font-size: 22px;
   font-weight: 500;
}

/* seccion formulario */

.formulario {
   margin-bottom: 40px;
}
.form-register {
   border-radius: 10px;
   max-width: 350px;
   margin-left: auto;
   margin-right: auto;
   padding: 30px;
   /* background-color: #f8f8fa; */
}
.form-register p {
   margin-bottom: 16px;
   font-weight: 500;
   font-size: 16px;
   text-align: left;
}
.control {
   width: 100%;
   padding: 13px 10px;
   border-radius: 5px;
   margin-bottom: 16px;
   border: 1px solid black;
}
.control-btn {
   width: 100%;
   padding: 10px;
   background-color: #5640ff;
   color: white;
   border: none;
   border-radius: 5px;
}
.control-btn:hover {
   cursor: pointer;
   opacity: 0.5;
}
.check {
   margin-bottom: 15px;
}
.check label {
   margin-left: 8px;
   font-weight: bold;
   font-size: 11px;
}

/* seccion grupos */
.section-grupos {
   margin-top: 70px;
}
.grupos {
   max-width: 90%;
   margin-left: auto;
   margin-right: auto;
   display: flex;
   justify-content: right;
   align-items: center;
}
.grupos img {
   width: 300px;
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

/*  seccion cursos */
.cursos-container {
   margin-top: 50px;
   max-width: 90%;
   margin-left: auto;
   margin-right: auto;
}
.grid {
   width: calc(100% - 400px);
   margin-top: 40px;
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-gap: 30px;
   align-items: center;
   justify-items: center;
}
.grid article {
   background-size: cover;
   border-radius: 10px;
   width: 100%;
   height: 300px;
   display: flex;
   align-items: flex-end;
}
.curso-text {
   width: 100%;
   padding: 25px 30px;
}
.curso-text h3 {
   color: white;
   margin-bottom: 15px;
   font-size: 25px;
}
.curso-text a {
   display: inline-block;
   color: white;
   font-size: 20px;
   cursor: pointer;
   font-weight: bold;
   margin-left: 5px;
}
.enlace {
   display: flex;
   justify-content: space-between;
   align-items: center;
}
.ver {
   display: flex;
   align-items: center;
   justify-content: space-between;
}
.agregar {
   display: flex;
   align-items: center;
   justify-content: space-between;
}

/* media query cursos */

@media screen and (max-width: 1090px) {
   .grid {
      grid-template-columns: 1fr;
   }
}

/* seccion comunidad */
.comunidad {
   margin-top: 150px;
   background-color: #5640ff;
   margin-bottom: 40px;
   position: relative;
}
.comunidad-content {
   width: 40%;
   min-height: 250px;
   margin-left: 300px;
   color: white;
   padding: 20px 0;
}
.comunidad-content img {
   display: inline-block;
   position: absolute;
   top: -100px;
   left: -70px;
}
.comunidad-text {
   margin: 20px 0;
}
.comunidad-text h3 {
   padding: 20px 0;
   font-size: 25px;
}
.comunidad-text > p {
   margin-bottom: 20px;
}

/* seccion beneficios */
.more {
   margin-top: 120px;
}
.more-content {
   margin-left: auto;
   margin-right: auto;
   max-width: 90%;
   display: grid;
   grid-template-columns: 1fr;
   justify-items: left;
   align-items: center;
   margin-bottom: 40px;
}

.more-content article {
   display: flex;
   justify-content: center;
   align-items: center;
   width: calc(100% - 400px);
   border-radius: 10px;
   background-color: #f8f8fa;
   padding: 25px 40px;
   margin: 20px 0;
}
.more-content img {
   width: 50px;
   /* color: #5640ff; */
}
.more-text {
   padding-left: 20px;
}
.more-text h3 {
   margin-bottom: 10px;
}

/* query beneficios */
@media screen and (max-width: 700px) {
   .more-text p {
      display: none;
   }
   .more-content article {
      width: 90%;
   }
}
@media screen and (max-width: 850px) {
   .more-content article {
      width: 100%;
   }
}

/* seccion footer */
footer {
   background-color: #222222;
}
.footer-content {
   max-width: 90%;
   margin-left: auto;
   margin-right: auto;
   display: flex;
   justify-content: right;
   align-items: center;
}
.footer-content img {
   margin-right: 20px;
   display: inline-block;
   width: 300px;
   padding: 20px 0;
}

/* media query comunidad */
@media screen and (max-width: 650px) {
   .banner-text h1 {
      font-size: 35px;
   }
   .banner-text p {
      font-size: 22px;
   }
   .comunidad-content {
      min-height: 550px;
   }
   .comunidad-content img {
      width: 300px;
      top: -120px;
      left: 0;
      right: 0;
      margin: auto;
   }
   .comunidad-text {
      margin-top: 250px;
   }
   .comunidad-content {
      margin-left: auto;
      margin-right: auto;
      width: 80%;
   }
   .more {
      margin-top: 50px;
   }
}

/* media query formulario */
@media screen and (min-width: 850px) {
   .formulario {
      background-image: url('../assets/mobile.png');
      background-repeat: no-repeat;
      background-size: contain;
      position: fixed;
      top: 100px;
      right: 5%;
      margin-bottom: 0;
      height: 600px;
      display: flex;
      align-items: center;
   }
   .form-register {
      padding: 0 5px;
      width: 65%;
      border: none;
   }
   .banner-text {
      width: calc(100% - 400px);
   }
}

@media screen and (max-width: 850px) {
   .grid {
      grid-template-columns: 1fr;
      width: 100%;
   }
}
</style>
