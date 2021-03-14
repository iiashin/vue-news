<template>
    <div id="search">
        <!-- 搜索顶部 -->
        <div class="top">
            <my-header>
                <div slot="left">
                    <img src="../assets/back.png" alt="" class="back" @click='$router.go(-1)'>
                </div>
                <div slot="mid" class="">
                    <img src="../assets/search.png" alt="" class="img1">
                    <input type="text" name="" id="" placeholder="默认输入内容" v-model.trim='key' @keyup.enter="get_search()">
                </div>
                <div slot="right" class="btn" @click="get_search()">搜索</div>
            </my-header>
        </div>
        <!-- 搜索结果or推荐 -->
        <div class="content">
            <!-- 搜索推荐 -->
            <template v-if="searchContent==='recommend'">
                <!-- <div> -->
                <div class="tip">
                    <span>猜你想搜</span>
                    <template v-if="isWatch===1">
                        <img src="../assets/eye.png" alt="" @click="doWatch()">                            
                    </template>
                    <template v-if="isWatch===-1">
                        <img src="../assets/noeye.png" alt="" @click="doWatch()">    
                    </template>
                </div>
                <template v-if="isWatch===1">
                    <div class="recommendList">
                        <ul>
                            <li v-for="(list,index) in recommendList" :key="index">{{list}}</li>
                        </ul>
                    </div>                     
                </template>
                <!-- </div> -->
            </template>
            <!-- 结果列表 -->
            <template v-if="searchContent==='result'">
                <div>
                    <list-item :contentList='list'></list-item>
                </div>
            </template>
            <template v-else-if="searchContent==='none'">
                <img src="../assets/none2.png" alt="" class="none">
            </template>
        </div>
    </div>
</template>
<script>
import axios from 'axios';        //引入axios'
import myHeader from '../components/myHeader'
import listItem from '../components/listItem.vue'
import {request} from '../util/request.js'
export default {
    components:{myHeader,listItem},
    data() {
        return {
            searchContent:'recommend',        //搜索框下面的内容
            isWatch:1,                      //推荐是否可见
            key:'',                            //搜索内容
            list:[],                          //搜索结果
            recommendList:[]              //推荐内容
        }
    },
    methods: {
        // 获取搜索内容
        get_search(){
            this.list=[];
            request('post','search',this.key).then(res=>{
                if(res.length!=0){
                    this.list=res;
                    this.$router.replace(`/search?data=${this.key}`)  //跳转，history栈不会有记录
                    this.searchContent='result'
                }
                else{
                    this.searchContent='none'
                }
            })
        },
        doWatch(){
            this.isWatch=-this.isWatch
        },
        // 获取推荐内容
        get_reconmend(){
            request('post','reconmend').then(res=>{
                this.recommendList=res.reconmend
            })
        }
    },
    created(){
        this.get_reconmend()
    }
}
</script>
<style lang="scss" scoped>
    #search{
        .top{
            padding: 0 15px;
            border-bottom: 0.2px solid grey;
            input{
                height: 27px;
                width: 270px;
                border-radius: 15px;
                border: 0.5px solid black;
                padding-left: 25px;
                box-sizing: border-box;
                font-size: 13px;
            }
            .back{
                height: 15px;
                width: auto;
                position: relative;
                // left: 15px;
                top: 2px;
            }
            .img1{
                position: absolute;
                height: 15px;
                width: auto;
                top: 15px;
                left: 52px;
            }
            .btn{
                position: relative;
                // right: 15px;
                font-size: 13px;
            }
        }
        .content{
            padding: 0 15px;
            height: 100%;
            .tip{
                // padding: 0;
                font-size: 12px;
                display: flex;
                justify-content: space-between;
                padding: 15px 0 0 0;
                span{
                    color: grey;
                }
                img{
                    height: 12px;
                    width: auto;
                }
            }
            .recommendList{
                ul{
                    padding: 0;
                    li{
                        font-size: 13px;
                        list-style: none;
                        display: inline-block;
                        width: 50%;
                        white-space: nowrap;   //不换行
                        text-overflow: ellipsis;  //超出部分用点点代替
                        overflow: hidden;      //隐藏超出部分
                    }
                }
            }
            .none{
                width: auto;
                height: 60px;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                position: absolute;
                margin: auto;
            }
        }       
    }
</style>