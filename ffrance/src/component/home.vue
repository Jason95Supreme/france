<template>
  <div class="page">
    <navbar></navbar>
    <div class="title">

    </div>
    <tabbar></tabbar>

  </div>
</template>

<script>

export default {
  components:{

  },
  data () {
    return {

    }
  },
  mounted(){
    const vm = this
    vm.$store.dispatch('setDisplay',true)
    vm.$store.dispatch('setIcon','home')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
.page{
  width: 100%;
  height: 100%;
  position: fixed;
  color: #000;
  background: url(../img/home.jpg) no-repeat;
  background-size: 100% 100%;
  max-width: 768px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.title{
  text-align: center;
  padding: 20px 0
}

</style>
