<template>
  <div>
    <div class="list-content" v-for="(item, index) in data_arr" :key="item.id" >
      <div class="list-item"  @click="toDetail(item.id)" v-if="index >= (current_page-1)*numbers
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
        <div>{{item.title}}</div>
        <div>{{diff_date}}</div>
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
          console.log(this.data_arr)
        })
      },
      toDetail(id){
        alert("跳转到详情页");
        //路由传递参数，把id传过去
        this.$router.push({path:'/detail',query:{id:id}});
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
  .content{
    display: flex;
    align-items: center;
  }
  .list-content{
  }
  .list-item{
    height: 50px;
    box-sizing: border-box;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
    color:#000;
    overflow: hidden;
    text-overflow: ellipsis;
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
  .block{
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>