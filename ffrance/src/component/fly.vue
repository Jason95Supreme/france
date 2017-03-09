<template>
  <div class="page">
    <div>This page will take you fly in the sky</div>
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
  text-transform: uppercase;
  background: url(../img/fly.jpg) no-repeat;
  background-size: 100% 100%;
}

</style>
