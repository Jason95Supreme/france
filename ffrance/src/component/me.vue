<template>
  <div class="page">
    <div class="content">
      <div class="outer_box">
        <router-link to='/m/mydetail' class="inner_box one">
          <span>家</span>
        </router-link>
        <div class="inner_box two">
          <span>远方</span>
        </div>
      </div>
      <div class="outer_box">
        <div class="inner_box thr">
          <span>梦想</span>
        </div>
        <div class="inner_box for">
          <span>回望</span>
        </div>
      </div>
      <router-link to='/login' class="sign_up">
        <i class="fa fa-sign-out"></i>
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
  background: url(../img/me.jpg) no-repeat;
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
  background-color: transparent;
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
  border: 1px solid transparent;
  background-color: rgba(0,0,0,0.1);
  text-align: center;
  vertical-align: middle;
}
.inner_box span{
  font-size: 3rem;
  color: #F4E7D3;
  font-family: "微软雅黑";
}
.one{
  border-bottom-right-radius: 200px;
}
.two{
  border-bottom-left-radius: 200px;
}
.thr{
  border-top-right-radius: 200px;
}
.for{
  border-top-left-radius: 200px;
}
.sign_up{
  width: 150px;
  height: 150px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  border-radius: 50%;
  background-color: transparent;

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
