<template>
<div class="login-outer">
  <div class="login-top">

      <img src="../../img/me/ic_huaweiid_security_logo40.png">
      <p class="login-top-first-p">华为账号</p>
      <p class="login-top-second-p">登录华为账号以使用云空间、华为应用及更多服务</p>
    </div>

    <div class="login-input">
        <div class="login-input-top">
            <p class="login-input-top-left">国家/地区</p>
              <div class="login-input-top-right">
                  <p>中国 +86</p>
                  <div class="iconfont input-right">&#xe668;</div>
              </div>

              
        </div>

        <div class="login-input-content">
                  <input type="text" placeholder="手机号" onkeyup="value=value.replace(/[^\d]/g,'')">
                  <input type="text" placeholder="短信验证码" style="margin-top:15px">
              </div>

        <div class="login-btn">
            登录/注册

        </div>

        <p class="login-choice">密码登录</p>

        <div class="login-bottom">
            <p style="font-size:14px">其他方式登录</p>
            <ul class="login-icon-ul">
                <li class="login-icon-li"><a href="" class="login-icon-a">
                    <img src="../../img/me/wap_qq_emui9.png" alt="">
                    </a></li>
                <li class="login-icon-li"><a href="" class="login-icon-a">
                    <img src="../../img/me/wap_alipay_emui9.png">
                    </a></li>
            </ul>

            <ul class="login-bottom-ul">
                <li class="login-bottom-li" ><a href="" class="login-bottom-a">
                    遇到问题</a></li>
                <li class="login-bottom-li" style="border-right:none"><a href="" class="login-bottom-a">
                    隐私声明</a></li>
            </ul>

            
        </div>

        
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scope>
.login-outer
{
    width:100%;
    height:100%;
    background-color:white;
}

.login-top
{
    width:100%;
    height:25%;
    /* border:1px solid black; */
    text-align:center;
}
.login-top img
{
    width:40px;
    margin-top:15px;
}
p.login-top-first-p
{
    margin-top:10px;
    font-size:23.5px;
    font-weight:600;
}
p.login-top-second-p
{
    font-size:14.5px;
    margin-top:4.5px;
    color:rgb(127,127,127)
}

.login-input
{
    width:90%;
    height:35%;
    /* border:1px solid black; */
    margin:0 auto;
    margin-top:15px;
}

.login-input-top
{
    width:97%;
    height:20%;
    /* border:1px solid black; */
    margin:0 auto;
    
}
.login-input-top-right p
{
    display:inline-block;
    width:80%;
    /* border:1px solid red; */
    font-size:13px;
    color:rgb(127,127,127)
}
.iconfont.input-right
{
    /* border:1px solid blue; */
    width:20%;
    
}

.login-input-top-right
{
    width:80px;
    float:right;
    /* border:1px solid black; */
    display:flex;
}

p.login-input-top-left
{
    /* border:1px solid brown; */
    display:inline-block;
    color:rgb(25,25,25);
    
}

.login-input-content
{
    width:97%;
    height:35%;
    /* border:1px solid black; */
    margin:0 auto;
}

.login-input-content input
{
    
    width:100%;
    height:50%;
    font-size:15px;
    border:none;
    border-bottom:1px solid rgb(228,228,228);
}

.login-input-content input:focus
{
    border-bottom:1px solid rgb(127,127,127);
    outline-style: none;
}

.login-btn
{
    width:97%;
    height:35px;
    border-radius:25px;
    background-color:rgb(159,206,255);
    color:white;
    margin:0 auto;
    margin-top:55px;
    text-align:center;
    line-height:35px;
    
}

p.login-choice
{
    text-align:center;
    display:inline-block;
    width:100%;
    margin-top:19px;
    color:rgb(0,105,255);
    font-size:14px;
    font-weight:600;
}

.login-bottom
{
    margin:0 auto;
    margin-top:96px;
    width:97%;
    height:50%;
    /* border:1px solid black; */
    text-align:center;
    
}

ul.login-icon-ul
{
    width:42%;
    height:46%;
    /* border:1px solid black; */
    margin:0 auto;
    margin-top:11px;
    
}
ul.login-icon-ul img
{
    width:40px;
}
li.login-icon-li
{
    float:left;
    width:50%;
    /* border:1px solid red; */
}

.login-bottom p
{
    color:rgb(127,127,127)
}

ul.login-bottom-ul
{
    width:60%;
    height:25%;
    /* border:1px solid black; */
    margin:0 auto;
}
li.login-bottom-li
{
    width:50%;
    float:left;
    
    /* border:1px solid blue; */
    border-right:1px solid rgb(192, 192, 192);
}

a.login-bottom-a
{
    color:rgb(0,105,255);
    font-size:14px;
    font-weight:600;
}

</style>