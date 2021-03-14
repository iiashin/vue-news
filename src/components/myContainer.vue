<template>
  <div id="container">
    <div id="header">
        <input type="text" name="" id="" @click="$router.push('/search')">
        <img src="../assets/search.png" alt="" class="search">
        <img src="../assets/header.png" alt="" class="logo">
    </div>
    <nav  id="navItem">
        <a href="" v-for="item in recomendItem" :key="item.id" :class='{active:item.id===activeId}' @click.prevent="choseItem(item.id)">{{item.name}}</a>
    </nav>
    
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    data() {
        return {
            selected:"1"
        }
    },
    computed:{
        ...mapState(['recomendItem','activeId'])
    },
    methods:{
        ...mapActions(['get_recomendItem']),   
        ...mapMutations(['set_activeItem']),
        // 点击栏目更改显示index
        choseItem(id){
            this.set_activeItem(id);
        },
        //栏目栏滑动
        slideTo(id){
            let nav_width=$('nav').width();
            let activeA_width=42*(parseInt(id)+1);
            //当数据在屏幕右半边时
            if(activeA_width>nav_width/2){
                let num=parseInt((activeA_width-nav_width/2)/42)+1;
                $('nav').scrollLeft(42*num);
            }else{
                $('nav').scrollLeft(0);
            }
        }
    },
    watch:{
        activeId(Val){
            this.slideTo(Val);
        }
    },
    created(){
        this.get_recomendItem();
    }
} 
</script>

<style lang="scss" scoped>
#container{
    #header{
        height: 40px;
        background-color: #e64b49;
        padding: 8px 14px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        input{
            height: 23px;
            width: 280px;
            border-radius: 15px;
            border: 0.5px solid black;
        }
        .search{
            position: absolute;
            height: 15px;
            width: auto;
            top: 15px;
            left: 25px;
        }
        .logo{
            height: 25px;
            width: auto;
            
        }
    }
    nav{
        // touch-action: none;
        position: relative;
        height: 32px;
        border-bottom:0.2px solid black;
        padding: 5px;
        box-sizing: border-box;
        overflow: auto;       //清除浮动
        white-space: nowrap;    //不换行
        a{
            text-decoration: none;
            // margin-left: 20px;
            width: 32px;
            color: black;
            display: inline-block;
            margin:0 10px;
        }
        .active{
            color:red;
            border-bottom: 2px solid red;
        }
    }
}
</style>