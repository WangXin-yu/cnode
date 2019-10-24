<template>
  <div>
    <div class="log-container">
      <div class="log-left">
        <div class="header">
          <span style="color:#80bD01">主页</span>
          <span>/</span>
          <span>登录</span>
        </div>
        <div class="content">
          <div class="username">
            <span>用户名</span>
            <div class="username-input">
              <el-input v-model="username" placeholder="请输入用户名"></el-input>
            </div>
          </div>
          <div class="password">
            <span>密码</span>
            <div class="password-input">
              <el-input v-model="password" placeholder="请输入密码"></el-input>
            </div>
          </div>
          <div style="margin-top: 30px;">
            <button @click="signIn" class="log" >登录</button>
            <button class="gitLog">通过 GitHub 登录</button>
            <span style="margin-left: 20px;">忘记密码了?</span>
          </div>
        </div>
      </div>
      <div class="side">
        <div class="top">关于</div>
        <div class="tips">
          <div>CNode：Node.js专业中文社区</div>
          <div>在这里你可以：</div>
          <div class="item">

            <div>● 向别人提出你遇到的问题</div>
            <div>● 帮助遇到问题的人</div>
            <div>● 分享自己的知识</div>
            <div>● 和其它人一起进步</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
  export default {
    name: "Log",
    components: {},
    props: {},
    data() {
      return {
        username:'',
        password:'',
      }
    },
    methods: {
      signIn(){
        if(this.username != "" && this.password != ""){
          //
          localStorage.setItem("username", this.username)
          localStorage.setItem("password", this.password)
          this.$router.push("/");
        } else{
          //
        }
      },
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
  .log-container{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .log-left{
    width: 75%;
    background: #fff;
    height: 400px;
  }
  .log-left .header{
    width: 100%;
    height: 40px;
    background: #F6F6F6;
    text-align: left;
  }
  .log-left .header span{
    line-height: 40px;
    font-size:14px;
    margin: 6px;
    color: #999;
  }
  .side{
    width: 24%;
    background: #fff;
    border-radius: 3px;
    text-align: left;
    height: 250px;
    line-height: 50px;
  }
  .content{
    margin-top:40px;
    color: #333;
    font-size: 14px;
    text-align: left;
  }
  .content span{
    margin-left: 150px;
    width: 50px;
    margin-top: 10px;
  }
  .content .username{
    display: flex;
  }
  .content .password{
    display: flex;
  }
  .content .username-input{
    width: 283px;
    height: 30px;
    margin-bottom: 20px;
  }
  .content .password-input{
    width: 283px;
    height: 30px;
    margin-bottom: 20px;
  }
  .content .log{
    width:52px;
    height:34px;
    color: #fff;
    background:#0088CC;
    border: none;
    margin-left: 220px;
    margin-right: 20px;
  }
  .content .gitLog{
    width:152px;
    height:34px;
    color: #fff;
    background:#5BC0DE;
    border: none;
  }
  .side .top{
    line-height:40px;
    color: #444;
    font-size:13px;
    text-align: left;
    background: #F6F6F6;
    padding-left: 15px;
  }
  .side .tips{
    line-height: 30px;
    font-size: 13px;
    color: #333;
    padding-left: 10px;
    box-sizing: border-box;
  }
  .side .tips .item{
    margin-left: 30px;
  }

</style>