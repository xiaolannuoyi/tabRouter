<template>
      <el-menu
        :default-active="$route.path"
        class="slider"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
        >
        <el-menu-item index="/main" >
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        
        <el-submenu v-for="(item,index) in menuList" :key="index" :index='item.id'>
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.title}}</span>
          </template>
          <el-menu-item-group >
            <el-menu-item v-for="child in item.children" :key="child.id" :index='child.index'>{{child.childtitle}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
</template>

<script>
export default {
  name: 'Slider',
  data(){
    return {
      menuList:[
        {
          id:'1',
          title: '导航1',
          icon:'el-icon-location',
          children:[
            {
              index:'/page1',
              childtitle:'导航1page1'
            },
            {
              index:'/page2',
              childtitle:'导航1page2'
            },
          ]
        },
        {
          id:'2',
          title: '导航2',
          icon:'el-icon-location',
          children:[
            {
              index:'/page3',
              childtitle:'导航2page3'
            },
            {
              index:'/page4',
              childtitle:'导航2page4'
            },
          ]
        }
      ]
    }
  },
  
}
</script>
<style scoped>
.slider{
  height: 100vh;
}
</style>
