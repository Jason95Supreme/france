<template>
  <div class="page">
    <detail></detail>
      <div class="weui-content">
        <div class="weui-cells">
        <a class="weui-cell weui-cell_access" href='javascript:;'>
          <div class="weui-cell__hd"></div>
          <div class="weui-cell__bd"><p>朋友圈</p></div>
          <div class="weui-cell__ft"></div>
        </a>
      </div>

    <section>
      <div class="weui-cells">
        <a class="weui-cell weui-cell_access" href='javascript:;'>
          <div class="weui-cell__hd"></div>
          <div class="weui-cell__bd"><p>扫一扫</p></div>
        </a>
        <a class="weui-cell weui-cell_access" href='javascript:;'>
          <div class="weui-cell__hd"></div>
          <div class="weui-cell__bd"><p>摇一摇</p></div>
        </a>
     </div>
      <div class="weui-cells">
        <a class="weui-cell weui-cell_access" href='javascript:;'>
          <div class="weui-cell__hd"></div>
          <div class="weui-cell__bd"><p>附近的人</p></div>
        </a>
        <a class="weui-cell weui-cell_access" href='javascript:;'>
          <div class="weui-cell__hd"></div>
          <div class="weui-cell__bd"><p>漂流瓶</p></div>
        </a>
      </div>
      <div class="weui-cells">
        <a class="weui-cell weui-cell_access" href='javascript:;'>
          <div class="weui-cell__hd"></div>
          <div class="weui-cell__bd"><p>购物</p></div>
        </a>
        <a class="weui-cell weui-cell_access" href='javascript:;'>
          <div class="weui-cell__hd"></div>
          <div class="weui-cell__bd"><p>游戏</p></div>
        </a>
      </div>
    </section>
      </div>


    <tabbar chatbubble='ivu-icon-ios-chatbubble-outline' people='ivu-icon-ios-people-outline' person='ivu-icon-ios-person-outline'></tabbar>
  </div>

</template>

<script>
import detail from '../component/detail.vue'
import tabbar from '../component/tabbar.vue'

export default {
  components:{
    detail,tabbar
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>

.page
  max-width 768px
  left 0
  right 0
  margin 0 auto
  width 100%
  height 100%
  overflow auto
  background-color #f7f7fa
.weui-content
  z-index -1
.weui-cells
  margin-top 55px

.weui-cells:before,
.weui-cells:after
  display none

section .weui-cells
  margin-top 15px

.weui-cell
  height 60px

.weui-cell_access:hover
  color #525558

.weui-cell__hd
  background-image url(../img/ss.jpg)
  background-size 100% 100%
  width 45px
  height 45px
  margin-right 15px
</style>
