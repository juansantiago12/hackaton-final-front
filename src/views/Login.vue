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
         <div class="formulario">
            <div class="inicio-more">
               <p>Puedes iniciar sesión con:</p>
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
   <router-view />
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
.formulario {
   padding: 16px 40px;
   display: grid;
   grid-template-rows: 50px 160px 1fr;
}

/* .inicio {
   display: flex;
   align-items: center;
} */
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
   font-weight: 900;
   font-size: 14px;
   padding-bottom: 8px;
}
.inicio-nav a:hover {
   border-bottom: 4px solid black;
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
