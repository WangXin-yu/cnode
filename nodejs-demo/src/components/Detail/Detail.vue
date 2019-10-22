<template>
  <div>

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
        data_arr:[],

      }
    },
    methods: {
      getArray(){
        this.$axios.req('api/topic/'+this.$route.query.id).then(res=>{
          this.data_arr = res.data;
          console.log(this.data_arr);
        })
      },
    },
    mounted() {
      console.log(this.$route.query.id);
      this.getArray();
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

</style>