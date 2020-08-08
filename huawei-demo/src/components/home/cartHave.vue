<template>
<div class="outer">
    <div class="top-cart-fix">
        <p>购物车</p>
        <p class="edit">编辑</p>
        <!-- <button @click="show()">显示</button> -->
    </div>    
    <div class="other"></div>
    <div class="cart-content" v-for="(item,index) in this.$store.state.shoppingList" :key="item">
        <div class="cart-content-left">
            <div class="ok" @click="checkOk(index)">
                <div class="iconfont red-ok " v-if="item.okSeen==true">&#xe612;</div>
            </div>
            
            
            <img :src="item.avatar">
        </div>
        
        <div class="cart-content-right">

            <p class="whole-name">{{item.wholeName}}</p>
            <p class="sub-title">{{item.subTitle}}</p>
            <div class="price-div">
                <p class="price">{{item.price}}</p>
                <div class="add-minus">
                    <div class="iconfont minus" @click="minus(index)">&#xe66b;</div>
                    <p class="add-minus-num">{{item.shuliang}}</p>
                    <div class="iconfont add" @click="add(index)">&#xe666;</div>
                </div>
            </div>

            <div class="insert">限购20件</div>
        </div>
        
              
    </div>

    <div class="fix-bottom">
        <div class="bottom-left">
            <div class="ok bottom" @click="checkOkAll">
                <div class="iconfont red-ok " v-if="okSeenAll">&#xe612;</div>
            </div>
             <p>全选</p>
        </div>

        <div class="bottom-right">
            <p class="bottom-zongji">总计:</p>
            <p class="bottom-price">￥{{Inprice}}</p>

            <p class="makeSure">结算({{jiesuan}})</p>
        </div>
    </div>

    </div>


  
</template>

<script>
import store from "../../store.js";
import axios from "axios";
export default {
    props:[],
    data(){
    
        return{
            okSeenAll:true,
            // jiesuan:this.$store.state.shoppingList.length
            
        }
    },
    computed:{
        Inprice(){
            let price = 0;
            for(let i=0;i<this.$store.state.shoppingList.length;i++)
            {
                if(this.$store.state.shoppingList[i].okSeen == true){
                    price+=parseInt(this.$store.state.shoppingList[i].price.slice(1))*this.$store.state.shoppingList[i].shuliang
                }
            }
            return price
        },
        jiesuan(){
            let countQ = 0;
            
            for(let i=0;i<this.$store.state.shoppingList.length;i++)
            {
                if(this.$store.state.shoppingList[i].okSeen == true){
                    
                    countQ+=this.$store.state.shoppingList[i].shuliang;
                }
            }
           return countQ;
        }
    },
    methods:{
        deleShop()
        {
            this.$store.commit("deleShop")
        },
        show(){
            console.log(this.$store.state.shoppingList)
        },
        checkOk(n)
        {
            let count = 0;
           
            this.$store.state.shoppingList[n].okSeen = !this.$store.state.shoppingList[n].okSeen;
            for(let i=0;i<this.$store.state.shoppingList.length;i++)
            {
                if(this.$store.state.shoppingList[i].okSeen == true){
                    count++;
                    
                }
            }
            // this.jiesuan = count;
            if (count == this.$store.state.shoppingList.length)
            {
                this.okSeenAll = true;
            } 
            if (count < this.$store.state.shoppingList.length)
            {
                this.okSeenAll = false;
            } 

           
        },
        checkOkAll()
        {
            
            this.okSeenAll = !this.okSeenAll;
            
            
            for(let i=0;i<this.$store.state.shoppingList.length;i++)
            {
                this.$store.state.shoppingList[i].okSeen = true;
            }

            if (this.okSeenAll == false)
            {
                for(let i=0;i<this.$store.state.shoppingList.length;i++)
            {
                this.$store.state.shoppingList[i].okSeen = false;
            }
            }

        },
        add(i)
        {
            
            this.$store.state.shoppingList[i].shuliang++;
           
            
        },
        minus(i)
        {
            
            if (this.$store.state.shoppingList[i].shuliang>=2)
            {
                this.$store.state.shoppingList[i].shuliang--;
            }
        }
    }

}
</script>

<style >
.other
{
    width:100%;
    height:6.5%;
    /* border:1px solid black; */
}
p.edit
{
    position:absolute;
    right:0;
    width:60px;
    color: rgb(136,136,136);
    font-size:16px;
}

.cart-content
{
    margin:0 auto;
    margin-top:8px;
    width:95%;
    height:42.5%;
    background-color:white;
    border-radius:10px;
    display:flex;

}

.cart-content img
{
    width:85px;
}

.cart-content-left
{
    width:36%;
    height:30%;
    border:1px solid black;
    display:flex;
    align-items:center;
    margin-top:24px;
    padding-left:19px;
}

.cart-content-right
{
    width:64%;
    height:80%;
    border:1px solid black;
    margin-top:20px;
}
.ok
{
    width:20px;
    height:20px;
    border-radius:50%;
    border:1px solid black;
}

p.whole-name
{
    width:100%;
    border:1px solid black;
    font-size:13px;
   
}

p.sub-title
{
    font-size:12px;
    margin-top:7px;
}

.price-div
{
    width:100%;
    height:30px;
    border:1px solid black;
    margin-top:43px;
    display:flex;
    align-items:center;
}

p.price
{
    
    font-size:16px;
    color:rgb(202,20,29);
    font-weight:600;
    
}

.add-minus
{
    
    margin-left:68px;
    width:43%;
    height:100%;
    border:1px solid black;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
}

.iconfont.minus,.add-minus-num,.iconfont.add
{
    width:33%;
    border:1px solid grey;
}

.iconfont.minus,.iconfont.add
{
    border-radius:50%;
    width:25px;
    height:25px;
    display:flex;
    justify-content:center;
    align-items:center
}

.add-minus-num
{
    text-align:center;
}

.insert
{
    float:right;
    font-size:12px;
    color:rgb(202,20,29);
    margin-right:10px;
}

.iconfont.red-ok
{
    width:100%;
    border-radius:50%;
    color:white;
    background-color:red;
    font-weight:600;
}

.fix-bottom
{
    position:fixed;
    bottom:58px;
    width:100%;
    height:8%;
    border:1px solid black;
    display:flex;
    align-items:center;
    background-color:white;
    
}

.bottom-left
{
    width:40px;
    border:1px solid black;
}

.bottom-right
{
    height:100%;
    display:flex;
    align-items:center;
}
.fix-bottom .bottom-right
{
    width:230px;
    display:flex;
    float:right;
    border:1px solid black;
    margin-left:40px;
    justify-content:space-between;
}

p.bottom-zongji
{
    display:inline-block;
    width:50px;
    height:50%;
    border:1px solid black;
}
p.bottom-price
{
    display:inline-block;
    width:50px;
    height:50%;
    border:1px solid red;
}

p.makeSure
{
    width:100px;
    height:85%;
    border:1px solid brown;
    text-align:center;
    border-radius:20px;
    display:flex;
    align-items:center;
    justify-content:center;
}

.bottom-left
{
    width:100px;
    display:flex;
    margin-left:20px;
}
.ok.bottom
{
    margin-right:10px;
}

.bottom-left p
{
    font-size:13px;
    color:grey;
}

</style>