import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// 视图
import aboveView from './views/Basic/BasicInfoNameViewAbove'
import middleView from './views/Basic/BasicInfoNameViewMiddle'
import belowView from './views/Basic/BasicInfoNameViewBelow'

export default new Router({
  routes: [
    {
      path: "/",
      name: "summary",
      component: () => import ("./views/Summary.vue")
    },
    {
      path: "/basicInfo",
      name: "basicInfo",
      component: () => import ("./views/Basic/BasicInfo.vue"),        
    },
    {
      path: "/advanced",
      name: "advanced",
      component: () => import ("./views/Advanced/Advanced.vue")       
    },
    {
      path: "/basicInfoNameView",
      name: "basicInfoNameView",
      /* component: () => import ("./views/Basic/BasicInfoNameView.vue") */
      components: {
        default: aboveView,
        middle: middleView,
        below: belowView            
      }
    }
    ,{
      path: "*",
      name: "empty",
      component: () => import ("./views/Empty.vue")
    }
  ]
});
