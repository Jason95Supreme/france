<template>
  <div class="page">

    <div class="weui-content">

      <section class="sign">
        <p>Sign Up</p>
      </section>

      <div class="weui-cell">
        <div class="weui-cell_hd">
          <label class="weui-label">Username：</label>
        </div>
        <div class="weui-cell_bd">
          <input type="text" name="user" class="weui-input">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell_hd">
          <label class="weui-label">Password：</i></label>
        </div>
        <div class="weui-cell_bd">
          <input type="password" name="password" class="weui-input">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell_hd">
          <label class="weui-label">Confirm:</i></label>
        </div>
        <div class="weui-cell_bd">
          <input type="password" name="password" class="weui-input">
        </div>
      </div>
    </div>

    <div class="button-sp-area">
        <router-link to='/login' class="weui-btn weui-btn_plain-default">Sign Up</router-link>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
.page
  max-width 768px
  width 100%
  height 100%
  position fixed
  left 0
  right 0
  margin 0 auto
  overflow auto

.weui-content
  font-family '微软雅黑'

.sign p
  text-align center
  color #ffebcd
  font-size 4em
  margin 50px auto

.weui-cell_hd
  width 35%

.weui-cell_bd
  width 65%

.weui-cell:before
  display none

.weui-cell:after
  content: " ";
  position: absolute;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #d9d9d9;
  color: #d9d9d9;
  left: 15px;

.button-sp-area
  margin 50px auto

.weui-btn
  width 90%
  border 1px solid #ffebcd
  border-radius 24px
</style>
