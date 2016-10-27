<template>
  <div class="page">
     <div class="navbar">
<!--       <router-link to='/login' class="fa fa-bars"></router-link> -->
      <span class="weui-pull-left">微信</span>
    </div>
  </div>
</template>

<script>

export default {

  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
.page
  position abusolute

.navbar
  max-width 768px
  width 100%
  height 45px
  background-color #000
  top 0
  position fixed

.weui-pull-left
  color #fff
</style>
