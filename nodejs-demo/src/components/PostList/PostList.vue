<template>
  <div class="total-container">
    <div class="left-container">
      <div class="header">
        <div>全部</div>
        <div>精华</div>
        <div>分享</div>
        <div>问答</div>
        <div>招聘</div>
        <div>客户端测试</div>
      </div>
      <div class="list-content" v-for="(item, index) in data_arr" :key="item.id" >
        <div class="list-item"  @click="toDetail(item.id, item.diffDate)" v-if="index >= (current_page-1)*numbers
    && index <= current_page*numbers-1">
          <div><img :src="item.author.avatar_url" alt=""></div>
          <div>
            <div style="font-size:14px;color:#9E78C0">{{item.reply_count}}/</div>
            <div style="font-size:12px">{{item.visit_count}}</div>
          </div>
          <div v-if="item.top" class="top">
            置顶
          </div>
          <div v-else class="anwser">
            问答
          </div>
          <div style="overflow:hidden;width: 680px;height:32px;line-height:32px;text-overflow:ellipsis;text-align: left">{{item.title}}</div>
          <div style="font-size: 12px;color: #778087;position:absolute;right:5px;">{{item.diffDate}}</div>
        </div>
      </div>
      <!--    分页-->
      <div class="block">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="current_page"
            :page-sizes="[40, 20, 8, 4]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="40">
        </el-pagination>
      </div>
      <!--    分页-->
      <router-view></router-view>
    </div>
    <div class="side">
      <div class="log">
        <div>CNode : Node.js专业中文社区</div>
        <div>您可以 <span style="color:#778087">登录</span> 或<span style="color:#778087">注册</span> ，也可以</div>
        <button>通过 GitHub 登录</button>
      </div>
      <div class="adv">
        <div><img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt=""></div>
        <div><img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt=""></div>
        <div><img src="https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-" alt=""></div>
      </div>
      <div class="nobody">
        <div class="top">
          无人回复的话题
        </div>
        <div class="topics">
          <div>你们有没有遇到过 yarn integrity check fai...</div>
          <div>这个课程怎么样, 最近想学JS的人工智能...</div>
          <div>基于 Custom Elements 的组件化开发</div>
          <div>node.js项目实战:dapps应用商店</div>
          <div>Object.defineProperty()修改对象属性的ge...</div>
        </div>

      </div>
      <div class="rank">
        <div class="top">
          积分榜 TOP 100 >>
        </div>
        <div class="user">
          <div><span>21730 </span><span>i5ting</span></div>
          <div><span>15660 </span><span>alsotang</span></div>
          <div><span>9350 </span><span>leapon</span></div>
          <div><span>9035 </span><span>atian25</span></div>
          <div><span>8780 </span><span>jiyinyiyong</span></div>
          <div><span>7310 </span><span>yakczh</span></div>
          <div><span>6815 </span><span>im-here</span></div>
          <div><span>6095 </span><span>DevinXian</span></div>
          <div><span>5815 </span><span>chapgaga</span></div>
          <div><span>5350 </span><span>magicdawn</span></div>
        </div>

      </div>
      <div class="community">
        <div class="top">
          友情社区
        </div>
        <div>
          <img src="https://static2.cnodejs.org/public/images/ruby-china-20150529.png" alt="">
          <img src="https://static2.cnodejs.org/public/images/golangtc-logo.png" alt="">
          <img src="https://static2.cnodejs.org/public/images/phphub-logo.png" alt="">
          <img src="https://static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK" alt="">
        </div>
      </div>
      <div class="qrcode">
        <div class="top">客户端代码</div>
        <div><img src="https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU" alt=""></div>
        <div style="font-size: 13px;color:#778087;margin-top:5px;">客户端源码地址</div>
      </div>
    </div>
  </div>


</template>

<script>
  export default {
    name: "PostList",
    components: {},
    props: {},
    data() {
      return {
        data_arr:[],      //获取的数据
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        numbers: 40,
        current_page: 1,
        diff_date: ''
      }
    },
    methods: {
      getData(){
        this.$axios.req('api/topics').then(res=>{
          this.data_arr = res.data;
          this.data_arr.map((item)=>{
            let year = this.$dayjs(new Date().getTime()).diff(this.$dayjs(item.create_at), 'year');
            let month = this.$dayjs(new Date().getTime()).diff(this.$dayjs(item.create_at), 'month');
            let day = this.$dayjs(new Date().getTime()).diff(this.$dayjs(item.create_at), 'day');
            let hour = this.$dayjs(new Date().getTime()).diff(this.$dayjs(item.create_at), 'hour');
            let min = this.$dayjs(new Date().getTime()).diff(this.$dayjs(item.create_at), 'minute');
            if(year > 1){
              item.diffDate = year+"年前";
            }else if(month > 1){
              item.diffDate = month+"月前";
            }else if(day > 1){
              item.diffDate = day+"天前";
            }else if(hour > 1){
              item.diffDate = hour+"小时前";
            }else if(min > 1){
              item.diffDate = min+"分钟前";
            }else{
              item.diffDate = "暂无回复"
            };
            console.log(item.diffDate+"title:"+item.title);
          });
        });
      },
      toDetail(id, date){
        //路由传递参数，把id传过去
        console.log(date);
        this.$router.push({path:'/detail',query:{id:id,date:date}})
      },
      handleSizeChange(val) {
        //每页的条数即为循环的条数
        this.numbers = val;
      },
      handleCurrentChange(val) {
        this.current_page = val;
      },
    },
    mounted() {
      this.getData();
      console.log("now"+new Date().getTime());
    },
    created() {

    },
    filters: {
    },
    computed: {},
    watch: {},
    directives: {}
  }
</script>

<style scoped lang="scss">
  .total-container{
    display: flex;
    justify-content: space-between;
  }
  .header{
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
  .left-container{
    background: #fff;
    width:75%;
  }
  .header>div:first-child{
    color: #fff;
    background: #80BD01;
    width: 36px;
    height: 23px;
    line-height: 23px;
    border-radius: 3px;
  }
  .header>div{
    margin: 0 12px;
  }
  .content{
    display: flex;
    align-items: center;
  }
  .list-content{


  }
  .list-item{
    height: 50px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
    color:#000;
    position: relative;
  }
  .list-item > div:nth-child(2){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
  }
  .list-item > div:first-child > div{
  }
  .list-item img{
    width: 30px;
    height: 30px;
  }
  .list-item>div{
    margin: 0 5px;
  }
  .list-item .top{
    font-size:12px;
    color:#fff;
    background: #80BD01;
    width:32px;
    height: 18px;
    line-height: 18px;
    border-radius: 3px;
  }
  .list-item .anwser{
    font-size:12px;
    color:#999;
    background: #E5E5E5;
    width:32px;
    height: 18px;
    line-height: 18px;
    border-radius: 3px;
  }
  .list-item:hover{
    cursor: pointer;
  }
  .block{
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .side{
    width: 24%;
  }
  .log{
    height:135px;
    width: 100%;
    background: #fff;
    border-radius: 3px;
    padding: 10px;
    text-align: left;
    box-sizing: border-box;
  }
  .log div{
    line-height: 20px;
    font-size:14px;
    color:#333;
    text-align: left;
    margin-top: 10px;
  }
  .log button{
    width: 150px;
    height:34px;
    border: none;
    background: #5BC0DE;
    color: #fff;
    margin-top: 10px;
  }
  .adv{
    height:230px;
    width: 100%;
    background: #fff;
    margin-top: 15px;
    border-radius: 3px;
  }
  .adv img{
    width:270px;
    height: 65px;
    margin-top:7px;
  }
  .nobody{
    width: 100%;
    height: 220px;
    background: #fff;
    margin-top: 15px;
    border-radius: 3px;
  }
  .nobody .topics{
    font-size: 14px;
    color: #778087;
    line-height: 30px;
    margin-top:10px;
    text-align: left;
    margin-left: 10px;
  }
  .rank{
    width: 100%;
    height: 345px;
    background: #fff;
    margin-top: 15px;
    border-radius: 3px;
  }
  .rank .user{
    text-align: left;
    margin: 2px;
    line-height: 30px;
    color: #808080;
    font-size: 13px;
  }
  .rank .user span{
    margin: 0 5px;
  }
  .community{
    width: 100%;
    height: 280px;
    background: #fff;
    margin-top: 15px;
    text-align: left;
    border-radius: 3px;
  }
  .community >.top, .qrcode>.top, .rank>.top, .nobody>.top{
    line-height:40px;
    color: #444;
    font-size:13px;
    text-align: left;
    background: #F6F6F6;
    padding-left: 15px;
  }
  .qrcode img{
    width:200px;
    height: 200px;
    margin-top: 15px;
  }
  .community img{
    width:150px;
    height: 50px;
    margin-top:5px;
    margin-left:10px;
  }
  .qrcode{
    width: 100%;
    height: 290px;
    background: #fff;
    margin-top: 15px;
    border-radius: 3px;
  }
</style>