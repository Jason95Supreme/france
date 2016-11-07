<template>
<!--   <div class="page"> -->
     <div class="navbar">
<!--       <router-link to='/login' class="fa fa-bars"></router-link> -->
      <span class="weui-pull-left">微信</span>
      <i class="weui-icon-search"></i>
      <i class="ivu-icon ivu-icon-plus-round"></i>
    </div>
<!--   </div> -->
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
/*.page
  position abusolute*/

.navbar
  max-width 768px
  width 100%
  height 45px
  background-color #000
  top 0
  position fixed
  left 0
  right 0
  margin 0 auto
  z-index 1

.weui-pull-left
  color #fff
  line-height 45px
  padding-left 15px
  font-size 20px
  font-family '微软雅黑'

.weui-icon-search
  color #fff
  font-size 20px
  position absolute
  right 80px
  padding 13px

.ivu-icon-plus-round
  display inline-block
  font-family Ionicons
  font-size 25px
  color #fff
  padding 10px 18px
  position absolute
  right 15px
</style>
