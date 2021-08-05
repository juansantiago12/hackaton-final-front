<template>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
      rel="stylesheet"
      href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
      crossorigin="anonymous"
    />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
  <title>Document</title>
</head>

<body style="background-color:  #F3F5F6;">
  <div class="container" style="background-color: #F3F5F6;">
   <header></header>
    <div class="row">
      <div class="col-sm-8 col-12 mx-2 medida">
        <h2 style="font-size: 23px;" class="fw-bold mt-4"><i class="fas fa-arrow-left"></i><span class="mx-3">Pasarela de Pagos</span></h2>
        <h3 style="font-size: 18px;" class="fw-bold mb-3 mt-4">Selecciona tu método de pago</h3>
        <div>
          <button class="col-sm-3 col-3 btn-primary-pagos rounded1 border border-white">Tarjeta de crédito</button>
          <button class="col-sm-3 col-3 btn-primary-pagos rounded1 border border-white">Tarjeta de débito</button>
            <button class=" col-sm-3 col-3 btn-primary-pagos rounded1 border border-white">Depósito Pago Efectivo</button>
        </div>
        <form>
          <div class="mb-3 row">
            <label for="exampleInputEmail1" class="form-label fw-bold mt-4 labelCell" style="font-size: 18px;">Datos Personales</label>
            <input type="text" class="form-control col-2 col-sm-12 tarcuadro2 mx-2 inputFor" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Documento de indentidad"/>
            <input type="email" class="form-control col-2 tarcuadro2 mx-2 inputFor" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo electrónico" />
          </div>
          <div class="mb-3 row">
            <label for="exampleInputPassword1" class="form-label fw-bold mb-3 labelCell" style="font-size: 18px;">Ingresa la información de tu tarjeta</label>
            <input type="text" class="form-control col-6 col-sm-12 tarcuadro2 mx-2 inputFor" id="exampleInputPassword1" placeholder="Nombre Completo" />
            <input type="text" class="form-control col-6 col-sm-12 tarcuadro2 mx-2 inputFor" id="exampleInputPassword1" placeholder="xxxx-xxxx-xxxx-xxxx"/>
            <div class="row mt-3 infotar">
            <input type="text" class="form-control col-4 tarcuadro mx-2 inputFor" id="exampleInputPassword1" placeholder="Mes"/>
            <input type="text" class="form-control col-4 tarcuadro inputFor" id="exampleInputPassword1" placeholder="Año"/>
            <input type="text" class="form-control col-4 tarcuadro mx-2 inputFor" id="exampleInputPassword1" placeholder="cvc/cvv"/>
          </div>
          <div class="mb-3 row mt-2">
            <label for="exampleInputPassword1" class="form-label fw-bold mt-4 mb-3" style="font-size: 18px;">Nº de cuota</label>
            <button class="col-1 mx-2 btn-primary-outline rounded border border-secondary">01</button>
            <button class="col-1 mx-2 btn-primary-outline rounded border border-secondary">02</button>
            <button class="col-1 mx-2 btn-primary-outline rounded border border-secondary">03</button>
            <button class="col-1 mx-2 btn-primary-outline rounded border border-secondary">04</button>
            <button class="col-1 mx-2 btn-primary-outline rounded border border-secondary">05</button>
            <button class="col-1 mx-2 btn-primary-outline rounded border border-secondary">06</button>
            <button class="col-1 mx-2 btn-primary-outline rounded border border-secondary">12</button>
            <button class="col-1 mx-2 btn-primary-outline rounded border border-secondary">24</button>
          </div>
          <div class="mb-3 form-check mx-2">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Solicitar factura</label>
          </div>
          <button type="submit" class="btn btn-primary button">Finalizar Compra</button>
        </form>
      </div>
    </div>
    <div class="col-sm-4 col-12 wenas2">
      <div class="row mt-5" style="background-color: white; width: 500px;border-radius: 10px">
        <div class="row mt-5">
        <img src="idat.png" alt="" class="" style="width: 150px;width: 150px; border-color: black" class="col-6">
        <h3 class="fs-6 col-6" style="width: 300px;">Gestión de Envases, Empaques y
          Embalajes</h3>
          <p style="margin-left: 150px; margin-top: -70px">Dto. 25% </p>
          <p style="margin-left: 320px; margin-top: -30px">S/ 269.00</p>
        </div>
        <div class="row mt-5">
          <img src="idat.png" alt="" class="" style="width: 150px;width: 150px; border-color: black" class="col-6 col-sm-6">
          <h3 class="fs-6 col-6 col-sm-6" style="width: 300px;">Gestión de Envases, Empaques y
            Embalajes</h3>
            <p style="margin-left: 150px; margin-top: -70px">Dto. 25% </p>
            <p style="margin-left: 320px; margin-top: -30px">S/ 269.00</p>
          </div>
          <div class="mt-3" >
            <p class="fw-bold fs-4" style="color: #678CD9; margin-left: 25px;">Precio final</p>
            <p class="fw-bold fs-4" style="color: #678CD9; margin-left: 290px; margin-top: -53px">S/ 600.00</p>
          </div>
      </div>
    </div>
  </div>
</body>

</html>
</template>
<script>
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
.letra {
  font-family: "Roboto", sans-serif;
}
h1,
h2,
h3,
h4,
p,
button {
  font-family: "Roboto", sans-serif !important;
}
.tarcuadro {
  width: 100px;
}
.wenas2 {
  width: 550px;
}
.inputFor {
  height: 50px;
  font-size: 13px;
  background-color: transparent;
}
.rounded1 {
  border-radius: 7px;
}
.medida {
  width: 750px;
}
.rounded {
  background-color: transparent;
}
.tarcuadro2 {
  width: 320px;
}

.btn-primary-outline {
  background-color: transparent;
  border-color: #ccc;
  width: 70px;
  font-size: 14px;
  font-weight: bold;
  height: 50px;
}
.btn-primary-pagos {
  background-color: transparent;
  background-color: #d4d9db;
  border-color: #ccc;
  width: 214px;
  height: 55px;
}
.button {
  width: 300px;
}
header {
  width: 100%;
  height: 80px;
  background-color: #000425;
}
@media only screen and (min-width: 200px) and (max-width: 768px) {
  .infotar {
    display: flex;
    flex-direction: row;
    width: 600px;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-left: -10px;
  }
  .btn-primary-pagos {
    background-color: transparent;
    background-color: #d4d9db;
    border-color: #ccc;
    width: 105px;
    font-size: 14px;
    height: 50px;
  }
  .tarcuadro {
    width: 61px;
  }
  .labelCell {
    margin-bottom: -5px !important;
  }
  .inputFor {
    height: 50px;
    font-size: 13px;
    margin-top: 20px;
  }
  .rounded {
    background-color: transparent;
    margin-top: 18px;
    width: 65px;
    margin-left: 10px !important;
  }
}
</style>