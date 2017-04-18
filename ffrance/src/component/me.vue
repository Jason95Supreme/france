<template>
  <div class="page">
    <div class="content">
      <div class="outer_box">
        <router-link to='/login' class="inner_box">
          <span>离开</span>
        </router-link>
        <div class="inner_box">
          <span>远方</span>
        </div>
      </div>
      <div class="outer_box">
        <div class="inner_box">
          <span>梦想</span>
        </div>
        <div class="inner_box">
          <span>回望</span>
        </div>
      </div>
      <router-link to='/m/mydetail' class="sign_up">

      </router-link>

    </div>
    <tabbar></tabbar>
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
  background: url(../img/m.jpg) no-repeat;
  background-size: 100% 100%;
  max-width: 768px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.content{
  position: absolute;
  top: 0;
  bottom: 55px;
  width: 100%;
}
.outer_box{
  display: table;
  width: 100%;
  height: 50%;
}
.inner_box{
  display: table-cell;
  width: 50%;
  height: 50%;
  text-align: center;
  vertical-align: middle;
  border: 3px solid #fff;
}
.inner_box span{
  font-size: 2rem;
  color: #F4E7D3;
  font-family: "微软雅黑";
}
.sign_up{
  width: 150px;
  height: 150px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  background: url(../img/tim.jpg) no-repeat;
  background-size: 100% 100%;
  border: 4px solid #fff;
}

.fa-sign-out{
  font-size: 5rem;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

</style>
