<template>
<div class="app">
    <component :is="cartEmpty">
    
    </component>

</div>
  
</template>

<script>
import empty from "./empty.vue";
import cartHave from "./cartHave.vue";
import store from "../../store.js"
export default {
    data(){
        return {
            cartEmpty:"empty",
        }
    },
    components:{
        "empty":empty,"cartHave":cartHave
    },
    store:store,
    computed:{
        shoppingL()
        {
            return this.$store.state.shoppingList
        }
    },
    watch:{
        shoppingL(newVal){
            console.log(newVal)
            console.log(newVal.length)
            if (newVal)
            {
                this.cartEmpty = "cartHave"
            }
            if (newVal.length == 0)
            {
                this.cartEmpty = "empty"
            }
            
        }
    }
}
</script>

<style scope>

</style>