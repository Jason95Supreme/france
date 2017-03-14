<template>
  <div class="page">
    <router-link to='/m'>点我返回</router-link>
    <p>那就看见客人</p>
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
    vm.$store.dispatch('setDisplay',false)
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
  background-color: #fff;
  max-width: 768px;
  left: 0;
  right: 0;
  margin: 0 auto;
}

</style>
