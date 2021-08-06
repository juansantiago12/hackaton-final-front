<template>
   <section class="login">
      <div class="login-content">
         <div class="banner">
            <nav>
               <img class="banner-img" src="../assets/pachaqtec.png" alt="" />
            </nav>
            <div class="banner-text">
               <h2>Explota tu potencial tecnológico</h2>
               <p>Con nuestros programas de especialización</p>
            </div>
            <footer>
               <img class="footer-img" src="../assets/intercorp2.png" alt="" />
               <img class="footer-img" src="../assets/idat2.png" alt="" />
               <img class="footer-img" src="../assets/zegel.png" alt="" />
            </footer>
         </div>
      </div>
      <div class="inicio">
         <div class="formulario">
            <div class="inicio-nav">
               <router-link to="/login">Iniciar Sesión</router-link>
               <router-link to="/registrarse">Registrarse</router-link>
            </div>
            <div class="inicio-more">
               <p>Puedes iniciar sesión con:</p>
               <div class="inicio-img">
                  <img class="facebook" src="../assets/facebook.png" alt="" />
                  <img class="gogle" src="../assets/gogle.png" alt="" />
               </div>
               <p>También puedes iniciar sesión con tu correo</p>
            </div>
            <form @submit.prevent="getLogin">
               <input type="text" placeholder="Correo electrónico" v-model="login.email" />
               <input type="password" placeholder="Contraseña" v-model="login.password" />
               <input type="submit" value="Ingresar" class="btn" @click="postLogin()" />
               <a href="#" class="password">Olvidaste tu contraseña?</a>
            </form>
         </div>
      </div>
   </section>
</template>

<script>
import jwt_decode from 'jwt-decode';

export default {
   data() {
      return {
         login: {
            email: '',
            password: '',
         },
         token: '',
         idToken: '',
      };
   },

   methods: {
      getLogin() {
         if (this.login.email === '' || this.login.password === '') {
            alert('falta campos por llenar');
         } else {
            // console.log(this.login);
            alert('login exitoso');
         }
      },

      async postLogin() {
         const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.login),
         };
         const response = await fetch('https://no-llores-mas.herokuapp.com/auth/login/', request);
         const data = await response.json();
         this.token = data.tokens.access;
         let decoded = jwt_decode(this.token);
         this.idToken = decoded.user_id;
         console.log(this.idToken);
         this.login = {
            email: '',
            password: '',
         };
         this.$router.push(`/usuarios/${this.idToken}`);

         localStorage.setItem('id del token', this.idToken);
      },
   },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap');

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
   min-height: 100vh;
   display: grid;
   grid-template-columns: 60% 1fr;
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
.banner-text h2 {
   font-size: 30px;
   color: white;
}
.banner-text p {
   margin-top: 16px;
   font-size: 20px;
   color: white;
}

footer {
   display: flex;
   justify-content: left;
   align-items: center;
}
.footer-img {
   display: inline-block;
   width: 80px;
}
.formulario {
   padding: 16px 40px;
   display: grid;
   grid-template-rows: 50px 160px 1fr;
}
.inicio-more p {
   text-align: center;
   margin-top: 20px;
}
.inicio-img {
   margin-top: 20px;
   display: flex;
   justify-content: center;
   align-items: center;
}
.facebook {
   display: inline-block;
   width: 50px;
}
.gogle {
   display: inline-block;
   width: 40px;
   margin-left: 10px;
}
.inicio-nav {
   display: flex;
   justify-content: space-around;
   align-items: center;
}
.inicio-nav a {
   color: black;
   display: inline-block;
   font-weight: bold;
}
.inicio-nav a:hover {
   border-bottom: 3px solid black;
}
.inicio input {
   width: 100%;
   padding: 15px 10px;
   margin-bottom: 16px;
   border-radius: 5px;
   border: 1px solid black;
}
.inicio .btn {
   margin-top: 100px;
   background-color: #5640ff;
   color: white;
   font-weight: bold;
}
.password {
   color: #5640ff;
   border-bottom: 1px solid #5640ff;
   font-weight: bold;
}
</style>
