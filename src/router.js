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
      /* BasicInfoNameView 页面中，有3个路由出口（router-view） */    
      component: () => import ("./views/Basic/BasicInfoNameView.vue"),
      // redirect: '/basicInfoNameView/nameViews',
      children: [
        {
          path: "nameViews",
          name: "nameViews",
          components: {
            default: aboveView,
            middle: middleView,
            below: belowView            
          }
        }
      ]
    },{
      path: "/route",
      name: "route",
      component: () => import ("./views/Basic/BasicInfoRoute.vue"),
      children: [
        {
          path: "dynamic/:id",
          name: "dynamic",
          component: () => import ("./views/Basic/BasicInfoRouteDynamic.vue")
        },
        {
          path: "embed",
          /* name: "embed", */
          component: () => import ("./views/Basic/BasicInfoRouteEmbed.vue"),
          children: [
            {
              path: "",
              name: "defaultEmbed",
              alias: "aliasEmbed",
              /* redirect: {name: "basicInfoNameView"}, */
              component: () => import ("./views/Basic/BasicInfoRouteEmbedDefault.vue")
            },
            {
              path: "oneEmbed",
              name: "oneEmbed",              
              component: () => import ("./views/Basic/BasicInfoRouteEmbedOne.vue")
            }            
          ]
        },
        {
          path: "params",
          name: "params",
          component: () => import ("./views/Basic/BasicInfoRouteParams.vue"),
          children: [
            {
              path: "propBoolean/:id",
              name: "propBoolean",
              component: () => import ("./views/Basic/BasicInfoRouteParamsBoolean.vue"),
              props: true
            }, 
            {
              path: "propObj",
              name: "propObj",
              component: () => import("./views/Basic/BasicInfoRouteParamsObj.vue"),
              props: {btnType: "function", id: "123"}
            }
          ]
        }
      ]
    },{
      path: "*",
      name: "empty",
      component: () => import ("./views/Empty.vue")
    }
  ]
});
