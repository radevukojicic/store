import Vue from 'vue'
import VueRouter from 'vue-router'
import ShopComp from '../components/ShopComp.vue'
import CartComp from '../components/CartComp.vue'
import NotFound from '../components/NotFound.vue'
Vue.use(VueRouter)

const routes = [

  //Paths for website

  //mne
  {
    path: "/",
    component: ShopComp,
  },
  {
    path: "/cart",
    component: CartComp,
  },

  {
    path: '*',
    name: 'Not Found',
    component: NotFound,
    meta: { title: '404' }

  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // linkActiveClass: "activeMob",
  // linkExactActiveClass: "active",
  // scrollBehavior (to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     return { x: 0, y: 0 }
  //   }
  // }
})
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => {
    if (err.name !== 'NavigationDuplicated') throw err
  });
}
export default router

//SET TITLE TO LOAD AS INSERTED
const DEFAULT_TITLE = 'Web Page';
router.afterEach((to) => {
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});


//Check if token exist to protect routes// TODO:Check secret key
// router.beforeEach((to, from, next) => {
  
//   if (localStorage.getItem('token')) {
//     var expired = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
//     var time = (Date.now() < expired.exp * 1000)
//   }
//     if(time && to.name==="Login"){
//       next({name: 'AdminNekretnine'})
//     }
//     // If logged in, or going to the Login page.
//     if (time ||  to.name === 'Not Found' || to.name === "Login"  || to.name === "Main" || to.name === "MainEng" || to.name === "MainRus" || to.name === "HomePage" || to.name === "About" || to.name === "Contact" || to.name === "SingleNekretnine") {
//       // Continue to page.
//       next()
//     } else {
//       // Not logged in, redirect to login.
//       next({name: 'Login'})
//     }
// });
