<template>
  <div>
    <div class="header">
      <div class="warp">
        <div class="left">
          <img @click="homePage" class="logo" src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt="">
          <div  class="search">
            <i class="icon_search iconfont icon-sousuo"></i>
            <input type="text">
          </div>

        </div>
        <div class="right">
          <div @click="homePage">首页</div>
          <div>新手入门</div>
          <div>API</div>
          <div>关于</div>
          <div>注册</div>
          <div @click="signUp">登录</div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
  export default {
    name: "Header",
    components: {},
    props: {},
    data() {
      return {}
    },
    methods: {
      signUp(){
        this.$router.push("/Log")
      },
      homePage(){
        this.$router.push("/")
      }
    },
    mounted() {

    },
    created() {

    },
    filters: {},
    computed: {},
    watch: {},
    directives: {}
  }
</script>

<style scoped lang="scss">
  .header{
    width: 100%;
    height: 50px;
    background: #444;
  }
  .warp{
    max-width: 1200px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .logo{
    width:120px;
    height: 28px;
    margin-top:-7px;
  }
  .logo:hover{
    cursor:pointer
  }
  .search{
    width: 233px;
    padding: 3px 0;
    height: 20px;
    border-radius: 13px;
    background: #888;
  }
  .search{
    background: #888;
    position: relative;
  }
  .icon_search{
    position: absolute;
    right:12px;
    font-size:22px;
  }
  .search>input{
    width: 206px;
    height: 20px;
    background: transparent;
    border: none;
    outline: none;
  }
  .left{
    width: 31.2%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .right{
    width: 29.6%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ccc;
    font-size: 13px;
  }
  .right>div{
    cursor: pointer;
  }
</style>