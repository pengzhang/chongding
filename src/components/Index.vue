<template>
  <div class="flex-wrap">
    <div class="top-help">
      <div class="cell-2 pull-left help-left">
        <img src="/static/res/rate.png">
        <span>给好评</span>
      </div>

      <div class="cell-2 pull-right help-right">
        <img src="/static/res/help.png"/>
        <span>玩法了解</span>
      </div>
    </div>
    <div class="logo">
      <img src="/static/res/logo_home.png"/>
    </div>
    <div class="time">
      <div class="text-center">下期开始时间</div>
      <div class="text-center tm">
        <h3>
          <span>今天 17:00</span> | <span>¥ 100000 奖金</span>
        </h3>
      </div>
    </div>
    <div class="user-profile">
      <div class="menu pull-right">
        <img src="/static/res/menu.png">
      </div>
      <div class="avatar">
        <img src="/static/res/people_number.png">
      </div>
      <div class="hr-top">
        <hr>
      </div>
      <div class="row">
        <div class="money">
          <div class="text-center">账户余额</div>
          <h1>¥ 0</h1>
        </div>
        <div class="week-rank">
          <div class="text-center">周排名</div>
          <h1>-</h1>
        </div>
      </div>
      <div class="hr-bottom">
        <hr>
      </div>
      <div class="user-bottom">
        <div class="health pull-left">
          额外生命值
        </div>
        <div class="heart pull-left">
          <img src="/static/res/heart.png">
          <span class="text-center">0</span>
        </div>
        <div class="more pull-right">
          获取更多
        </div>
      </div>
    </div>
    <div class="bottom-help">
      <div class="rank cell-2 pull-left">
        <a href="" class="clearfix text-center">排行榜</a>
      </div>
      <div class="invite cell-2 pull-right">
        <a href="" class="clearfix text-center">邀请好友</a>
      </div>
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
  .row{
    margin: 0;
  }
  .bottom-help{
    margin-top: 1.5rem;
  }
  .bottom-help .rank{
    background-color: #7a648f;
    width: 8rem;
    height: 2.3rem;
    border-radius: 3rem;
    color: #fff;
    margin-left: 1rem;
  }
  .bottom-help .invite{
    background-color: #7a648f;
    width: 8rem;
    height: 2.3rem;
    border-radius: 3rem;
    color: #fff;
    margin-right: 1rem;
  }

  .bottom-help a{
    width: 100%;
    margin: 0.6rem auto;
    font-size: 0.9rem;
  }
  .user-profile{
    background-color: #fff;
    border-radius: 1rem;
    width: 17rem;
    height: 17rem;
    margin: 1.5rem auto 0;
  }
  .user-profile .menu{
    margin-top: 0.9rem;
     margin-right: 1rem;
  }
  .user-profile .menu img{
    height: 1.1rem;
  }
  .user-profile .avatar{
    margin-top: 1.5rem;
    margin-left: 1.3rem;
  }
  .user-profile .hr-top{
    margin-top: 2rem;
  }
  .user-profile hr{
    margin: 0;
  }
  .user-profile .money{
    width: 50%;
    height: 8rem;
    border-right: 1px solid rgba(0,0,0,.1);
    padding-top: 1.5rem;
    font-size: 0.9rem;
    color: rgba(0,0,0,.2);

  }
  .user-profile .money h1{
    margin-top: 1.5rem;
    font-size: 2rem;
    color: rgba(0,0,0,.6);
  }
  .user-profile .week-rank{
    width: 50%;
    height: 8rem;
    padding-top: 1.5rem;
    font-size: 0.9rem;
    color: rgba(0,0,0,.2);
  }
  .user-profile .week-rank h1{
    margin-top: 1.5rem;
    font-size: 2rem;
    color: rgba(0,0,0,.6);
  }
  .user-bottom{
    margin-top: 1.2rem;
  }
  .user-bottom .health{
    font-size: 0.8rem;
    margin-left: 1.5rem;
    color: rgba(0,0,0,.2);
    width: 5rem;
  }
  .user-bottom .more{
    margin-top: -0.2rem;
    font-size: 0.9rem;
    margin-right: 1rem;
    color: rgba(0,0,0,.2);
    border: 2px solid  rgba(0,0,0,.1);
    border-radius: 1rem;
    height: 2rem;
    width: 5rem;
    padding-top: 0.3rem;
  }
  .user-bottom .heart{
    margin-top: -0.2rem;
    width: 4rem;
  }
  .user-bottom .heart img {
    height: 2rem;
    margin-left: -0.7rem;
  }
  .user-bottom .heart span{
    margin-left: -1.7rem;
    font-size: 1rem;
    color: #fff;
  }

  .time{
    color: #fff;
    margin-top: 4rem;
  }

  .time .tm{
    margin-top: 0.5rem;
  }

  .time h3{
    margin-top: 0.2rem;
    font-size: 1rem;
  }

  .time h3 span{
    margin: auto 0.7rem;
  }

  .logo{
    width: 10rem;
    height: 3rem;
    margin: 0 auto;
  }

  .logo img{
    height: 3.5rem;
    margin-top: 2rem;
  }

  .top-help img{
    height: 1.3rem;
  }

  .top-help span{
    top: 2.9rem;
    position: absolute;
    color: #fff;
    width: 2.5rem;
    font-size: 12px;
  }

  .help-left{
    margin-left: 1.2rem;
    margin-top: 1.2rem;
  }

  .help-left span{
    margin-left: -0.4rem;
  }

  .help-right{
    margin-right: 1.2rem;
    margin-top: 1.2rem;
  }

  .help-right span{
    margin-left: -0.6rem;
  }


</style>
