import Home from "../src/components/Home.vue";
import SingUp from "../src/components/SignUp.vue";
import Login from "../src/components/Login.vue";
import Add from "../src/components/Add.vue";
import Update from "../src/components/Update.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "SingUp",
    component: SingUp,
    path: "/SignUp",
  },
  {
    name: "Login",
    component: Login,
    path: "/Login",
  },
  {
    name: "Add",
    component: Add,
    path: "/Add",
  },
  {
    name: "Update",
    component: Update,
    path: "/Update",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
