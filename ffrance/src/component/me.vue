<template>
  <div class="page">
    <div class="content">
      <div class="weui-cells">
        <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__bd">
                <p>cell standard</p>
            </div>
            <div class="weui-cell__ft">
            </div>
        </a>
        <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__bd">
                <p>cell standard</p>
            </div>
            <div class="weui-cell__ft">
            </div>
        </a>
      </div>
      <div class="weui-cells">
        <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__bd">
                <p>cell standard</p>
            </div>
            <div class="weui-cell__ft">
            </div>
        </a>
        <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__bd">
                <router-link to='/login' class="out">退出登录</router-link>
            </div>
            <div class="weui-cell__ft">
            </div>
        </a>
      </div>

    </div>
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
  mounted(){
    const vm = this
    vm.$store.dispatch('setDisplay',true)
    vm.$store.dispatch('setIcon','me')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
.page{
  width: 100%;
  height: 100%;
  position: fixed;
  color: #000;
  background: url(../img/me.jpg) no-repeat;
  background-size: 100% 100%;
  background-position: -50% 0;
  max-width: 768px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.content{
  position: absolute;
  bottom: 57px;
  width: 100%;
  height: 50%;
  background-color: transparent;
}
.weui-cells{
  background-color: transparent;
}
.weui-cells:after, .weui-cells:before{
  display: none;
}
.weui-cell:before{
  border-top: 2px solid #d9d9d9;
  left: 0;
}
.weui-cell_access{
  background-color: rgba(0,0,0,.15);
}
.out{
  color: red;
}
</style>
