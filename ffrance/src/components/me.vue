<template>
  <div class="page">
    <detail></detail>
    <div class="weui-content">
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
    </div>
    <tabbar chatbubble='ivu-icon-ios-chatbubble-outline' people='ivu-icon-ios-people-outline' paperplane='ivu-icon-ios-paperplane-outline'></tabbar>
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
  position absolute

.weui-content
  z-index -1


  background-color #f7f7fa

</style>
