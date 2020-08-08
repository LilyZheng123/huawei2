<template>
<div class="outer">
    <div class="top-cart-fix">购物车
    </div>
    <div class="top-cart">
        <div class="iconfont shopping-cart">&#xe69a;</div>
        <!-- <button @click="addShop(1)">按我</button> -->
        <p class="top-cart-p">您的购物车没有商品</p>
        <div class="to-shop">去购物</div>
        
    </div>

    <p class="recommand">热销推荐</p>

    <div class="recommand-list">
        <ul class="reco-list-ul">
            <li class="reco-list-li" v-for="(item,index) in this.$store.state.ShoppingAjaxList" :key="item">
                <a class="reco-list-a">
                    <div class="img-container"><img :src="item.avatar"></div>
                    <div class="iconfont little-shopping-cart" @click="addShop('gouwuche0'+(index+1))" >&#xe699;</div>
                    <p class="shopping-little-p">{{item.name}}</p>
                    <p class="shopping-price">{{item.price}}</p>
                </a>
            </li>
        </ul>
    </div>

</div>
  
</template>

<script>
import store from "../../store.js";
import axios from "axios";
export default {
   
    methods:{
        addShop(id)
        {
            console.log(id);
            console.log(this.$store.state.ShoppingAjaxList);
            this.$store.commit("addShop",id)
        }
        
    }
 }



</script>

<style scope>
*
{
    padding:0;
    margin:0;
}

html,body
{
    overflow:auto;
    /* border:1px solid black; */
    width:100%;
    height:100%;

}
.top-cart-fix
{
    /* border:1px solid black; */
    position:fixed;
    top:0;
    width:100%;
    height:6%;
    text-align:center;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:white;
    font-size:18px;
    z-index:100;
}
.app
{
    /* border:1px solid red; */
   overflow:auto;
    width:100%;
    height:100%;
    background-color:rgb(249, 249, 249);
}
div.outer
{
    display:inline-block;
    width:100%;
    height:100%;
    background-color:rgb(249, 249, 249);
    /* background-color:red; */
    /* border:1px solid black; */
    
    
}
.iconfont.shopping-cart
{
    font-size:70px;
    color:rgb(153, 153, 153);
    margin-right:10px;
    
}
.top-cart
{
    width:50%;
    height:35%;
    /* background-color:red; */
    margin:0 auto;
    text-align:center;
    padding-top:25%;
}
p.top-cart-p
{
    margin-top:10px;
    color:rgb(153, 153, 153)
}
.to-shop
{
    width:90px;
    height:30px;
    border:1px solid rgb(153, 153, 153);
    border-radius:25px;
    line-height:30px;
    margin:0 auto;
    margin-top:10px;
    color:rgb(102, 102, 102);
    font-size:14px;
}
p.recommand
{
    text-align:center;
    display:inline-bloack;
    width:100%;
    height:auto;
    /* border:1px solid black; */
    font-size:17px;
    font-weight:bold;
    color:rgb(51,51,51);
    margin-top:67px;
}
.recommand-list
{
    width:100%;
    height:300px;
    display:flex;
   
    flex-wrap:wrap;
    justify-content:space-around;
}
ul,li
{
    list-style:none;
    width:100%;
    height:auto;
    
}
ul.reco-list-ul
{
    margin-top:15px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    width:96%;
    float:left;
    text-align:center;
    /* border:1px solid red; */
    height:731px;
}
li.reco-list-li
{

    float:left;
    /* border:1px solid black; */
    width:49%;
    height:32%;
}
a
{
    text-decoration:none;
}

a.reco-list-a
{
    
    width:100%;
    height:100%;
    background-color:white;
    display:inline-block;
    margin-bottom:8px;
    border-radius:10px;
    position:relative;
    
}

a.reco-list-a img
{
    margin-top:9%;
    width:78%;
    height:auto;
    /* border:1px solid black; */
}

.iconfont.little-shopping-cart
{
    width:22px;
    height:22px;
    text-align:center;
    line-height:22px;
    position:absolute;
    /* border:1px solid black; */
    border-radius:50%;
    top:3%;
    right:3%;
    font-size:11px;
    color:black;
    background-color:rgb(243, 243, 243);
    padding-right:2px;  
    font-weight:bold;
}
.img-container
{
    /* border:1px solid red; */
}
p.shopping-little-p
{
    color:black;
    font-size:12px;
    margin-top:7px;
}
p.shopping-price
{
    margin-top:5px;
    color:rgb(202,20,29);
    font-weight:bold;
}

</style>