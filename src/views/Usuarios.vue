<template>
   <button @click="cambiar1()">Hola 1</button>
   <button @click="cambiar2()">Hola 2</button>
   <button @click="cambiar3()">Hola 3</button>
   <form :style="elemento1" class="uno"></form>
   <form :style="elemento2" class="dos"></form>
   <form :style="elemento3" class="tres"></form>
</template>

<script>
export default {
   data() {
      return {
         elemento1: '',
         elemento2: 'display: none',
         elemento3: 'display: none',
      };
   },

   methods: {
      cambiar1() {
         this.elemento1 = 'display: block';
         this.elemento2 = 'display: none';
         this.elemento3 = 'display: none';
      },
      cambiar2() {
         this.elemento1 = 'display: none';
         this.elemento2 = 'display: block';
         this.elemento3 = 'display: none';
      },
      cambiar3() {
         this.elemento1 = 'display: none';
         this.elemento2 = 'display: none';
         this.elemento3 = 'display: block';
      },
   },
};
</script>

<style scoped>
* {
   box-sizing: border-box;
   padding: 0;
   margin: 0;
}
form {
   width: 100px;
   height: 100px;
}
.uno {
   background-color: red;
}
.dos {
   background-color: green;
}
.tres {
   background-color: blue;
}
</style>
