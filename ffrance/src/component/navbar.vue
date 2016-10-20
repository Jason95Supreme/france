<template>
  <div class="navbar">
    <router-link to='/login' class="fa fa-angle-double-left"></router-link>
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

.navbar
  width 100%
  height 50px
  background-color #ffebcd
  position fixed
  top 0

.fa
  color #fff
  font-size 3em
  padding 0 10px
</style>
