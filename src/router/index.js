import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import Cart from "../views/Cart.vue";
import NotFound from "../views/NotFound.vue";
import About from "../views/About.vue";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/products/:id",
      name: "product",
      component: Product,
    },
    {
      path: "/products/",
      name: "product-list",
      component: () => import("../components/ProductsList"),
    },
    {
      path: "/add",
      name: "add",
      component: () => import("../components/AddProduct"),
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
    { 
      path: '/error', 
      component: NotFound,
    },
    { 
      path: '*', 
      component: NotFound,
    },
    { 
      path: '/about', 
      component: About,
    }
  ],
});
