<template>
<div class="header">
  <div class="left">
    <img src="/static/res/rate.png">
    <div>给好评</div>
  </div>
  <div class="logo">
    <img src="/static/res/logo_home.png" />
  </div>
  <div class="right">
    <img src="/static/res/help.png"/>
  </div>
</div>
</template>

<script>
  export default {
    name: 'Index',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App1'
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        this.$ajax({
          url: '/api/clue/customer/get/1',
          type: 'get',
          data: '',
          success: data => {
            if (data.data.code === 0) {
              console.info(data)
            }
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .header>.left>img{
    position: relative;
    float:left;
    top:10px;
    left: 10px;
    height: 40px;
  }
  /*.header>.left>div{*/
    /*position: relative;*/
    /*float:left;*/
    /*top:55px;*/
    /*width: 30px;*/
    /*color: #fff;*/
  /*}*/

  .header>.logo>img{
    /*position: absolute;*/
    width: 200px;
    margin: 0 auto;
    margin-top: 30px
  }


  .header>.right>img{
    position: relative;
    float:right;
    top:10px;
    right: 10px;
    height: 40px;
  }
  .header>.right>div{
    position: absolute;
    top:55px;
    right: 5px;
    width: 30px;
    color: #fff;
  }

</style>
