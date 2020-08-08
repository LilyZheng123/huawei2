<template>
  <div class="outer" @scroll="fix">
      <div class="fix-right" v-if="fixRight">
        <img src="../../img/me/button-top.png" alt="">
      </div>

      <div class="top">
          <div class="fix" ref="fix" :style="fixStyle">
              <div class="fixLeft" v-if="fixLeft">
                <img src="../../img/me/defaultface_user_after.png" alt="">
                登录/注册
              </div>
              <div class="fix-inner">
              <div class="iconfont setting">&#xe705;</div>
              <div class="iconfont chat">&#xe653;</div>
              </div>
          </div>
          <div class="red-one">
              
          </div>
          <router-link class="login" to="/login">
            <img src="../../img/me/defaultface_user_after.png" alt="">
            <p class="login-p">登录/注册</p>
            <div class="qiandao">
                <img src="../../img/me/日历.png" alt="">
                <p>签到领积分</p>
            </div>    
          </router-link>
          
          <div class="jifen">
              <ul class="jifen-ul">
                  <li class="jifen-li"><a href="" class="jifen-a">
                      <p class="jifen-number">-</p>
                      <p class="jifen-name">积分</p>
                      </a></li>
                  <li class="jifen-li"><a href="" class="jifen-a">
                      <p class="jifen-number">-</p>
                      <p class="jifen-name">优惠券</p>
                      </a></li>
                  <li class="jifen-li" style="border-right:none"><a href="" class="jifen-a">
                      <p class="jifen-number">-</p>
                      <p class="jifen-name">代金券</p>
                      </a></li>
              </ul>
              </div>
      </div>
      <div class="my-order">
          <div class="my-order-top">
              <p class="left">我的订单</p>
              <div class="right">
                  <p>全部订单</p>
                  <div class="iconfont right">&#xe668;</div>
              </div>
          </div>
          <div class="my-order-icon">
            <ul class="order-icon-ul">
              <li class="order-icon-li"><a href="" class="order-icon-a">
                <!-- <img src="../../img/me/data_image_png;base….png" alt=""> -->
                <div class="order-icon-div"></div>
                <p>待付款</p>
                </a></li>
              <li class="order-icon-li"><a href="" class="order-icon-a">
                <div class="order-icon-div two"></div>
                <p>待收货</p></a></li>
              <li class="order-icon-li"><a href="" class="order-icon-a">
                <div class="order-icon-div three"></div>
                <p>待评价</p></a></li>
              <li class="order-icon-li"><a href="" class="order-icon-a">
                <div class="order-icon-div four"></div>
                <p>退换/退款</p></a></li>
              <li class="order-icon-li"><a href="" class="order-icon-a">
                <div class="order-icon-div five"></div>
                <p>回收单</p></a></li>
            </ul>
          </div>
          <div class="my-order-swiper">
            <template>
              <swiper ref="mySwiper" :options="swiperOptions">
                <swiper-slide>
                  <img src="../../img/me/52960608369510606925.jpg" alt="">
                </swiper-slide>
                <swiper-slide>
                  <img src="../../img/me/90751608369510615709.jpg" alt="">
                </swiper-slide>
                
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
           </template>
          </div>
      </div>

      <div class="vip">
        <div class="vip-top">
          <div class="my-order-top vip-t">
              <p class="left">会员专享</p>
              <div class="right vip-r">
                  <p>更多会员权益</p>
                  <div class="iconfont right">&#xe668;</div>
              </div>
          </div>
        </div>

        <div class="coupon">
          <ul class="coupon-ul">
            <li class="coupon-li">
              <div class="coupon-left">
                <p class="coupon-price"><small style="font-size:18px">￥</small>200</p>
                <p class="coupon-title">华为品牌 200元优惠券</p>
              </div>
              <a class="coupon-right">
                <p>领取</p>
              </a>
            </li>
            <li class="coupon-li">
              <div class="coupon-left">
                <p class="coupon-price"><small style="font-size:18px">￥</small>20</p>
                <p class="coupon-title">[华为商城]荣耀Play4T系列 20元...</p>
              </div>
              <a class="coupon-right">
                <p>领取</p>
              </a>
            </li>
            <li class="coupon-li">
              <div class="coupon-left">
                <p class="coupon-price"><small style="font-size:18px">￥</small>10</p>
                <p class="coupon-title">[礼券]荣耀手机10元优惠券</p>
              </div>
              <a class="coupon-right">
                <p>领取</p>
              </a>
            </li>
            <li class="coupon-li sold">
              <div class="thumb"></div>
              <div class="coupon-left">
                <p class="coupon-price"><small style="font-size:18px">￥</small>100</p>
                <p class="coupon-title">华为品牌 100元优惠券</p>
              </div>
              <a class="coupon-right sold">
                <p>领取</p>
              </a>
            </li>
          </ul>
        </div>
      </div>


      <div class="my-vmall">
        <div class="vip-top">
          <div class="my-order-top vip-t">
              <p class="left">我的VMALL</p>
              
          </div>
        </div>
          <ul class="vmall-top-ul">
            <li class="vmall-top-li"><a href="" class="vmall-top-a">
              <img src="../../img/me/3NgsqeFkJSdbC5EaZt8k.png" alt="">
                <!-- <div class="order-icon-div"></div> -->
                <p>会员频道</p>
              </a></li>
            <li class="vmall-top-li"><a href="" class="vmall-top-a">
              <img src="../../img/me/05247974469517974250.png" alt="">
                <!-- <div class="order-icon-div"></div> -->
                <p>邀请有礼</p>
              </a></li>
            <li class="vmall-top-li"><a href="" class="vmall-top-a">
              <img src="../../img/me/90941786349518714909.png" alt="">
                <!-- <div class="order-icon-div"></div> -->
                <p>教育优惠</p>
              </a></li>
            <li class="vmall-top-li"><a href="" class="vmall-top-a">
              <img src="../../img/me/0FHCWcjJLxXDvHYzrHcE.png" alt="">
                <!-- <div class="order-icon-div"></div> -->
                <p>优购码</p>
              </a></li>
          </ul>

          <ul class="vmall-bottom-ul">
            <li class="vmall-top-li"><a href="" class="vmall-top-a">
              <img src="../../img/me/aXHSj2n7eZ3Zwr4sdXTm.png" alt="">
                <!-- <div class="order-icon-div"></div> -->
                <p>我的拼团</p>
              </a></li>
            <li class="vmall-top-li"><a href="" class="vmall-top-a">
              <img src="../../img/me/9wVcOCYjKQ5oKQ5ujcFN.png" alt="">
                <!-- <div class="order-icon-div"></div> -->
                <p>收货地址</p>
              </a></li>
            <li class="vmall-top-li"><a href="" class="vmall-top-a">
              <img src="../../img/me/pKum8NDxC8g3guJhIaEN.png" alt="">
                <!-- <div class="order-icon-div"></div> -->
                <p>预约记录</p>
              </a></li>
            <li class="vmall-top-li"><a href="" class="vmall-top-a">
              <img src="../../img/me/zuLd2CorbQ6Vo2zeyBOV.png" alt="">
                <!-- <div class="order-icon-div"></div> -->
                <p>企业购</p>
              </a></li>
          </ul>
      </div>

      <div class="my-vmall">
        <div class="vip-top">
          <div class="my-order-top vip-t">
              <p class="left">我的服务</p>
              <div class="right service-r">
                  <p>联系客服</p>
                  <div class="iconfont right">&#xe668;</div>
              </div>
          </div>
        </div>
          <ul class="vmall-top-ul">
            <li class="vmall-top-li"><a href="" class="vmall-top-a">
              <img src="../../img/me/3CqWFKmzSVTG5WYvrNx8.png" alt="">
                <!-- <div class="order-icon-div"></div> -->
                <p>自助服务</p>
              </a></li>
            <li class="vmall-top-li"><a href="" class="vmall-top-a">
              <img src="../../img/me/gvy89qnAExuDJDjdaWgP.png" alt="">
                <!-- <div class="order-icon-div"></div> -->
                <p>特色服务</p>
              </a></li>
            <li class="vmall-top-li"><a href="" class="vmall-top-a">
              <img src="../../img/me/rPbRWRHAWMAVCovRBehZ.png" alt="">
                <!-- <div class="order-icon-div"></div> -->
                <p>零售店</p>
              </a></li>
            <li class="vmall-top-li"><a href="" class="vmall-top-a">
              <img src="../../img/me/MOV599G1zaOvU7sM3tMd.png" alt="">
                <!-- <div class="order-icon-div"></div> -->
                <p>实名认证</p>
              </a></li>
          </ul>

          <ul class="vmall-bottom-ul">
            <li class="vmall-top-li"><a href="" class="vmall-top-a">
              <img src="../../img/me/BcFUNcxBeM9fewTc16QC.png" alt="">
                <!-- <div class="order-icon-div"></div> -->
                <p>以旧换新</p>
              </a></li>
            <li class="vmall-top-li"><a href="" class="vmall-top-a">
              <img src="../../img/me/v7aUv4jiCp2BhZmmVXWn.png" alt="">
                <!-- <div class="order-icon-div"></div> -->
                <p>补够保障</p>
              </a></li>
            <li class="vmall-top-li"><a href="" class="vmall-top-a">
              <img src="../../img/me/bGbPRdKxBeiVPe50g3EG.png" alt="">
                <!-- <div class="order-icon-div"></div> -->
                <p>一口价换电池</p>
              </a></li>
            <li class="vmall-top-li"><a href="" class="vmall-top-a">
              <img src="../../img/me/5j2OERFj8ut1nB6WBZcy.png" alt="">
                <!-- <div class="order-icon-div"></div> -->
                <p>常见问题</p>
              </a></li>
          </ul>
      </div>

      <div class="vip">
              <div class="vip-top">
                <div class="my-order-top vip-t">
                    <p class="left">华为生活</p>
                    
                </div>
              </div>

              <div class="coupon">
                <ul class="coupon-ul life">
                  <li class="coupon-li life">
                    <img src="../../img/me/vbWjbV8qDpMZAEfVG6Rr.png">
                  </li>
                  <li class="coupon-li life">
                    <img src="../../img/me/SsPo08I0eVbYcxkbU6tP.png">
                  </li>
                  <li class="coupon-li life">
                    <img src="../../img/me/P4QEfc9ja3ryXeUhWskN.png">
                  </li>
                  
                </ul>
              </div>
      </div>

      <p class="no-reason">为您推荐</p>

      <div class="ad">
        <ul class="ad-ul">
        <li class="ad-li" style="border-bottom:1px solid rgb(238, 236, 236);"><img src="../../img/me/26086721459512768062.jpg"></li>
        <li class="ad-li"><img src="../../img/me/23356952469515965332.jpg" alt=""></li>
        </ul>
      </div>

      <div class="end">
        <div class="end-top">
          <ul class="end-top-ul">
            <li class="end-top-li"><a href="" class="end-top-a">登录</a></li>
            <li class="end-top-li"  style="border-right:none"><a href="" class="end-top-a">反馈</a></li>
          </ul>
        </div>

        <div class="end-icon">
          <ul class="end-icon-ul">
            <li class="end-icon-li"><a href="" class="end-icon-a">
              <img src="../../img/me/xiazai.png" alt="">
                <!-- <div class="order-icon-div"></div> -->
                <p style="color:rgb(155,155,155)">客户端</p>
              </a></li>
            <li class="end-icon-li"><a href="" class="end-icon-a">
              <img src="../../img/me/xiazai2.png" alt="">
                <!-- <div class="order-icon-div"></div> -->
                <p>触屏版</p>
              </a></li>
            <li class="end-icon-li"><a href="" class="end-icon-a">
              <img src="../../img/me/xiazai3.png" alt="">
                <!-- <div class="order-icon-div"></div> -->
                <p style="color:rgb(155,155,155)">电脑版</p>
              </a></li>
          </ul>
        </div>

        <div class="end-client">
          <ul class="end-client-ul">
            <li class="end-client-li"><a href="" class="end-client-a">
              隐私政策</a></li>
            <li class="end-client-li"><a href="" class="end-client-a">
              用户协议</a></li>
            <li class="end-client-li" style="border-right:none"><a href="" class="end-client-a">
              关于Cookie</a></li>
          </ul>
        </div>

        <div class="end-text">
          <p>Copyright2012- VMALL.COM版权所有营业执照 备案主体编号：44201919072182 粤ICP备
            19015064号 粤公网安备 44190002003939号 增值电信业务经营许可证:粤B2-20190762
          </p>
        </div>

        </div>
      </div>
  
</template>



<script>
export default {
  created(){
    console.log(this.$root.$el.clientWidth*0.95)
  },
  
  data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
            clickable:true
          },
          autoplay:{
            delay:3000,
            disableOnInteraction:false
          },
          loop:true,
          
          width:this.$root.$el.clientWidth*0.92
          // Some Swiper option/callback...
        },
        fixLeft:false,
        fixStyle:{          
        },
        fixRight:false
      }
    },
    methods:{
      fix()
      {
        // console.log(event.target.scrollTop);
        console.log(event)
        let scrollDistance = event.target.scrollTop;
        let documentHeight = event.target.scrollHeight;

        let screenHeight = event.target.offsetHeight;

        let leftHeight = 0.3*documentHeight;

        if (documentHeight-scrollDistance-screenHeight <= leftHeight)
        {
          this.fixRight=true;
        }
        if (documentHeight-scrollDistance-screenHeight > leftHeight)
        {
          this.fixRight=false;
        }
        if (event.target.scrollTop>0)
        {
            this.fixLeft = true;
            this.fixStyle = {
            backgroundImage:"linear-gradient(to right, rgb(220,29,44) 5% , rgb(235, 69, 56)   )",
            
          
          }
        }
        else if (event.target.scrollTop==0)
        {
          this.fixLeft = false
            this.fixStyle = {
            backgroundImage:"none"
          }
        }
        
      }
    }
  

}
</script>

<style scope>
.outer
{
  overflow-y:auto;
  overflow-x:hidden;
  
}
.fix-right
{
  position:fixed;
  right:8px;
  bottom:60px;
  z-index:200;
  /* border:1px solid black; */

}
.fix-right img
{
  width:50px;
  z-index:200;
}
.top
{
    width:100%;
    height:36%;
    /* background-color:blue; */
    position:relative;
    display:flex;
    justify-content:center;
    /* border:1px solid black; */

    
}
.red-one
{
    width:1000px;
    height:1000px;
    background-image:linear-gradient(to right, rgb(233, 87, 50) , rgb(220,29,44));
    border-radius:50%;
    margin:0 auto;
    flex-shrink: 0;
    position:absolute;
    top:-798px;
    

}

.jifen
{
    width:95%;
    height:33%;
    background-color:white;
    position:absolute;
    bottom:0;
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    box-shadow:0 7px 7px -2px rgb(221, 221, 221);
}
.login
{
    width:90%;
    height:30%;
    /* border:1px solid black; */
    z-index:10;
    margin-top:10%;
    line-height:30%;
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    
}
.fix
{
    position:fixed;
    width:100%;
    height:6.5%;
    top:0;
    z-index:100;
    /* background-color:blue; */
    display:flex;
    align-items:center;
    /* border:1px solid black; */
}

.fixLeft
{
  color:white;
  /* border:1px solid black; */
  margin-left:19px;
  display:flex;
  align-items:center;
}
.fixLeft img
{
  width:25px;
  margin-right:9px;
}
.fix-inner
{
    position:absolute;
    right:1px;
    width:70px;
    height:25px;
    /* border:1px solid black; */
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right:9px;
    
}
.iconfont.setting
{
    font-size:20px;
    margin-right:11px;
    color:white;
}
.iconfont.chat
{
    font-size:23px;
    color:white;
    font-weight:600;
}

.login img
{
    width:63px;
}
.login-p
{
    font-size:21px;
    color:white;
    /* border:1px solid white; */
    width:70%;
    display:block;
    margin-top:-24px;
    margin-left:9px;
}
.qiandao img
{
    width:12px;
    display:inline-block;
    margin-right:4px;
}
.qiandao
{
    /* border:1px solid yellow; */
    display:block;
    width:27%;
    height:20px;
    line-height:20px;
    text-align:center;
    border-radius:10px;
    margin-top:-28px;
    margin-left:72px;
    background-color:rgba(207, 51, 44)
}
.qiandao p
{
    font-size:11px;
    display:inline-block;
    color:white;
    vertical-align:top;
}

a
{
    text-decoration:none;
    color:black;
    font-size:13px;
}
ul.jifen-ul
{
    
    width:95%;
    height:50%;
    /* border:1px solid blue; */
    display:flex;
    justify-content:space-around;
    align-items:center;
}

li.jifen-li
{
    float:left;
    width:32%;
    border-right:1px solid rgb(234,234,234);
    flex-grow:1;
    height:50%;
    display:flex;
    margin-top:2px;
}

a.jifen-a
{
    
    display:inline-block;
    width:100%;
    /* border:1px solid black; */
    height:100%;
    overflow:visible;
    display:flex;
    flex-wrap:wrap;
    align-items:stretch;
    justify-content:center;
    
}
p.jifen-number
{
    /* border:1px solid black; */
    height:20px;
    display:inline-block;
    width:100%;  
    flex-shrink:0;
    text-align:center;
    margin-top:-11px;
}
p.jifen-name
{
    /* border:1px solid black; */
    font-size:10px;
     flex-shrink:0;
     height:20px;
     display:inline-block;
     color:rgb(102,102,102)
}

.my-order
{
    width:95%;
    height:35.5%;
    background-color:white;
    margin:0 auto;
    border-radius:10px;
    margin-top:8px;
}
.my-order-top
{
    
    width:100%;
    height:12%;
    /* background-color:red; */
    display:flex;
    align-items:center;
    border-radius:15px;
    position:relative;
}
p.left
{
    font-weight:600;
    font-size:15px;
    margin-left:10px;
    color:rgb(51,51,51)
}

div.right
{
    position:absolute;
    right:0;
    /* border:1px solid black; */
    display:flex;
    width:100px;
    height:30px;
    justify-content:space-around;
    align-items:center;
    margin-right:4px;
}
.right p
{
    width:56px;
    height:30px;
    display:inline-block;
    /* border:1px solid black; */
    line-height:30px;
    font-size:12px;
    text-align:center;
    margin-right:-18px;
    margin-bottom:2px;
    color:rgb(102,102,102)

}

.iconfont.right
{
    width:15px;
    height:15px;
    /* border:1px solid blue; */
    font-size:12px;
    vertical-align:bottom;
    color:rgb(102,102,102)
}

.my-order-icon
{
  width:93.5%;
  height:63px;
  /* background-color:red; */
  margin:0 auto;
  display:flex;
  align-items:center;
}


li.order-icon-li
{
  float:left;
  width:20%;
  height:50px;
  /* border:1px solid black; */
}
a.order-icon-a
{
  display:inline-block;
  width:100%;
  height:50px;
  /* border:1px solid black; */
  text-align:center;
}
a.order-icon-a p
{
  font-size:8px;
  color:rgb(102,102,102)
}
div.order-icon-div
{
  width:100%;
  height:40px;
  /* border:1px solid blue; */
  background-image:url(../../img/me/data_image_png;base….png);
  background-position:9px -3.5px;
  background-size:41px auto;
  background-repeat: no-repeat;
  
  
}
.order-icon-div.two
{
  background-position:10px -45px;
}
.order-icon-div.three
{
  background-position:11px -85px;
}
.order-icon-div.four
{
  background-position:12px -127px;
}
.order-icon-div.five
{
  background-position:13px -169px;
}

.my-order-swiper
{
  /* border:1px solid black; */
  width:95%;
  margin:0 auto;
  height:96px;
  margin-top:20px;
  overflow:hidden;
  border-radius:5px;
}
.my-order-swiper img
{
  width:100%;
  border-radius:5px;
  display:inline-block;
  
}
.swiper-pagination
{
  /* border:1px solid black; */
  display:flex;
  justify-content:flex-end;
  padding-right:10px;
}
.swiper-container
{
  /* border:1px solid black; */
  display:flex;
  justify-content:center;
  width:100%;
}
.swiper-slide
{
  /* border:1px solid red; */
  width:100%;
  
}

.vip
{
  width:95%;
  height:26.5%;
  background-color:white;
  margin:0 auto;
  margin-top:8px;
  border-radius:10px;
}
.right.vip-r p
{
  /* border:1px solid black; */
  width:100px;
  margin-right:8px;
}
.my-order-top.vip-t
{
  /* border:1px solid black; */
  /* background-color:white; */
  top:8px;
}

.coupon
{
  width:100%;
  height:66%;
  /* background-color:red; */
  float:right;
  margin-top:22px;
  overflow:auto;
  
}

ul.coupon-ul
{
  width:190%;
  /* border:1px solid black; */
  height:100%;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
}
li.coupon-li
{
  float:left;
  /* border:1px solid black; */
  width:23%;
  height:90%;
  border-radius: 5px;
  display:flex;
  box-shadow:0 0 5px 1px rgb(228, 227, 227);
}

.coupon-left
{
  width:75%;
  height:100%;
  /* border:1px solid yellow; */
  display:flex;
  align-items:center;
  flex-wrap:wrap;
}
a.coupon-right
{
  width:25%;
  height:100%;
  display:inline-block;
  /* border:1px solid blue; */
  border-radius:5px;
  display:flex;
  align-items:center;
  justify-content:center;
  background-image:linear-gradient(to right,rgb(240, 113, 104) , rgb(230,83,96));
  border-left:2px dashed white;
}
p.coupon-price
{
  
  font-size:28px;
  font-weight:600;
  display:inline-block;
  /* border:1px solid black; */
  margin-left:5px;
  color:rgb(205,26,32);
  
}
p.coupon-title
{
  margin-top:-20px;
  font-size:12px;
  /* border:1px solid black; */
  margin-left:6px;
  color:rgb(102,102,102);
  width:90%;
}
a.coupon-right p
{
  color:white;
}

li.coupon-li.sold p
{
  color:rgb(194,194,194)
}

a.coupon-right.sold
{
  background-color:rgb(237,237,237);
  background-image:none;
  
}
a.coupon-right.sold p
{
  color:rgb(237,237,237);
}

.my-vmall
{
  
  width:95%;
  height:36%;
  background-color:white;
  border-radius:5px;
  margin:0 auto;
  margin-top:8px;
}

ul.vmall-top-ul
{

  width:100%;
  height:30%;
  /* border:1px solid black; */
  margin-top:25px;
  display:flex;
  justify-content:space-between;
}

li.vmall-top-li
{
  margin-top:5px;
  float:left;
  width:23.5%;
  height:100%;
  
}

a.vmall-top-a
{
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  width:100%;
  height:100%;
  /* border:1px solid red; */

}

li.vmall-top-li img
{
  width:42px;
  
}

li.vmall-top-li p
{
  width:100%;
  text-align:center;
  font-size:10px;
}

ul.vmall-bottom-ul
{
  /* border:1px solid blue; */
  display:flex;
  justify-content:space-between;
  margin-top:22px;
}

.right.service-r
{
  margin-right:4px;
  /* border:1px solid black; */
}

li.coupon-li.life
{
  /* border:1px solid black; */
  width:31%;
}

li.coupon-li.life img
{
  width:100%;
}

ul.coupon-ul.life
{
  margin-top:-5px;
  /* border:1px solid black; */
  width:138%;
}

p.no-reason
{
  display:inline-block;
  height:10%;
  width:100%;
  text-align:center;
  font-size:17px;
  color:rgb(51,51,51);
  padding:18px;
  font-weight:600;
}

.ad 
{
  width:95%;
  height:37%;
  border-radius:10px;
  /* border:1px solid black; */
  margin:0 auto;
  background-color:white;
}



.ad img
{
  width:100%;
  height:auto;
}

ul.ad-ul
{
  width:100%;
  height:100%;
  /* border:1px solid black; */
  margin:0 auto;
  
}
li.ad-li
{
  width:96%;
  height:50%;
  /* border:1px solid red; */
  padding:8px 0;
  margin:0 auto;
  
}

.end
{
  width:100%;
  height:37%;
  background-color:white;
  margin-top:8px;
}

.end-top
{
  width:96%;
  height:18%;
  border-bottom:1px solid rgb(238, 236, 236);
  margin:0 auto;
}
ul.end-top-ul
{
  width:40%;
  height:100%;
  /* border:1px solid red; */
  margin:0 auto;
  display:flex;
  align-items:center;
}
li.end-top-li
{
  float:left;
  width:50%;
  height:40%;
 border-right:1px solid rgb(238, 236, 236);
  text-align:center;
  display:flex;
  vertical-align:bottom;
}
a.end-top-a
{
  display:inline-block;
  width:100%;
  height:150%;
  /* border:1px solid yellow; */
  font-size:15px;
  flex-shrink:0;
  margin-top:-5px;
}
.end-icon
{
  width:100%;
  height:30%;
  /* background-color:pink; */
}
ul.end-icon-ul
{
  width:60%;
  height:100%;
  /* border:1px solid red; */
  margin:0 auto;
  margin-top:9px;
}
li.end-icon-li
{
  width:33%;
  height:80%;
  /* border:1px solid blue; */
  float:left;
  display:flex;
  justify-content:center;
  align-items:center;
}

li.end-icon-li img
{
  width:38px;
  margin-bottom:-5px;
}

li.end-icon-li p
{
  font-size:10px;
}

.end-client
{
  width:100%;
  height:10%;
  /* background-color:pink; */
}

ul.end-client-ul
{
  width:64.5%;
  /* border:1px solid black; */
  height:100%;
  margin:0 auto;
  margin-top:-5px;
  display:flex;
}

li.end-client-li
{
  flex-grow:1;
  height:100%;
  float:left;
  width:33%;
  border-right:1px solid rgb(238, 236, 236);
  text-align:center;
  display:flex;
  align-items:center;
  justify-content:center;
}

a.end-client-a
{
  font-size:11px;
  /* border:1px solid red; */
  color:rgb(155, 155, 155);
}
.end-text
{
  margin-top:3px;
  /* border:1px solid black; */
  text-align:center;
  width:80%;
  margin:0 auto;
}

.end-text p
{
  font-size:12px;
  color:rgb(155, 155, 155);
}

</style>