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
    <nav style="background-color: #000425 !important">
      <div class="menu">
        <router-link to="/" class="menu-link">
          <img src="../assets/pachaqtec.png" alt="" class="menu-logo" />
        </router-link>

        <div class="menu-list">
          <ul :class="mostrar">
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
          <router-link to="/carrito"
            ><img src="../assets/carrito.png" alt=""
          /></router-link>
          <a href=""><img src="../assets/layer.png" alt="" /></a>
        </div>
      </div>
    </nav>
    <div class="container" style="background-color: #f3f5f6">
      <div class="row">
        <div class="col-sm-8 col-12 mx-2 medida">
          <h2 style="font-size: 23px" class="fw-bold mt-4">
            <i class="fas fa-arrow-left"></i
            ><span class="mx-3">Pasarela de Pagos</span>
          </h2>
          <h3 style="font-size: 18px" class="fw-bold mb-3 mt-4">
            Selecciona tu método de pago
          </h3>
          <div>
            <button
              class="
                col-sm-3 col-3
                btn-primary-pagos
                rounded1
                border border-white
              "
              @click.prevent="cambiar1()"
            >
              Tarjeta de crédito
            </button>
            <button
              class="
                col-sm-3 col-3
                btn-primary-pagos
                rounded1
                border border-white
              "
              @click.prevent="cambiar2()"
            >
              PayPal
            </button>
            <button
              class="
                col-sm-3 col-3
                btn-primary-pagos
                rounded1
                border border-white
              "
              @click.prevent="cambiar3()"
            >
              Depósito Pago Efectivo
            </button>
          </div>
          <form :style="elemento1">
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
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1"
                >Solicitar factura</label
              >
            </div>
          </form>
          <form :style="elemento3">
            <img
              src="../assets/pago-efectivo.png"
              alt=""
              style="width: 200px; margin-top: 20px"
            />
            <h2 style="font-weight: bold; font-size: 15px">Pasos a seguir:</h2>
            <p style="font-size: 15px; margin-bottom: 50px">
              Enviaremos un código de pago CIP a tu correo electrónico, con el
              cual podrás pagar de la siguiente manera:
            </p>
            <h2 style="font-weight: bold; font-size: 15px">
              Banca por internet y móvil:
            </h2>
            <p>
              Paga por internet vía transferencia desde el aplicativo móvil o
              web de tu banco de preferencia
            </p>
            <div>
              <img
                src="../assets/digital-1-bbva.png"
                alt=""
                style="width: 90px"
              />
              <img
                src="../assets/digital-2-bcp.png"
                alt=""
                style="width: 90px; margin-left: 30px"
              />
              <img
                src="../assets/digital-3-ibk.png"
                alt=""
                style="width: 90px; margin-left: 30px"
              />
              <img
                src="../assets/digital-4-scotiabank.png"
                alt=""
                style="width: 90px; margin-left: 30px"
                class="bancos"
              />
              <img
                src="../assets/digital-5-banbif.png"
                alt=""
                style="width: 90px; margin-left: 30px"
                class="banco3"
              /><br />
              <img
                src="../assets/digital-6-arequipa.png"
                alt=""
                style="width: 90px; margin-top: 20px"
                class="banco2"
              />
            </div>
            <h2>Agencias y agentes:</h2>
            <p>
              Realiza depósitos en efectivo en agencias bancarias, agentes o
              bodegas a nivel nacional.
            </p>
            <div>
              <img
                src="../assets/digital-1-bbva.png"
                alt=""
                style="width: 90px"
              />
              <img
                src="../assets/digital-2-bcp.png"
                alt=""
                style="width: 90px; margin-left: 30px"
              />
              <img
                src="../assets/digital-3-ibk.png"
                alt=""
                style="width: 90px; margin-left: 30px"
              />
              <img
                src="../assets/digital-4-scotiabank.png"
                alt=""
                class="bancos"
                style="width: 90px; margin-left: 30px"
              />
              <img
                src="../assets/digital-5-banbif.png"
                alt=""
                style="width: 90px; margin-left: 30px"
                class="banco3"
              /><br />
              <img
                src="../assets/digital-6-arequipa.png"
                alt=""
                class="banco2"
                style="width: 90px; margin-top: 20px"
              />
              <img
                src="../assets/presencial-7-kasnet.png"
                alt=""
                style="width: 90px; margin-top: 20px; margin-left: 30px"
                class="banco4"
              />
              <img
                src="../assets/presencial-8-wester.png"
                alt=""
                style="width: 90px; margin-top: 20px; margin-left: 30px"
                class="banco5"
              />
              <img
                src="../assets/presencial-9-fullcarga.png"
                alt=""
                style="width: 90px; margin-top: 20px; margin-left: 30px"
                class="banco6"
              />
              <img
                src="../assets/presencial-10-tambo.png"
                alt=""
                style="width: 90px; margin-top: 20px; margin-left: 30px"
                class="banco7"
              /><br />
              <img
                src="../assets/presencial-11-money.png"
                alt=""
                style="width: 90px; margin-top: 20px"
                class="banco8"
              />
              <img
                src="../assets/presencial-12-disashop.png"
                alt=""
                style="width: 90px; margin-top: 20px; margin-left: 30px"
                class="banco9"
              />
            </div>
          </form>
          <div :style="elemento2">
            <img src="../assets/wenas.png" alt="" style="width: 200px" />
            <h2 style="font-weight: bold; font-size: 15px">Pasos a seguir:</h2>
            <p style="font-size: 15px; margin-bottom: 50px">
              Dar click en el boton de PAYPAL e ingresar con su cuenta para
              poder proceder a hacer el pago:
            </p>
            <div class="container">
              <paypal
                :amount="amount"
                id="paypal-button-container"
                style="wifth: 100px !important"
              ></paypal>
            </div>
          </div>
        </div>

        <section class="col-sm-4 col-12 wenas2 wenasCelular">
          <div
            class="row mt-5"
            style="background-color: white; width: 500px; border-radius: 10px"
          >
            <div
              class="row mt-5"
              v-for="curso in cursoAgregado"
              :key="curso.id"
            >
              <img :src="curso.image" alt="" class="col-6 imagenCarrito" />
              <h3 class="fs-6 col-6 letraNomCell" style="width: 250px">
                {{ curso.nombre }}
              </h3>

              <p
                style="margin-left: 320px; margin-top: -30px"
                class="letraNomPrecio"
              >
                S/.{{ curso.precio }}
              </p>
            </div>

            <div class="mt-3 totalPrecioCell">
              <p
                class="fw-bold fs-4 FinalPriceCell"
                style="color: #678cd9; margin-left: 25px"
              >
                Precio final
              </p>
              <p
                class="fw-bold fs-4 TotalPriceCell"
                style="color: #678cd9; margin-left: 290px; margin-top: -53px"
              >
                S/ {{ order.total }}
              </p>
            </div>
          </div>
        </section>
        <button type="submit" class="btn btn-primary button">
          Finalizar Compra
        </button>
      </div>
    </div>
  </body>
</template>



<script>
import { mapState } from "vuex";

export default {
  name: "Pago",
  data() {
    return {
      self: this,
      elemento1: "",
      elemento2: "display: none",
      elemento3: "display: none",
    };
  },

  computed: {
    ...mapState(["order", "cursoAgregado"]),
  },

  methods: {
    cambiar1() {
      this.elemento1 = "display: block";
      this.elemento2 = "display: none";
      this.elemento3 = "display: none";
    },
    cambiar2() {
      this.elemento1 = "display: none";
      this.elemento2 = "display: block";
      this.elemento3 = "display: none";
    },
    cambiar3() {
      this.elemento1 = "display: none";
      this.elemento2 = "display: none";
      this.elemento3 = "display: block";
    },
  },
  updated() {
    const total = this.self.$store.state.order.total;
    paypal
      .Buttons({
        createOrder: function (data, actions) {
          // This function sets up the details of the transaction, including the amount and line item details.
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: total,
                },
              },
            ],
          });
        },
        onApprove: function (data, actions) {
          // This function captures the funds from the transaction.
          return actions.order.capture().then(function (details) {
            // This function shows a transaction success message to your buyer.
            alert("Transaction completed by " + details.payer.name.given_name);
          });
        },
      })
      .render("#paypal-button-container");
  },
  created() {
    this.cursoAgregado;
    this.order;
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
.letra {
  font-family: "Roboto", sans-serif !important;
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
  font-family: "Roboto", sans-serif !important;
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
.menu-rigth a {
  margin: 0 10px;
  color: white;
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
  margin-top: 30px !important;
  margin-left: 500px;
  margin-bottom: 50px;
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
  .FinalPriceCell {
    margin-left: 5px !important;
  }
  .tamañoCell {
    width: 100px !important;
    border-radius: 0px !important;
  }
  .labelCell {
    margin-bottom: -5px !important;
  }
  .wenasCelular {
    order: -1 !important;
    margin-top: -48px !important;
    width: 100px !important;
  }
  .inputFor {
    height: 50px !important;
    font-size: 13px !important;
    margin-top: 20px !important;
  }
  .imagenCarrito {
    width: 170px !important;
    height: 100px !important;
    border-color: black !important;
    border-radius: 13px !important;
    margin-left: 3px !important;
  }
  .letraNomCell {
    margin-left: -10px !important;
    font-family: "Roboto", sans-serif !important;
    font-weight: bold;
    margin-top: 5px;
    margin-left: 15px !important;
  }

  .letraNomPrecio {
    margin-left: 260px !important;
    font-family: "Roboto", sans-serif !important;
    font-weight: bold;
  }
  .TotalPriceCell {
    margin-left: 240px !important;
  }
  .rounded {
    background-color: transparent !important;
    margin-top: 18px !important;
    width: 65px !important;
    margin-left: 10px !important;
  }
  .bancos {
    margin-left: 0px !important;
    margin-top: 20px !important;
  }
  .banco2 {
    margin-top: -60px !important;
    margin-left: 238px !important;
  }
  .banco3 {
    margin-top: 20px !important;
  }
  .banco4 {
    margin-top: -7px !important;
    margin-left: 0px !important;
  }
  .banco5 {
    margin-top: -11px !important;
  }
  .banco6 {
    margin-top: -11px !important;
  }
  .banco7 {
    margin-left: -0px !important;
  }
  .banco8 {
    margin-top: -60px !important;
    margin-left: 120px;
  }
  .banco9 {
    margin-top: -65px !important;
  }
  .button {
    margin-left: 40px;
    margin-bottom: 30px;
  }
}
</style>
