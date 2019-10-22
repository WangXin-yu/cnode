<template>
  <div>

  </div>
</template>

<script>
  export default {
    name: "About",
    components: {},
    props: {},
    data() {
      return {
        data:[],
        val:0,
      }
    },
    methods: {
      getData(){
        this.$axios.req('api/topics').then(res=>{
          this.data = res.data;
        }).catch(err=>{
          console.log(err);
        })
      }
    },
    mounted() {
      this.getData();
      console.log(this.data);
    },
    created() {

    },
    filters: {},
    computed: {},
    watch: {},
    directives: {},
  }
</script>

<style scoped lang="scss">

</style>