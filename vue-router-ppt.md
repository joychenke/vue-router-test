

# 基本知识点：

## 概述

Vue Router 是 [Vue.js](http://cn.vuejs.org/) 官方的路由管理器。它包含的主要功能是：

+ 嵌套的路由
+ 模块化的、基于组件的路由配置
+ 路由参数

有两种模式，HTML5 历史模式或 **hash 模式**

### hash模式：

+ routes中mode: "hash"

使用URL的hash来模拟一个完整的URL，当hash改变时，页面不会重新刷新

### history模式：

+ routes中mode："history"

没有很丑的hash，是利用 history.pushState API 来完成 URL 跳转而无须重新加载页面

tips：

要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 `index.html` 页面，这个页面就是你 app 依赖的页面

同时，因为所有路径都会返回 `index.html` 文件，服务器不再返回 404 错误页面。为了避免这种情况，要在 Vue 应用里面覆盖所有的路由情况，然后在给出一个 404 页面。



## router-link

描述： 组件， 会渲染出一个a标签

属性：

**<u>to属性</u>**  在具有路由功能的应用中，通过to属性设置跳转的路由.。to里面绑定 **目标路由**的链接。标签被点击后，会执行router.push( )操作。 因此router.push(  )中能传什么，to后面就能接什么。

**<u>replace属性</u>**  默认false，设为true时，点击router-link，调用的就是router.replace( )，导航后不会留下history记录【不可通过router.go( )向前或向后退几步】***演示***

**<u>append属性</u>**  默认是false，设为true时，点击router-link，将新的相对路由，加到现有路由后面  ***演示***

其他：

tag属性： 将`<router-link>` 渲染成指定标签

active-class属性： 设置链接激活时使用的 CSS 类名



## router-view

描述：组件，渲染路径匹配到的视图组件。router-view渲染的组件，可以有自己的router-view（路由表中配置children属性）。可以配合transition和keep-alive使用。

router-link和router-view一起用，一个指定路由跳转的位置，一个渲染新路由匹配到的视图组件

属性：

**<u>name属性</u>** 一个页面中有多个组件需要渲染的时候，给router-view加name属性，然后配置下routes中对应的components。官方叫“命名路由” **<u>演示</u>**  

redirect是重新定位路由，比如 本来是显示 /basicInfoNameView，现在因为用了redirect，显示的是redirect中的内容 /basicInfoNameView/nameViews 。路由和视图都改变了。

## routes

路由表，每个路由都必须要有。常用的参数有 path，component， name， components（命名路由时用），redirect（重定向）， props（路由传参）， children（嵌套路由中用）， beforeEnter （路由守卫）

![](D:\md文件\routes数组中能存的参数.png)

## router实例方法

router.push, router.replace, router.go( n ) , router.back( ), router.forward( )

router.addRoutes 动态添加更多的路由规则

## router导航守卫

通过跳转或取消的方式守卫导航. 全局的, 单个路由独享的, 或者组件级的。



## 路由对象

vue-router是通过在 Vue 根实例的router配置中传入 router 实例。

以下两个属性在所有组件中都能访问： this.$router  【router 实例】  this.$route  【当前激活的**路由对象**，只读，但是可以watch它】

路由对象属性包括：

 $route.path, $route.params, $route.query, $route.hash, $route.fullpath,$route.matched,$route.name, $route.redirectedForm

# 用法

## 动态路由匹配

某种模式匹配到所有路由，并映射到同一组件。比如左侧树右侧表，根据树节点内容，切换表格内容。

1， 原来的组件会被复用，生命周期钩子不会被触发。动态路由参数会在url中体现。**<u>演示</u>**

2，想对路由参数的变化作出响应，可以watch $route对象的变化  **<u>演示</u>**

用通配符（*）匹配所有路由时，通常用于404页面。此时请注意路由的顺序。

## 路由嵌套

要注意，**以 / 开头的嵌套路径**会被当作根路径。在设置嵌套路径时，children中的路径，无需以/开头。**<u>演示</u>**

默认的嵌入组件，path置为 “ ”，可在router-view标签的位置渲染此默认子路由

## 重定向和别名

重定向，routes配置项中的redirect。当用户访问 `/a`时，URL 将会被替换成 `/b`，然后匹配路由为 `/b` **<u>演示</u>**

别名，routes配置项中的alias。/a的别名是/b，表示当访问/b时，路由正常显示，但是其实匹配到的是/a  。因此路由表中没定义的路由，在地址栏也能正常访问 **<u>演示</u>**

## 路由组件传参

通过props，将组件和路由解耦。props属性可传，布尔，对象或者函数。



































