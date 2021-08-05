<template>
   <h2>{{ $route.params.id }}</h2>
   <div v-for="(curso, index) in cursoAgregado" :key="index">
      <p>{{ curso.nombre }}</p>
   </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
   computed: {
      ...mapState(['cursoAgregado']),
   },
};
</script>

<style></style>
