import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = (resolve) => { require.ensure(["./Home/Home.vue"], () => { resolve(require("./Home/Home.vue")); }); };
const News = (resolve) => { require.ensure(["./Home/News.vue"], () => { resolve(require("./Home/News.vue")); }); };
const Careers = (resolve) => { require.ensure(["./Home/Careers.vue"], () => { resolve(require("./Home/Careers.vue")); }); };
const ContactUs = (resolve) => { require.ensure(["./Home/ContactUs.vue"], () => { resolve(require("./Home/ContactUs.vue")); }); };


Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    // Login
    { path: '/', component: Home, name: 'Home', meta: { title: 'Home' } },
    { path: '/news', component: News, name: 'News', meta: { title: 'News' } },
    { path: '/careers', component: Careers, name: 'Careers', meta: { title: 'Careers' } },
    { path: '/contact', component: ContactUs, name: 'Contact Us', meta: { title: 'Contact Us' } },
    // Page Not Found (Error 404)
    // { path: '*', component: PageNotFound, meta: { title: 'Error 404' } },
  ],
  mode: 'history',
});

export default router;
