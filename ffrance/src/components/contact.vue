<template>

  <div class="page">
    <detail></detail>
    <div class="weui-content">
      <div class="weui-cells">
        <a class="weui-cell weui-cell_access" href='javascript:;'>
          <div class="weui-cell__hd"></div>
          <div class="weui-cell__bd">
            <p>新的朋友</p>
          </div>
        </a>
      </div>
    </div>
    <tabbar chatbubble='ivu-icon-ios-chatbubble-outline' paperplane='ivu-icon-ios-paperplane-outline' person='ivu-icon-ios-person-outline'></tabbar>
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
/*  position fixed*/
  max-width 768px
  left 0
  right 0
  margin 0 auto
  width 100%
  height 100%
  overflow auto
  z-index -1
  background-color #f7f7fa

.weui-cells
  margin-top 45px

.weui-cells:before
  display none

.weui-cell
  height 60px

.weui-cell__hd
  background-image url(../img/ss.jpg)
  background-size 100% 100%
  width 45px
  height 45px
  margin-right 15px
</style>
