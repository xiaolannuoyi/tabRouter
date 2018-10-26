
# 思路
* 将打开的所有路由放到一个栈里（openTab:[]），tabs显示遍历openTab
* 初始状态，将首页推入栈，并设置激活状态

* 当切换路由时(监听路由变化),判断栈里是否存在这个路由，
若存在，只改变激活状态；若不存在，则推入栈，并改变激活状态。

* tabs 切换，调用@tab-click='tabClick'方法，跳转路由，（路由变化，走上一步中“若存在，只改变激活状态”）
* tabs 移除，调用@tab-remove='tabRemove' 方法，移除栈（openTab）中对应的路由，若移除的路由是激活状态，那么跳转路由到栈中最后一个（路由变化）；若移除的路由非激活状态，不做修改
涉及到的内容
>vuex    state:路由栈、激活状态   mutations: 添加、移除、修改激活状态
>watch
>mounted
>tab 切换、移除两个方法
[在线演示地址](https://xiaolannuoyi.github.io/tabRouter/)
# elementUI-vue3

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```
