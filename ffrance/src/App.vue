<template>
  <div id="app">
    <transition :name="isAnimate">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  computed:{
    isDisplay(){
      return this.$store.getters.getData
    },
    isAnimate(){
      return this.$store.getters.getAnimate
    }
  },
  //动画监听
  watch: {
  '$route' (to, from) {
    const vm = this
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    const fromLogin = from.path.split('/')[1]
    let transitionName
    //主页面换页无动画
    if(toDepth === fromDepth && fromLogin !== 'login'){
      transitionName = ''
      vm.$store.dispatch('setAnimate',transitionName)
    }
    //login页面进入动画
    else if(fromLogin === 'login'){
      vm.$store.dispatch('setAnimate','loginAnimate')
    }
    //主页面进入子页面动画
    else{
      transitionName = toDepth > fromDepth ? 'bounce' : 'vbounce'
      vm.$store.dispatch('setAnimate',transitionName)
    }
    }
  },

}
</script>

<style lang='stylus'>
#app{
  font-family: cursive;
}
.bounce-enter-active {
  animation: slideInRight .5s ease-out;
}
.bounce-leave-active {
  animation: slideOutLeft .5s ease-out;
}
.vbounce-enter-active {
  animation: slideInLeft .5s ease-out;
}
.vbounce-leave-active {
  animation: slideOutRight .5s ease-out;
}
.loginAnimate-enter-active {
  animation: rotateInDownRight .5s ease-out;
}
.loginAnimate-leave-active {
  animation: rotateOutUpLeft .5s ease-out;
}


</style>
