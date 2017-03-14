<template>
  <div class="weui-tabbar">
    <router-link to='/home' class="weui-tabbar__item" :class="Icon">
      <a class="weui-tabbar__item" @click="home">
          <i class="weui-tabbar__icon fa fa-university"></i>
          <p class="weui-tabbar__label hom">Paysage</p>
      </a>
    </router-link>
    <router-link to='/how' class="weui-tabbar__item" :class="Icon">
      <a class="weui-tabbar__item" @click="how">
         <i class="weui-tabbar__icon fa fa-quora"></i>
          <p class="weui-tabbar__label ho">Culture</p>
      </a>
    </router-link>
    <router-link to='/fy' class="weui-tabbar__item" :class="Icon">
      <a class="weui-tabbar__item" @click="fly">
          <i class="weui-tabbar__icon fa fa-paper-plane-o"></i>
          <p class="weui-tabbar__label f">Art</p>
      </a>
    </router-link>
    <router-link to='/m' class="weui-tabbar__item" :class="Icon">
      <a class="weui-tabbar__item" @click="me">
            <i class="weui-tabbar__icon fa fa-gg"></i>
            <p class="weui-tabbar__label m">La vie</p>
      </a>
    </router-link>
  </div>
</template>

<script>

export default {
  components:{

  },
  data () {
    return {

    }
  },
  computed:{
    Icon(){
      return this.$store.getters.getIcon

    }
  },
  methods:{
    home(){
      this.$store.dispatch('setIcon','home')
    },
    how(){
      this.$store.dispatch('setIcon','how')
    },
    fly(){
      this.$store.dispatch('setIcon','fly')
    },
    me(){
      this.$store.dispatch('setIcon','me')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
.weui-tabbar{
  background-color: transparent;
  max-width: 768px;
  left: 50%;
  transform: translateX(-50%);
}
.weui-tabbar__label,.fa{
  color: #11BFAE;
}
.weui-tabbar__item{
  padding: 9px 0 0;
  margin-top: -7px;
}
.home{
  .hom{
    color: orange;
  }
  .fa-university{
    color: orange;
  }
}
.how{
  .ho{
    color: orange;
  }
  .fa-quora{
    color: orange;
  }
}
.fly{
  .f{
    color: orange;
  }
  .fa-paper-plane-o{
    color: orange;
  }
}
.me{
  .m{
    color: orange;
  }
  .fa-gg{
    color: orange;
  }
}


</style>
