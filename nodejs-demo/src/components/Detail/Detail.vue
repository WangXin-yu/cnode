<template>
  <div>
    <div style="display: flex; justify-content: space-between">
      <div class="detail-container">
        <div class="header">
          <div class="title">
            <div></div>
            <div class="top-title">{{data_arr.title}}</div>
            <div class="top-info">
              <span v-if="data_arr.top" class="top"> 置顶</span>
              <span>● 发布于 {{date}}</span>
              <span v-if="data_arr.author"> ● 作者 {{data_arr.author.loginname}} </span>
              <span v-if="data_arr.author"> ● {{data_arr.visit_count}} 次浏览 </span>
              <span v-if="data_arr.author"> ● 来自 分享 </span>
            </div>
          </div>
        </div>
        <div class="content-text" v-html="data_arr.content">
        </div>
      </div>
      <div class="detail-side">
        <div class="author-info">
          <div class="name">
            作者
          </div>
          <div v-if="data_arr.author">
            <img :src="data_arr.author.avatar_url"
                 style="width: 48px; height:48px;margin:10px;" alt="">
            <span style="vertical-align: 25px;">{{data_arr.author.loginname}}</span>
          </div>
          <div style="margin-left: 10px;line-height: 30px;">积分:5</div>
          <div style="line-height: 30px;font-size:13px; color:#333;margin-left:10px;">“ 这家伙很懒，什么个性签名都没有留下。 ”</div>
        </div>
        <div class="adv">
          <div><img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt=""></div>
          <div><img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt=""></div>
          <div><img src="https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-" alt=""></div>
        </div>
        <div class="other-topics">
          <div class="top">
            作者的其他话题
          </div>
          <div style="text-align:left;line-height: 55px;padding-left:15px;">
            无
          </div>
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
      </div>
    </div>


    <div class="comment">
      <div style="line-height: 40px; color:#444; font-size:14px; margin: 5px;">{{data_arr.reply_count}} 回复</div>
      <div class="com-list" v-for="(item, index) in data_arr.replies" :key="item.id">
        <div class="com-item">
          <div>  <img :src="item.author.avatar_url" alt="">
            <span>{{item.author.loginname}} </span>
            <span style="color:#0088CC">{{index+1}}楼●</span>
            <span style="color:#0088CC"> {{item.diffDate}}</span>
          </div>
          <div v-html="item.content" style="margin-bottom: 10px;padding-left:50px;font-size:15px;color:#333"></div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
  export default {
    name: "Detail",
    components: {},
    props: {},
    data() {
      return {
        author_id:0,
        data_arr:{},
        date:'',
      }
    },
    methods: {
      getArray(){
        this.$axios.req('api/topic/'+this.$route.query.id).then(res=>{
          this.data_arr = res.data;
          this.data_arr.replies.map((item)=>{
            let year = this.$dayjs(new Date().getTime()).diff(this.$dayjs(item.create_at), 'year');
            let month = this.$dayjs(new Date().getTime()).diff(this.$dayjs(item.create_at), 'month');
            let day = this.$dayjs(new Date().getTime()).diff(this.$dayjs(item.create_at), 'day');
            let hour = this.$dayjs(new Date().getTime()).diff(this.$dayjs(item.create_at), 'hour');
            let min = this.$dayjs(new Date().getTime()).diff(this.$dayjs(item.create_at), 'minute');
            if(year > 1){
              item.diffDate = year+"年前";
            }else if(month > 1){
              item.diffDate= month+"月前";
            }else if(day > 1){
              item.diffDate = day+"天前";
            }else if(hour > 1){
              item.diffDate = hour+"小时前";
            }else if(min > 1){
              item.diffDate = min+"分钟前";
            }else{
              item.diffDate = "当前"
            };
          });
        })
      },
      getDate(){

      }
    },
    mounted() {
      this.getArray();
      this.date = this.$route.query.date;
      console.log(this.date);
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
  .detail-container{
    width:75%;
    background: #fff;
    margin-bottom: 10px;
  }
  .top{
    font-size:12px;
    color:#fff;
    background: #80BD01;
    width:32px;
    height: 18px;
    line-height: 18px;
    border-radius: 3px;
    font-size:12px;
    display: inline-block;
  }
  .answer{
    font-size:12px;
    color:#999;
    background: #E5E5E5;
    width:32px;
    height: 18px;
    line-height: 18px;
    border-radius: 3px;
    font-size:12px;
    display: inline-block;
  }
  .header{
    padding: 10px 10px;
    border-bottom: 1px solid #f0f0f0;
  }
  .top-title{
    text-align: left;
    font-size: 22px;
    margin: 10px 10px;
    font-weight: bold;
  }
  .top-info{
    text-align: left;
    margin: 10px 10px;
    font-size: 12px;
    color: #838383;
  }
  .content-text{
    text-align: left;
    margin: 15px 10px;
    line-height: 25px;
    overflow: hidden;
    background: #fff;
    min-height: 100px;
  }
  .division{
    width:100%;
    height: 20px;
    background: #E1E1E1;
  }
  .detail-side{
    width: 24%;
  }
  .detail-side .author-info{
    width: 100%;
    background: #fff;
    border-radius: 3px;
    text-align: left;
  }
  .detail-side .name{
    width: 100%;
    line-height:40px;
    color: #444;
    font-size:13px;
    text-align: left;
    background: #F6F6F6;
    padding-left:10px;
    box-sizing: border-box;
  }
  .comment{
    width: 75%;
    background: #fff;
    border-radius: 2px;
    text-align: left;
  }
  .com-item {
    padding: 10px;
    border-top: 1px solid #f0f0f0;
    font-size: 12px;
    color: #666
  }
  .com-item img{
    width: 30px;
    height: 30px;
    vertical-align: -15px;
    margin-right: 10px;
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
  .nobody .top{
    width: 100%;
    color: #444;
    font-size:13px;
    text-align: left;
    background: #F6F6F6;
    padding-left: 15px;
    box-sizing: border-box;
    line-height:40px;
    height:40px;
  }
  .other-topics{
    margin-top:15px;
    background: #fff;
    height: 100px;
  }
  .other-topics .top{
    width: 100%;
    color: #444;
    font-size:13px;
    text-align: left;
    background: #F6F6F6;
    padding-left: 15px;
    box-sizing: border-box;
    line-height:40px;
    height:40px;
  }
</style>