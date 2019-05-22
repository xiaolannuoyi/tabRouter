<template>
    <div class="header">
        <h1>Tab 路由管理 
            <el-button @click='logout'>退出登录</el-button>
        </h1>
    </div>
</template>

<script>
export default {
    name:'navTop',
    methods:{
        logout(){
            this.$store.state.openTab = [];
            this.$store.state.activeIndex = '/main';
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped>
.header{
    background-color: rgb(85, 201, 236);
    height: 40px;
}
h1{
    margin: 0;
}
</style>
