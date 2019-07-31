import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/pages/HelloWorld";
import Start from "@/pages/Start";
import Village from "@/pages/Village";
import Meditation from "@/pages/Meditation";
import Store from "@/pages/Store";
import Laboratory from "@/pages/Laboratory";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/Start",
      name: "Start",
      component: Start
    },
    {
      path: "/Village",
      name: "Village",
      component: Village
    },
    {
      path: "/Meditation",
      name: "Meditation",
      component: Meditation
    },
    {
      path: "/Store",
      name: "Store",
      component: Store
    },
    {
      path: "/Laboratory",
      name: "Laboratory",
      component: Laboratory
    }
  ]
});
