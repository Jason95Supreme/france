<template>
  <div class="page">
    <div class="weui-content">

    <div class="mask"></div>

      <section class="france">
        <p><em>Français</em></p>
      </section>

      <div class="weui-cell">
        <div class="weui-cell_hd">
          <label class="weui-label fa-user"></label>
        </div>
        <div class="weui-cell_bd">
          <input type="text" name="user" class="weui-input" placeholder='Username'>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell_hd">
          <label class="weui-label fa-key"></label>
        </div>
        <div class="weui-cell_bd">
          <input type="password" name="password" class="weui-input" placeholder='Password'>
        </div>
      </div>

      <div class="button-sp-area">
        <router-link to='/home' class="weui-btn weui-btn_plain-default">Login</router-link>
      </div>

      <div class="extra">
        <span>Don't have any account?</span>
        <router-link to='/signup' class="sign">Sign up</router-link>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  data(){
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
  font-size 4em
  color #fff
  font-family '黑体'
  text-align center
  margin-top 10%
  margin-bottom 30%

.weui-cell:before
  display none
.weui-cell:after
  content: " ";
  position: absolute;
  bottom: 0;
  right: 15px;
  height: 1px;
  border-bottom: 1px solid #ccc;
  left: 5px;

.weui-cell
  color #fff
  height 30px
  margin-bottom 3%
  margin-left 15px
  margin-right 15px
  padding 10px 5px

.weui-cell_hd i
  font-size 1.1em
  color #fff

.weui-cell_hd
  width 20%

.weui-cell_bd
  width 80%

.weui-input::-webkit-input-placeholder
  color #fff
  font-size .8em

.button-sp-area
  margin-top 20%

.weui-btn
  width 90%

.weui-btn_plain-default
  color #fff
  margin-bottom 5%
  border-radius 24px
  border none
  background-color #ff3366
  opacity .9

.extra
  text-align: center

.extra span
  color #ccc
  letter-spacing 0px
  font-size 13px
  font-family '黑体'

.sign
  color #fff
  font-family '黑体'

.fa-user
  background-image url(../img/username.png)
  background-size 100% 100%
  width 1.5em
  height 1.5em
  margin-left 5px

.fa-key
  background-image url(../img/password.png)
  background-size 100% 100%
  width 1.5em
  height 1.5em
  margin-left 5px
</style>
