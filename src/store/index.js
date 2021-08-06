import { createStore, storeKey } from 'vuex';

export default createStore({
   state: {
      cursos: [],
      cursoAgregado: [],
      subtotal: 0,
      // cursoAgregadoFinal: [],
   },
   mutations: {
      getCursosMutation(state, payload) {
         state.cursos = payload;
      },

      addCursoMutation(state, payload) {
         const existe = state.cursoAgregado.some((item) => {
            return item.id === payload;
         });
         if (existe === false) {
            state.subtotal = 0;
            const element = state.cursos.filter((curso) => {
               return curso.id === payload;
            });
            state.cursoAgregado.push(element[0]);
            //calculo del precio total
            state.cursoAgregado.forEach((item) => {
               state.subtotal += parseFloat(item.precio);
            });
         } else {
            alert('Este curso ya está agregado');
         }
         console.log(state.cursoAgregado);
         console.log(state.subtotal);
      },

      eliminarCursoMutation(state, payload) {
         state.cursoAgregado = state.cursoAgregado.filter((item) => {
            return item.id !== payload;
         });
         //recalcular el precio total
         state.subtotal = 0;
         state.cursoAgregado.forEach((item) => {
            state.subtotal += parseFloat(item.precio);
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
