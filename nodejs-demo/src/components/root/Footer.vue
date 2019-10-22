<template>
    <div class="footer">
      <div class="warp">
        <div>RSS | 源码地址</div>
        <div>CNode 社区为国内最专业的 Node.js开源技术社区，致力于Node.js的技术研究</div>
        <div>
          <span>服务器赞助商为</span>
          <img style="width:92px;height:18px" src="https://static.cnodejs.org/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9" alt="">
          <span>，存储赞助商为</span>
          <img style="width:115px;height:43px" src="https://static.cnodejs.org/Fg0jtDIcTqVC049oVu5-sn6Om4NX" alt="">
          <span>,由</span>
          <img style="width:166px;height:54px" src="https://static.cnodejs.org/FpMZk31PDyxkC8yStmMQL4XroaGD" alt="">
          <span>提供应用性能服务</span>
        </div>
        <div>
          <span>新手搭建 Node.js 服务器，推荐使用无需备案的</span>
          <a href="https://www.digitalocean.com/?refcode=eba02656eeb3">DigitalOcean(https://www.digitalocean.com/)</a>
        </div>
      </div>
    </div>

</template>

<script>
  export default {
    name: "Footer",
    components: {},
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

  .footer{
    background: #fff;
    font-size: 14px;
    color: #ABABAB;
    width: 100%;
    margin-top:10px;
  }
  .footer>.warp{
    max-width: 1200px;
    height: 190px;
    width: 100%;
    margin: 0 auto;
    text-align: left;
    padding: 20px 0;
    box-sizing: border-box;
    line-height: 25px;
  }
</style>