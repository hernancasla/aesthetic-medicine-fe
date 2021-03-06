import Vue from 'vue';
import VeeValidate from 'vee-validate';

import { store } from './store';
import { router } from './helpers';
import App from './App';
import { config } from './config';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faUpload, faTrashAlt, faFileDownload, faEdit, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faFacebookF, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'
import { TablePlugin } from 'bootstrap-vue'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
import { NavbarPlugin } from 'bootstrap-vue'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import i18n from './i18n'

library.add(faCoffee, faTrashAlt, faUpload, faFileDownload, faEdit, faFacebook, faTwitter,
    faInstagram, faFacebookF, faLinkedin, faEnvelope,faWhatsapp);
// library.add(faUpload);
dom.watch()

Vue.use(VeeValidate, {
    inject: true,
    fieldsBagName: 'veeFields'
});
Vue.use(BootstrapVue);
Vue.use(TablePlugin);
Vue.use(VueMoment, {
    moment,
})
Vue.filter('truncate', function (text, stop, clamp) {
    return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '')
})
Vue.use(NavbarPlugin)

Vue.prototype.appConfig = config;

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('Navigation', Navigation)
Vue.component('Footer', Footer)
router.beforeEach((to, from, next) => {
    document.title = i18n.t("page.title");
    next()
  })

new Vue({
    el: '#app',
    router,
    store,
    i18n,
    render: h => h(App)
});