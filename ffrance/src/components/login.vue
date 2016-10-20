<template>
  <div class="page">
    <div class="weui-content">

    <div class="mask"></div>

      <section class="france">
        <p><em>Français</em></p>
      </section>

      <div class="weui-cell">
        <div class="weui-cell_hd">
          <label class="weui-label"><i class="fa fa-user-secret"></i></label>
        </div>
        <div class="weui-cell_bd">
          <input type="text" name="user" class="weui-input" placeholder='username'>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell_hd">
          <label class="weui-label"><i class="fa fa-key"></i></label>
        </div>
        <div class="weui-cell_bd">
          <input type="password" name="password" class="weui-input" placeholder='password'>
        </div>
      </div>

      <div class="button-sp-area">
        <a href="javascript" class="weui-btn weui-btn_plain-default">Login</a>
        <router-link to='/signup' class="weui-btn weui-btn_plain-primary">Sign Up</router-link>
      </div>

      <router-link to='/forget' class="forget">Forget?</router-link></a>

      <div class="relation">
        <p>第三方账号登录</p>
        <a href="http://web2.qq.com/"><i class="fa fa-qq"></i></a>
        <a href="https://login.sina.com.cn"><i class="fa fa-weibo"></i></a>
        <a href="https://wx.qq.com/"><i class="fa fa-weixin"></i></a>
      </div>
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


.weui-content
  background-image url(../img/france.jpg)
  background-size 100% 100%
  position fixed
  max-width 768px
  left 0
  right 0
  margin 0 auto
  width 100%
  height 100%
  font-size 20px
  overflow auto

.mask
  left 0
  right 0
  margin 0 auto
  max-width 768px
  width 100%
  height 100%
  position fixed
  background-color #000
  opacity .5
  z-index -1

.france p
  font-size 3em
  color #ffebcd
  font-family '黑体'
  text-align center
  margin-top 10%
  margin-bottom 5%

.weui-cell:before
  display none

.weui-cell
  border-bottom 1px solid #fff
  color #fff
  height 30px
  margin-bottom 3%
.weui-cell_hd i
  font-size 1.1em
  color #ffebcd

.weui-cell_hd
  width 20%

.weui-cell_bd
  width 80%

.button-sp-area
  margin-top 15%

.weui-btn
  width 90%

.weui-btn_plain-default
  color #ccc
  border 1px solid #ccc
  margin-bottom 5%

.weui-btn_plain-primary
  color #ffebcd
  border 1px solid #ffebcd
  margin-bottom 5%

.forget
  color #fff
  margin-left 5%
  font-size .8em
  font-family '微软雅黑'

.relation
  margin 50px auto 20px
  text-align center

.relation p
  color #ffebcd
  font-family '微软雅黑'
  font-size 16px
  margin-bottom 10px

.relation i
  color #fff
  font-size 25px
  margin 0 30px

</style>
