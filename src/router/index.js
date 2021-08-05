import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Carrito from '../views/Carrito.vue';
import Login from '../views/Login.vue';
import Registrarse from '../views/Registrarse.vue';

const routes = [
   {
      path: '/',
      name: 'Home',
      component: Home,
   },
   {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
   },
   {
      path: '/carrito',
      name: 'Carrito',
      component: Carrito,
   },
   {
      path: '/infocurso/:id',
      name: 'InfoCurso',
      component: () => import(/* webpackChunkName: "about" */ '../views/InfoCurso.vue'),
   },
   {
      path: '/login',
      name: 'Login',
      component: Login,
   },
   {
      path: '/registrarse',
      name: 'Registrarse',
      component: Registrarse,
   },
   {
      path: '/usuarios/:id',
      name: 'Usuarios',
      component: () => import(/* webpackChunkName: "about" */ '../views/Usuarios.vue'),
   },
   {
      path: '/pagos/:id',
      name: 'Pagos',
      component: () => import(/* webpackChunkName: "about" */ '../views/Pagos.vue'),
   },
];

const router = createRouter({
   history: createWebHashHistory(),
   routes,
});

export default router;
