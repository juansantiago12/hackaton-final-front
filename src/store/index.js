import { createStore } from 'vuex';

export default createStore({
   state: {
      cursos: [],
   },
   mutations: {
      getCursosMutation(state, payload) {
         state.cursos = payload;
      },
   },
   actions: {
      async getCursosAction({ commit }) {
         const response = await fetch('https://no-llores-mas.herokuapp.com/cursos/');
         const data = await response.json();
         commit('getCursosMutation', data);
      },
   },
   modules: {},
});
