import { createStore } from "vuex";

export default createStore({
  state: {
    cursos: [],
    cursoAgregado: [],
    cursoInfo: [],
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
    /*etCursosInfoMutation(state, payload) {
      state.cursoInfo = payload;

      console.log(cursoInfo);
    },*/
  },
  actions: {
    async getCursosAction({ commit }) {
      const response = await fetch(
        "https://no-llores-mas.herokuapp.com/cursos/"
      );
      const data = await response.json();
      commit("getCursosMutation", data);
    },
    addCursoAction({ commit }, id) {
      commit("addCursoMutation", id);
    },
    /*async getCursosInfoAction({ commit }) {
      const response = await fetch(
        "https://no-llores-mas.herokuapp.com/cursos/7"
      );
      const data = await response.json();
      commit("getCursosInfoMutation", data);
      console.log(data);
    },*/
  },
  modules: {},
});
