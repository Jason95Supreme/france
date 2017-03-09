<template>
  <div class="weui-tabbar">
      <router-link to='/home' class="weui-tabbar__item">
          <i class="weui-tabbar__icon fa fa-university"></i>
          <p class="weui-tabbar__label">Home</p>
      </router-link>
      <router-link to='/how' class="weui-tabbar__item">
         <i class="weui-tabbar__icon fa fa-quora"></i>
          <p class="weui-tabbar__label">How</p>
      </router-link>
      <router-link to='/fy' class="weui-tabbar__item">
          <i class="weui-tabbar__icon fa fa-paper-plane-o"></i>
          <p class="weui-tabbar__label">Fly</p>
      </router-link>
      <router-link to='/m' class="weui-tabbar__item">
          <i class="weui-tabbar__icon fa fa-gg"></i>
          <p class="weui-tabbar__label">Me</p>
      </router-link>
  </div>
</template>

<script>

export default {
  components:{

  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
.weui-tabbar{
  background-color: transparent;

}
.weui-tabbar__label{
  color: orange;
}
.fa{
  color: orange;
}
</style>
