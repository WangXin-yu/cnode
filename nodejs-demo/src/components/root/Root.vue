<template>
  <div>
    <Header></Header>
    <div class="content">
      <div class="warp">

        <div class="left">
          <div class="header">
            <div>全部</div>
            <div>精华</div>
            <div>分享</div>
            <div>问答</div>
            <div>招聘</div>
            <div>客户端测试</div>
          </div>
          <router-view></router-view>
        </div>
        <div class="side">
          <div class="log">

          </div>
          <div class="adv">

          </div>
          <div class="nobody">

          </div>
          <div class="rank">

          </div>
          <div class="community">

          </div>
          <div class="qrcode">

          </div>
        </div>
      </div>
    </div>
    <div>
      <Footer></Footer>
    </div>

  </div>
  
</template>
<script>
  import Header from "./Header"
  import Footer from "./Footer"
  export default {
    name: "root",
    components: {
      Header,
      Footer,
    },
    props: {},
    data() {
      return {}
    },
    methods: {},
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
  .content{
    margin-top: 10px;
  }
  .content>.warp{
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .content .left{
    width: 75%;
    background: #fff;
    border-radius: 3px;
  }
  .content .left .header{
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #80BD01;
    height: 40px;
    width: 100%;
    background: #F6F6F6;
    padding: 10px;
    box-sizing: border-box;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .content .left .header>div:first-child{
    color: #fff;
    background: #80BD01;
    width: 36px;
    height: 23px;
    line-height: 23px;
    border-radius: 3px;
  }
  .content .left .header>div{
    margin: 0 12px;
  }
  .content .side{
    width: 24%;
  }
  .content .log{
    height:115px;
    width: 100%;
    background: #fff;
  }
  .content .adv{
    height:230px;
    width: 100%;
    background: #fff;
    margin-top: 15px;
  }
  .content .nobody{
    width: 100%;
    height: 220px;
    background: #fff;
    margin-top: 15px;
  }
  .content .rank{
    width: 100%;
    height: 345px;
    background: #fff;
    margin-top: 15px;
  }
  .content .community{
    width: 100%;
    height: 280px;
    background: #fff;
    margin-top: 15px;
  }
  .content .qrcode{
    width: 100%;
    height: 290px;
    background: #fff;
    margin-top: 15px;
  }
</style>