<template>
   <section class="login">
      <div class="login-content">
         <div class="banner">
            <nav>
               <router-link to="/">
                  <img class="banner-img" src="../assets/pachaqtec.png" alt="" />
               </router-link>
            </nav>
            <div class="banner-text">
               <h2>Explota tu potencial tecnológico!</h2>
               <p>Con nuestros programas de especialización</p>
            </div>
            <footer>
               <img class="footer-img" src="../assets/grupo2.png" alt="" />
            </footer>
         </div>
      </div>

      <div class="inicio">
         <div class="inicio-nav">
            <router-link to="/login">Iniciar Sesión</router-link>
            <router-link to="/registrarse">Registrarse</router-link>
         </div>
         <form @submit.prevent="getRegistro" class="formulario">
            <div class="form-1">
               <p>Puedes registrarte con tu correo</p>
               <input type="text" placeholder="Nombres y apellidos" v-model="registro.name" />
               <input type="email" placeholder="Correo electrónico" v-model="registro.email" />
               <input type="password" placeholder="Contraseña" v-model="registro.password" />
               <input type="password" placeholder="Repite contraseña" v-model="password2" />
               <div class="check">
                  <input type="checkbox" value="privacidad" id="privacidad" v-model="aceptar" />
                  <label for="privacidad">Acepto las Políticas de privacidad.</label>
               </div>
            </div>
            <div class="form-2">
               <input type="submit" value="Ingresar" class="btn" @click="postRegistro()" />
            </div>
         </form>
      </div>
   </section>
   <router-view />
</template>

<script>
export default {
   data() {
      return {
         registro: {
            email: '',
            name: '',
            password: '',
         },
         password2: '',
         aceptar: false,
      };
   },

   methods: {
      getRegistro() {
         if (
            this.registro.name === '' ||
            this.registro.email === '' ||
            this.registro.password === '' ||
            this.registro.password !== this.password2 ||
            this.aceptar === false
         ) {
            alert('falta campos por llenar o contraseñas no coinciden');
         } else {
            // console.log(this.registro);
            alert('registro exitoso');
         }
      },

      async postRegistro() {
         const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.registro),
         };
         const response = await fetch(
            'https://no-llores-mas.herokuapp.com/auth/register/',
            request
         );
         const data = await response.json();
         console.log(data);
         this.registro = {
            email: '',
            name: '',
            password: '',
         };
         this.password2 = '';
      },
   },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600&display=swap');
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
.login {
   height: 100vh;
   display: grid;
   grid-template-columns: 65% 1fr;
}
.login-content {
   background-image: url('../assets/banner.png');
   background-repeat: no-repeat;
   background-size: cover;
}
.banner {
   max-width: 80%;
   height: 100%;
   margin-left: auto;
   margin-right: auto;
   display: grid;
   grid-template-rows: 80px 1fr 80px;
}
.banner-img {
   width: 200px;
   margin-top: 20px;
}
.banner-text {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-end;
}
.banner-text {
   text-align: left;
}
.banner-text h2 {
   font-size: 30px;
   color: white;
   font-family: 'Poppins', sans-serif;
   font-weight: bold;
   letter-spacing: 2px;
}
.banner-text p {
   margin-top: 16px;
   font-size: 16px;
   color: white;
   font-family: 'Poppins', sans-serif;
   font-weight: 500;
}

footer {
   display: flex;
   justify-content: left;
   align-items: center;
}
.footer-img {
   width: 300px;
   margin-bottom: 50px;
   display: block;
}
.inicio {
   margin-left: auto;
   margin-right: auto;
   width: 85%;
}
.inicio-nav {
   display: flex;
   justify-content: space-around;
   align-items: center;
   height: 80px;
}
.inicio-nav a {
   color: black;
   display: inline-block;
   font-family: 'Poppins', sans-serif;
   font-weight: bold;
   font-size: 14px;
   padding-bottom: 8px;
}
.inicio-nav a:hover {
   border-bottom: 4px solid black;
}

.formulario {
   height: calc(100% - 80px);
   display: flex;
   flex-direction: column;
   justify-content: space-around;
}
.form-1 p {
   text-align: center;
   font-family: 'Poppins', sans-serif;
   font-size: 13px;
   font-weight: 300;
   margin-bottom: 30px;
}
.formulario input {
   display: inline-block;
   width: 100%;
   padding: 16px 20px;
   border-radius: 5px;
   border: 1px solid black;
   margin-bottom: 20px;
}
::placeholder {
   opacity: 0.7;
}
.form-2 input {
   font-family: 'Poppins', sans-serif;
   background-color: #5640ff;
   color: white;
   font-size: 16px;
   font-weight: bold;
}
.form-2 a {
   color: #5640ff;
   display: block;
   text-align: center;
   font-family: 'Poppins', sans-serif;
   font-size: 14px;
   font-weight: bold;
}

.check {
   display: flex;
   justify-content: flex-start;
   align-items: center;
}
.check input {
   width: 10%;
   margin: 0;
}
.check label {
   display: inline;
   font-family: 'Poppins', sans-serif;
   font-size: 14px;
   font-weight: bold;
}

@media screen and (max-width: 970px) {
   .login {
      grid-template-columns: 1fr;
   }
   .login-content {
      display: none;
   }
   .inicio {
      max-width: 500px;
   }
}
</style>
