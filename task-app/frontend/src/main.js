// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';

//Usos de VUE JS
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

//Importamos loc Componentes VUe
import App from './App'
import Create from './components/Create.vue';
import DisplayItem from './components/DisplayItem.vue';
import EditItem from './components/EditItem.vue';

//Configuramos los links de router
const routes = [
  {
    name: 'DisplayItem',
    path: '/',
    component: DisplayItem
  },
  {
    name: 'EditItem',
    path: '/edit/:id',
    component: EditItem
  },{
    name: 'Create',
    path: '/create/item',
    component: Create
  }
];

const router = new VueRouter({ mode: 'history', routes: routes});
new Vue(Vue.util.extend({ router }, App)).$mount('#app');