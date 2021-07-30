<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossorigin="anonymous"
  />
  <div class="containe color">
    <header class="row nav">
      <div class="col-8">
        <i><img src="../assets/idat2.png" alt="" class="logo"/></i>
      </div>
      <div class="col-12 col-sm-1 text-white letra pt-2">Wenas</div>
      <div class="col-12 col-sm-1 text-white letra pt-2">asd</div>
      <div class="col-12 col-sm-1 text-white letra pt-2">asd</div>
      <div class="col-12 col-sm-1 text-white letra pt-2">asd</div>
    </header>

    <section class="row">
      <article class="position-relative inline-block">
        <img :src="users.image" alt="" class="img" />
        <div class="centrado letra">{{ users.nombre }}</div>
      </article>
    </section>

    <section class="row mt-5">
      {{ $route.params.id }}
      <article class="col-12 mx-5">
        <i class="fas fa-question-circle mx-4 fa-1x cell"
          ><span class="letra mx-2 fs-5"
            >¿En qué consiste el Diplomado en {{ users.nombre }}?</span
          ></i
        >
        <br />
        <i class="fas fa-arrow-circle-right mx-5 mt-3"
          ><span class="letra mt-3 mx-2"
            >El presente diplomado tiene un carácter teórico práctico</span
          ></i
        >
        <p class="letra mx-5 mt-2 w-50">
          {{ users.resumen_largo }}
        </p>
        <i class="fas fa-arrow-circle-right mx-5 mt-1"
          ><span class="letra mx-2"
            >El diplomado tiene un enfoque expositivo-práctico.</span
          ></i
        >
        <p class="letra mx-5 mt-2 w-50">
          {{ users.resumen_corto }}
        </p>
        <img :src="users.image" alt="" style="height: 300px; width: 75%" />
      </article>
    </section>

    <div class="row mx-5 mt-4">
      <i class="fas fa-clock"
        ><span class="letra mt-3 mx-2 fs-5">Duración</span></i
      >
      <p class="mx-4 mt-3">{{ users.duracion }}</p>
    </div>

    <div class="row mx-5">
      <i class="fas fa-calendar-times"
        ><span class="letra mt-3 mx-2 fs-5">Horarios</span></i
      >
      <div class="mt-3" v-for="hora in users.horarios" :key="hora.id">
        <i class="fas fa-arrow-circle-right mx-3 mt-1"
          ><span class="letra mt-1 mx-2">{{ hora.fecha }}</span></i
        >
        <p class="mx-5 mt-2" style="margin-top: -15px">{{ hora.frecuencia }}</p>
      </div>
    </div>

    <div class="row mx-5">
      <i class="fas fa-book-open"
        ><span class="letra mt-3 mx-2 fs-5">Plan de estudios</span></i
      >
      <table
        class="
            table table-light table-responsive
            w-75
            mx-5
            mt-3
            col-sm-3
            cell
          "
      >
        <tbody>
          <tr>
            <td class="w-25 pt-5">
              <i class="fas fa-file-alt"
                ><span class="letra mx-3"
                  >Introducción a la Gestión Deportiva</span
                ></i
              >
            </td>
            <td class="">
              <ul>
                <li>Introducción a la gestión en el deporte</li>
                <li>Instituciones deportivas en el Perú</li>
                <li>Deporte amateur y deporte profesional</li>
              </ul>
            </td>
            <td class="">
              <ul>
                <li>Introducción a la gestión en el deporte</li>
                <li>Instituciones deportivas en el Perú</li>
                <li>Deporte amateur y deporte profesional</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="w-25 pt-5">
              <i class="fas fa-file-alt"
                ><span class="letra mx-3"
                  >Introducción a la Gestión Deportiva</span
                ></i
              >
            </td>
            <td>
              <ul>
                <li>Introducción a la gestión en el deporte</li>
                <li>Instituciones deportivas en el Perú</li>
                <li>Deporte amateur y deporte profesional</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Introducción a la gestión en el deporte</li>
                <li>Instituciones deportivas en el Perú</li>
                <li>Deporte amateur y deporte profesional</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="w-25 pt-5">
              <i class="fas fa-file-alt"
                ><span class="letra mx-3"
                  >Introducción a la Gestión Deportiva</span
                ></i
              >
            </td>
            <td>
              <ul>
                <li>Introducción a la gestión en el deporte</li>
                <li>Instituciones deportivas en el Perú</li>
                <li>Deporte amateur y deporte profesional</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="row mx-5">
      <i class="fas fa-medal"
        ><span class="letra mt-3 mx-2 fs-5">Idat otorga:</span></i
      >
      <p class="letra w-50 mt-3">
        Al finalizar satisfactoriamente el programa IDAT otorga diploma virtual
        por el Diplomado en Gestión Deportiva
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
</template>
<script>
export default {
  data() {
    return {
      mostrar: "",
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
    console.log("dasda");
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");

.letra {
  font-family: "Roboto", sans-serif;
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

.color {
  background-color: #e4f4fb;
}

.centrado {
  position: absolute;
  top: 80%;
  left: 10%;
  color: white;
  font-size: 30px;
}

.nav {
  background-color: rgba(28, 28, 30, 0.7);
  position: fixed;
  z-index: 200;
  margin-left: 1px;
  width: 100%;
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
  tbody td:before {
    content: attr(data-th);
    display: block;
    text-align: center;
    width: 100% !important;
  }
}
</style>
