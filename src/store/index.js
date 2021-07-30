import { createStore } from 'vuex';

export default createStore({
   state: {
      cursos: [],
      cursoAgregado: [],
      // cursoAgregadoFinal: [],
   },
   mutations: {
      getCursosMutation(state, payload) {
         state.cursos = payload;
      },
      addCursoMutation(state, payload) {
         const element = state.cursos.filter((curso) => {
            return curso.id === payload;
         });
         state.cursoAgregado.push(element[0]);
         console.log(state.cursoAgregado);
      },
      eliminarCursoMutation(state, payload) {
         state.cursoAgregado = state.cursoAgregado.filter((item) => {
            return item.id !== payload;
         });
      },
   },
   actions: {
      async getCursosAction({ commit }) {
         const response = await fetch('https://no-llores-mas.herokuapp.com/cursos/');
         const data = await response.json();
         commit('getCursosMutation', data);
      },
      addCursoAction({ commit }, id) {
         commit('addCursoMutation', id);
      },
      eliminarCursoAction({ commit }, id) {
         commit('eliminarCursoMutation', id);
      },
   },
   modules: {},
});
