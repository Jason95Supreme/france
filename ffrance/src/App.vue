<template>
  <div id="app">
    <transition :name="isAnimate">
      <router-view></router-view>
    </transition>
  <tabbar v-if="isDisplay"></tabbar>
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
  watch: {
  '$route' (to, from) {
    const vm = this
    const toDepth = to.path.split('/')[1].length
    const fromDepth = from.path.split('/')[1].length
    let transitionName = toDepth < fromDepth ? 'bounce' : 'vbounce'
    vm.$store.dispatch('setAnimate',transitionName)
    }
  },
  // mounted(){
  //   const vm = this
  //   vm.$store.dispatch('setAnimate',bounce)
  // }
}
</script>

<style lang='stylus'>
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

</style>
