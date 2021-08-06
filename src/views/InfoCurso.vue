<template>
   <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
   />
   <div class="container color">
      <nav class="row nav">
         <div class="col-6">
            <router-link to="/"
               ><img
                  src="../assets/pachaqtec.png"
                  alt=""
                  class="logo mt-2 mx-3 mb-2"
                  style="width: 200px"
            /></router-link>
         </div>
         <div class="col-1" style="color: white; margin-top: 15px">
            <span class="letra">Home</span>
         </div>
         <div class="col-1" style="color: white; margin-top: 15px">
            <span class="letra">Cursos</span>
         </div>
         <div class="col-1" style="color: white; margin-top: 15px">
            <span class="letra">Diplomados</span>
         </div>
         <div class="col-2" style="color: white; margin-top: 15px; text-align: center">
            <span class="letra">Escuela de coding</span>
         </div>
         <img
            src="../assets/WhatsApp-Logotipo.png"
            style="width: 80px; height: 35px; margin-top: 10px; margin-right: 20px"
            class="col-2"
         />
      </nav>

      <section class="row">
         <article class="position-relative inline-block col-12 col-sm-12 pintura">
            <img src="../assets/curso.png" alt="" class="IncoInfo" />
            <div class="linea"></div>
            <div class="centrado letra fw-bold">{{ users.nombre }}</div>
         </article>
      </section>

      <section class="row mt-5">
         <article class="col-12 mx-5 cellLetras">
            <i class="fas fa-question-circle mx-4 fa-1x cell"
               ><span class="letra mx-2 fs-5"
                  >¿En qué consiste el Diplomado en {{ users.nombre }}?</span
               ></i
            >
            <br />
            <i class="fas fa-arrow-circle-right mx-5 mt-3 resumen_largo"
               ><span class="letra mt-3 mx-2"
                  >El presente diplomado tiene un carácter teórico práctico</span
               ></i
            >
            <p class="letra mx-5 mt-2 w-50 resumen_largo">
               {{ users.resumen_largo }}
            </p>
            <i class="fas fa-arrow-circle-right mx-5 mt-1 resumen_largo"
               ><span class="letra mx-2"
                  >El diplomado tiene un enfoque expositivo-práctico.</span
               ></i
            >
            <p class="letra mx-5 mt-2 w-50 resumen_largo">
               {{ users.resumen_corto }}
            </p>
            <img
               :src="users.image"
               alt=""
               style="height: 300px; width: 55%"
               class="rounded border border-dark border-3"
            />
         </article>
         <img src="../assets/matri.png" alt="" class="matri col-6" />
      </section>

      <div class="row mx-5 mt-4">
         <i class="fas fa-clock"><span class="letra mt-3 mx-2 fs-5">Duración</span></i>
         <p class="mx-4 mt-3">{{ users.duracion }}</p>
      </div>

      <div class="row mx-5">
         <i class="fas fa-calendar-times"><span class="letra mt-3 mx-2 fs-5">Horarios</span></i>
         <div class="mt-3" v-for="hora in users.horarios" :key="hora.id">
            <i class="fas fa-arrow-circle-right mx-3 mt-1"
               ><span class="letra mt-1 mx-2">{{ hora.fecha }}</span></i
            >
            <p class="mx-5 mt-2" style="margin-top: -15px">{{ hora.frecuencia }}</p>
         </div>
      </div>

      <div class="row mx-5">
         <i class="fas fa-book-open"><span class="letra mt-3 mx-2 fs-5">Plan de estudios</span></i>
         <table class="table table-light table-responsive w-50 mx-5 mt-3 col-sm-3 cell">
            <tbody>
               <tr v-for="hola in users.unidades" :key="hola.id">
                  <td class="w-25 pt-5">
                     <i class="fas fa-file-alt"
                        ><span class="letra mx-3">{{ hola.nombre }}</span></i
                     >
                  </td>
                  <td class="w-75">
                     <ul v-for="hola2 in hola.lecciones" :key="hola2.id">
                        <li>{{ hola2.nombre }}</li>
                     </ul>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>

      <div class="row mx-5">
         <i class="fas fa-medal"><span class="letra mt-3 mx-2 fs-5">Idat otorga:</span></i>
         <p class="letra w-50 mt-3 resumen_largo">
            Al finalizar satisfactoriamente el programa IDAT otorga diploma virtual por el Diplomado
            en Gestión Deportiva
         </p>
      </div>
      <footer class="footer d-block mt-5 row">
         <p class="text-light pt-3 ps-5 fw-bold fs-6">Con respaldo de:</p>
         <div class="d-block ms-5">
            <img src="../assets/Intercorp.svg" alt="" class="logos" />
            <img src="../assets/idat2.png" alt="" class="logos" />
            <img src="../assets/zegel.png" alt="" class="logos" />
         </div>
      </footer>
   </div>
   <router-view />
</template>

<script>
export default {
   data() {
      return {
         mostrar: '',
         users: [],
      };
   },
   methods: {
      async getCursoInfo() {
         //const capId = 'this.$route.params.id';
         const data = await fetch(
            `https://no-llores-mas.herokuapp.com/cursos/${this.$route.params.id}`
         );
         const info = await data.json();
         this.users = info;
      },
   },
   created() {
      this.getCursoInfo();
      console.log('dasda');
   },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
.letra {
   font-family: 'Roboto', sans-serif;
}
.footer {
   background-color: #000425;
   display: block;
   margin-top: -50px;
}
.logos {
   width: 70px;
}
.img {
   width: 100%;
   height: 25em;
}
.logo {
   width: 50px;
}
.matri {
   position: absolute;
   left: 62%;
   height: 500px;
   width: 450px;
   z-index: 50;
}
.color {
   background-color: #e5e5e5;
}
.linea {
   border-bottom: 2px solid #fff;
   margin-top: 166px;
   height: 60px;
}
.IncoInfo {
   position: absolute;
   left: 66%;
   top: 47%;
}
.centrado {
   position: absolute;
   top: 80%;
   left: 10%;
   color: white;
   font-size: 30px;
}
.logo {
   width: 25px;
}
.nav {
   background-color: rgba(28, 28, 30, 0.7);
   position: fixed;
   width: 1320px;
   top: 0;
   z-index: 200;
}
.pintura {
   background-color: #1f3a60;
   width: 100%;
   height: 300px;
}
@media only screen and (min-width: 200px) and (max-width: 768px) {
   .cell {
      margin-left: -30px !important;
   }
   table {
      width: 100% !important;
   }
   thead {
      display: none;
      width: 100% !important;
   }
   tr:nth-of-type(2n) {
      background-color: inherit;
   }
   tr td:first-child {
      background: #f0f0f0;
      font-weight: bold;
      font-size: 1.3em;
      width: 100% !important;
   }
   tbody td {
      display: block;
      text-align: center;
      width: 100% !important;
   }
   .resumen_largo {
      width: 320px !important;
      margin-left: -45px !important;
   }
   .IncoInfo {
      left: 50%;
      top: 30%;
   }
   .matri {
      display: none;
   }
   tbody td:before {
      content: attr(data-th);
      display: block;
      text-align: center;
      width: 100% !important;
   }
}
</style>
