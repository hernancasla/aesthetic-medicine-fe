import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../components/HomePage'
import LoginPage from '../components/LoginPage'
import RegisterPage from '../components/RegisterPage'
import FileUpload from '../components/Me'
import FilesView from '../components/FilesView'



Vue.use(Router);

export const  router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage, meta: {title: 'Dashboard'}},
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/upload', component: FileUpload },
    { path: '/files', component: FilesView },

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});

/*router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})*/