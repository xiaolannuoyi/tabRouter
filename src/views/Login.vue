<template>
    <div>
        <el-button @click="goto">登录</el-button>
    </div>
</template>

<script>
export default {
    methods:{
        goto(){
            this.$router.push('/');
        }
    }
}
</script>

<style>

</style>
