<template>
  <div class="page">
     <div class="navbar">
      <router-link to='/login' class="fa fa-bars"></router-link>
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
  background-color #ff3366
  top 0
  position fixed

.fa
  color #fff
  font-size 2.2em
  padding 5px 10px
</style>
