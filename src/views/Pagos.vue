<template>
   <body>
      <link
         rel="stylesheet"
         href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
         integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
         crossorigin="anonymous"
      />
      <link
         href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
         rel="stylesheet"
         integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
         crossorigin="anonymous"
      />
      <div class="container" style="background-color: #f3f5f6">
         <header></header>
         <div class="row">
            <div class="col-sm-8 col-12 mx-2 medida">
               <h2 style="font-size: 23px" class="fw-bold mt-4">
                  <i class="fas fa-arrow-left"></i><span class="mx-3">Pasarela de Pagos</span>
               </h2>
               <h3 style="font-size: 18px" class="fw-bold mb-3 mt-4">
                  Selecciona tu método de pago
               </h3>
               <div>
                  <button class="col-sm-3 col-3 btn-primary-pagos rounded1 border border-white">
                     Tarjeta de crédito
                  </button>
                  <button class="col-sm-3 col-3 btn-primary-pagos rounded1 border border-white">
                     Tarjeta de débito
                  </button>
                  <button class="col-sm-3 col-3 btn-primary-pagos rounded1 border border-white">
                     Depósito Pago Efectivo
                  </button>
               </div>
               <form>
                  <div class="mb-3 row">
                     <label
                        for="exampleInputEmail1"
                        class="form-label fw-bold mt-4 labelCell"
                        style="font-size: 18px"
                        >Datos Personales</label
                     >
                     <input
                        type="text"
                        class="form-control col-2 col-sm-12 tarcuadro2 mx-2 inputFor"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Documento de indentidad"
                     />
                     <input
                        type="email"
                        class="form-control col-2 tarcuadro2 mx-2 inputFor"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Correo electrónico"
                     />
                  </div>
                  <div class="mb-3 row">
                     <label
                        for="exampleInputPassword1"
                        class="form-label fw-bold mb-3 labelCell"
                        style="font-size: 18px"
                        >Ingresa la información de tu tarjeta</label
                     >
                     <input
                        type="text"
                        class="form-control col-6 col-sm-12 tarcuadro2 mx-2 inputFor"
                        id="exampleInputPassword1"
                        placeholder="Nombre Completo"
                     />
                     <input
                        type="text"
                        class="form-control col-6 col-sm-12 tarcuadro2 mx-2 inputFor"
                        id="exampleInputPassword1"
                        placeholder="xxxx-xxxx-xxxx-xxxx"
                     />
                  </div>
                  <div class="row mt-3 infotar">
                     <input
                        type="text"
                        class="form-control col-4 tarcuadro mx-2 inputFor"
                        id="exampleInputPassword1"
                        placeholder="Mes"
                     />
                     <input
                        type="text"
                        class="form-control col-4 tarcuadro inputFor"
                        id="exampleInputPassword1"
                        placeholder="Año"
                     />
                     <input
                        type="text"
                        class="form-control col-4 tarcuadro mx-2 inputFor"
                        id="exampleInputPassword1"
                        placeholder="cvc/cvv"
                     />
                  </div>
                  <div class="mb-3 row mt-2">
                     <label
                        for="exampleInputPassword1"
                        class="form-label fw-bold mt-4 mb-3"
                        style="font-size: 18px"
                        >Nº de cuota</label
                     >
                     <button
                        class="
                  col-1
                  mx-2
                  btn-primary-outline
                  rounded
                  border border-secondary
                "
                     >
                        01
                     </button>
                     <button
                        class="
                  col-1
                  mx-2
                  btn-primary-outline
                  rounded
                  border border-secondary
                "
                     >
                        02
                     </button>
                     <button
                        class="
                  col-1
                  mx-2
                  btn-primary-outline
                  rounded
                  border border-secondary
                "
                     >
                        03
                     </button>
                     <button
                        class="
                  col-1
                  mx-2
                  btn-primary-outline
                  rounded
                  border border-secondary
                "
                     >
                        04
                     </button>
                     <button
                        class="
                  col-1
                  mx-2
                  btn-primary-outline
                  rounded
                  border border-secondary
                "
                     >
                        05
                     </button>
                     <button
                        class="
                  col-1
                  mx-2
                  btn-primary-outline
                  rounded
                  border border-secondary
                "
                     >
                        06
                     </button>
                     <button
                        class="
                  col-1
                  mx-2
                  btn-primary-outline
                  rounded
                  border border-secondary
                "
                     >
                        12
                     </button>
                     <button
                        class="
                  col-1
                  mx-2
                  btn-primary-outline
                  rounded
                  border border-secondary
                "
                     >
                        24
                     </button>
                  </div>
                  <div class="mb-3 form-check mx-2">
                     <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                     <label class="form-check-label" for="exampleCheck1">Solicitar factura</label>
                  </div>
                  <button type="submit" class="btn btn-primary button">
                     Finalizar Compra
                  </button>
               </form>
            </div>

            <div class="col-sm-4 col-12 wenas2">
               <div
                  class="row mt-5"
                  style="background-color: white; width: 500px; border-radius: 10px"
               >
                  <div class="row mt-5" v-for="curso in cursoAgregado" :key="curso.id">
                     <img :src="curso.image" alt="" class="col-6 imagenCarrito" />
                     <h3 class="fs-6 col-6" style="width: 250px">
                        {{ curso.nombre }}
                     </h3>
                     <p style="margin-left: 320px; margin-top: -30px">S/.{{ curso.precio }}</p>
                  </div>

                  <div class="mt-3">
                     <p class="fw-bold fs-4" style="color: #678cd9; margin-left: 25px">
                        Precio final
                     </p>
                     <p
                        class="fw-bold fs-4"
                        style="color: #678cd9; margin-left: 290px; margin-top: -53px"
                     >
                        S/ {{ order[0].total }}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </body>
</template>

<script>
import { mapState } from 'vuex';

export default {
   data() {
      return {
         nombre: 'juan',
         self: this,
      };
   },
   computed: {
      ...mapState(['order', 'cursoAgregado']),
   },
   methods: {},

   created() {
      this.cursoAgregado;
      this.order;
   },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
.letra {
   font-family: 'Roboto', sans-serif !important;
}
h1,
h2,
h3,
h4,
p,
button {
   font-family: 'Roboto', sans-serif !important;
}
.tarcuadro {
   width: 100px !important;
}
.imagenCarrito {
   width: 150px !important;
   width: 150px !important;
   border-color: black !important;
   border-radius: 20px !important;
   margin-left: 30px !important;
}
.wenas2 {
   width: 550px !important;
}
.inputFor {
   height: 50px !important;
   font-size: 13px !important;
   background-color: transparent !important;
}
.rounded1 {
   border-radius: 7px !important;
   margin-left: 5px !important;
   font-family: 'Roboto', sans-serif !important;
}
.medida {
   width: 750px !important;
}
.rounded {
   background-color: transparent !important;
}
.tarcuadro2 {
   width: 320px !important;
}
.btn-primary-outline {
   background-color: transparent !important;
   border-color: #ccc !important;
   width: 70px !important;
   font-size: 14px !important;
   font-weight: bold !important;
   height: 50px !important;
}
.btn-primary-pagos {
   background-color: transparent !important;
   background-color: #d4d9db !important;
   border-color: #ccc !important;
   width: 214px !important;
   height: 55px !important;
}
.button {
   width: 300px !important;
}
body {
   background-color: #f3f5f6 !important;
}
header {
   width: 100% !important;
   height: 80px !important;
   background-color: #000425 !important;
}
@media only screen and (min-width: 200px) and (max-width: 768px) {
   .infotar {
      display: flex !important;
      flex-direction: row !important;
      width: 600px !important;
      flex-wrap: wrap !important;
      margin: 0 auto !important;
      margin-left: -10px !important;
   }
   .btn-primary-pagos {
      background-color: transparent !important;
      background-color: #d4d9db !important;
      border-color: #ccc !important;
      width: 105px !important;
      font-size: 14px !important;
      height: 50px !important;
   }
   .tarcuadro {
      width: 61px !important;
   }
   .labelCell {
      margin-bottom: -5px !important;
   }
   .inputFor {
      height: 50px !important;
      font-size: 13px !important;
      margin-top: 20px !important;
   }
   .rounded {
      background-color: transparent !important;
      margin-top: 18px !important;
      width: 65px !important;
      margin-left: 10px !important;
   }
}
</style>
