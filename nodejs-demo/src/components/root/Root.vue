<template>
  <div>
    <Header></Header>
    <div class="content">
      <div class="warp">

        <div class="left">
          <router-view></router-view>
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
    width: 100%;
  }


</style>