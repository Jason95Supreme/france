<template>
<!--   <div class="page"> -->
    <div class="weui-tabbar">
      <router-link to='/home' class="weui-tabbar__item weui-tabbar__item_on">
        <i class="ivu-icon  weui-tabbar__icon" :class="[chatbubble,'ivu-icon-ios-chatbubble']"></i>
        <p class="weui-tabbar__label">微信</p>
      </router-link>
      </router-link>
      <router-link to='/contact' class="weui-tabbar__item weui-tabbar__item_on">
        <i class="ivu-icon  weui-tabbar__icon" :class="[people,'ivu-icon-ios-people']"></i>
        <p class="weui-tabbar__label">通讯录</p>
      </router-link>
      <router-link to='/airplane' class="weui-tabbar__item weui-tabbar__item_on">
        <i class="ivu-icon weui-tabbar__icon" :class="[paperplane,'ivu-icon-ios-paperplane']"></i>
        <p class="weui-tabbar__label">发现</p>
      </router-link>
      <router-link to='/me' class="weui-tabbar__item weui-tabbar__item_on">
        <i class="ivu-icon weui-tabbar__icon" :class="[person,'ivu-icon-ios-person']"></i>
        <p class="weui-tabbar__label">我</p>
      </router-link>
    </div>
<!--   </div>
 -->
</template>

<script>
export default {
  props:{
    chatbubble:String,
    people:String,
    paperplane:String,
    person:String,
  },

  data () {
    return {
      'ivu-icon-ios-chatbubble':true,
      'ivu-icon-ios-people-outline':true,
      'ivu-icon-ios-paperplane-outline':true,
      'ivu-icon-ios-person-outline':true,
      }
  },
  computed:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>

.weui-tabbar
  position fixed
</style>
