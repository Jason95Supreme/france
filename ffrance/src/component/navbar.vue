<template>
  <div class="navbar">
    <p>Paysage</p>
  </div>

</template>

<script>

export default {
  components:{

  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
.navbar{
  max-width 768px
  width 100%
  height 50px
  position fixed
  top: 0;
  background-color: rgba(0,0,0,0.5);
}
.navbar p{
  color: #fff;
  text-align: center;
  font-size: 2rem;
}

</style>
