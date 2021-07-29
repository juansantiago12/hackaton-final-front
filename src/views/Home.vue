<template>
   <header>
      <div class="header">
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
                  <a href=""><i class="fas fa-shopping-cart"></i></a>
                  <a href=""><i class="fas fa-bars" @click.prevent="mostrarMenu"></i></a>
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
            <img src="../assets/Intercorp.svg" alt="" />
            <img src="../assets/idat.png" alt="" />
            <img src="../assets/zegel.png" alt="" />
         </div>
      </section>
   </header>

   <div class="cursos-container">
      <h2>Conoce nuestros Programas de Especialización</h2>
      <div class="grid">
         <article>
            <img src="../assets/curso.jpg" alt="" />
            <div class="curso-text">
               <h3>Desarrollo Front-End</h3>
               <button class="btn">Ver más</button>
               <button class="btn-carrito">Agregar</button>
            </div>
         </article>
         <article>
            <img src="../assets/curso.jpg" alt="" />
            <div class="curso-text">
               <h3>Desarrollo Front-End</h3>
               <button class="btn">Ver más</button>
               <button class="btn-carrito">Agregar</button>
            </div>
         </article>
         <article>
            <img src="../assets/curso.jpg" alt="" />
            <div class="curso-text">
               <h3>Desarrollo Front-End</h3>
               <button class="btn">Ver más</button>
               <button class="btn-carrito">Agregar</button>
            </div>
         </article>
      </div>
   </div>

   <section class="comunidad">
      <div class="comunidad-content">
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
         <article>
            <i class="fas fa-user"></i>
            <div class="more-text">
               <h3>Aprende de Expertos</h3>
               <p>
                  Aprende directamente de expertos del mercado a través del análisis y solución de
                  problemas de programación. Utilizando los frameworks y herramientas de mayor
                  relevancia dentro del mundo del coding.
               </p>
            </div>
         </article>
         <article>
            <i class="fas fa-desktop"></i>
            <div class="more-text">
               <h3>Clases Virtuales</h3>
               <p>
                  Aprovecha tu tiempo al máximo en nuestras clases virtuales y participa
                  presencialmente de nuestras hackathones semanales para conocer y participar de la
                  comunidad profesional que liderará la transformación tecnológica del Perú.
               </p>
            </div>
         </article>
         <article>
            <i class="fas fa-briefcase"></i>
            <div class="more-text">
               <h3>Empleabilidad</h3>
               <p>
                  Al finalizar el programa y certificarte a nombre de IDAT, podrás acceder a ofertas
                  laborales especialmente identificadas para la comunidad PachaQTec, a través de
                  nuestra plataforma de empleabilidad IDAT JOB.
               </p>
            </div>
         </article>
      </div>
   </section>

   <section class="formulario">
      <form class="form-register">
         <p>Postula y obtén un 10% de descuento ne el programa</p>
         <input class="control" type="text" placeholder="NOMBRE" />
         <input class="control" type="text" placeholder="CELULAR" />
         <input class="control" type="text" placeholder="CORREO ELECTRONICO" />
         <input class="control" type="text" placeholder="PROGRAMA" />
         <div class="check">
            <input type="checkbox" value="privacidad" id="privacidad" />
            <label for="privacidad">Acepto las Políticas de privacidad.</label>
         </div>
         <input type="submit" value="Quiero postular" class="control-btn" />
      </form>
   </section>
   <footer>
      <div class="footer-content">
         <img src="../assets/intercorp2.png" alt="" />
         <img src="../assets/idat2.png" alt="" />
         <img src="../assets/zegel.png" alt="" />
      </div>
   </footer>
   <router-view />
   <!-- <ListaCursos /> -->
</template>

<script>
// import ListaCursos from '@/components/ListaCursos.vue';

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
   name: 'Home',
   // components: {
   //    ListaCursos,
   // },
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
header {
   min-height: 100vh;
}
.header {
   background-color: #5640ff;
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

/* seccion banner */
.banner {
   max-width: 90%;
   margin-right: auto;
   margin-left: auto;
   display: flex;
   align-items: center;
   justify-content: right;
   margin-top: 20px;
}
.banner-text {
   color: white;
   margin-top: 100px;
   text-align: left;
   margin-bottom: 100px;
}
.banner h1 {
   font-size: 3rem;
}
.banner p {
   margin-top: 40px;
   font-size: 1.2rem;
}

/* seccion formulario */
.formulario {
   margin-bottom: 40px;
}
.form-register {
   border: 1px solid black;
   max-width: 350px;
   margin-left: auto;
   margin-right: auto;
   padding: 30px;
   background-color: #f8f8fa;
}
.form-register p {
   margin-bottom: 16px;
   font-weight: bold;
   text-align: center;
}
.control {
   width: 100%;
   padding: 15px 10px;
   border-radius: 5px;
   margin-bottom: 16px;
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
   margin-bottom: 16px;
}
.check label {
   margin-left: 10px;
   font-weight: bold;
}

/* media query formulario */
@media screen and (min-width: 800px) {
   .form-register {
      position: absolute;
      top: 100px;
      right: 10%;
   }
   .banner-text {
      width: 50%;
   }
}

/* seccion grupos */
.grupos {
   max-width: 90%;
   margin-top: 30px;
   margin-left: auto;
   margin-right: auto;
   display: flex;
   justify-content: right;
   align-items: center;
}
.grupos img {
   width: 100px;
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
   margin-top: 40px;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-gap: 30px;
   align-items: center;
   justify-items: center;
}
.grid article {
   border-radius: 10px;
   text-align: center;
   min-width: 200px;
   border: 1px solid black;
   padding-bottom: 8px;
}
.grid article img {
   width: 100%;
   border-top-left-radius: 10px;
   border-top-right-radius: 10px;
}
.curso-text h3 {
   margin: 8px 0;
}
.btn {
   padding: 10px;
   background-color: #5640ff;
   color: white;
   border: none;
   border-radius: 5px;
   margin-right: 20px;
}
.btn:hover {
   cursor: pointer;
   opacity: 0.5;
}
.btn-carrito {
   padding: 10px;
   background-color: #ff1558;
   color: white;
   border: none;
   border-radius: 5px;
}
.btn-carrito:hover {
   cursor: pointer;
   opacity: 0.5;
}

/* media query cursos */
@media screen and (max-width: 990px) {
   .grid {
      grid-template-columns: repeat(2, 1fr);
   }
}
@media screen and (max-width: 650px) {
   .grid {
      grid-template-columns: 1fr;
   }
}

/* seccion comunidad */
.comunidad {
   margin-top: 100px;
   background-color: #5640ff;
   margin-bottom: 40px;
}
.comunidad-content {
   max-width: 90%;
   margin-left: auto;
   margin-right: auto;
   color: white;
   padding: 20px 0;
}
.comunidad-text {
   margin-left: 200px;
}
.comunidad-text h3 {
   padding: 20px 0;
}
.comunidad-text p {
   padding-bottom: 10px;
}
/* media query comunidad */
@media screen and (max-width: 800px) {
   .comunidad-text {
      margin-left: 0;
   }
}
/* seccion beneficios */
.more-content {
   margin-left: auto;
   margin-right: auto;
   max-width: 90%;
   display: grid;
   grid-template-columns: 1fr;
   justify-items: center;
   align-items: center;
   margin-bottom: 40px;
}

.more-content article {
   display: flex;
   justify-content: center;
   align-items: center;
   max-width: 700px;
   border: 1px solid black;
   border-radius: 10px;
   background-color: #f8f8fa;
   padding: 15px 25px;
   margin: 20px 0;
}
.more-content i {
   font-size: 30px;
   color: #5640ff;
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
   width: 80px;
}
</style>
