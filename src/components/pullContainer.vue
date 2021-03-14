<template>
    <!-- 下拉效果 -->
    <div id="pullContainer">
        <!-- 顶部提示 -->
        <div class="topTip">
            <div class="newData">推荐已更新</div>
        </div>
        <!-- 下拉加载 -->
        <mt-loadmore :top-method="loadTop"  ref="loadmore" @top-status-change="handleTopChange" >
            <!-- 下拉提示 -->
            <div slot="top" class="mint-loadmore-top">
                <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">...</span>
                <span v-show="topStatus === 'loading'">Loading...</span>
            </div>
            <!-- 通过路径获取栏目内容 -->
            <list-item :contentList='list'></list-item>
        </mt-loadmore>
    </div>
</template>
<script>
// import axios from "axios";
import axios from 'axios'
import listItem from './listItem.vue'
import { request } from '../util/request'
export default {
  components: { listItem },
    data(){
        return{
            list:[],
            topStatus: ''  
        }
    },
    //父组件的值
    props:[
        'path'    //path代表不同的类别
    ],
    methods:{
        getList(){
            request('post','content').then(res=>{
                this.list=res[this.path];
            })
        },
        // 下拉状态改变
        handleTopChange(status) {
            // console.log(status);
            this.topStatus = status;  //初始化为pull，下拉为drop loading
        },
        // 下拉请求
        loadTop(){
            request('post','refresh').then(res=>{
                //扩展运算符合并数组，能将数组分成用逗号隔开的值
                this.list.unshift(...res)
                this.$refs.loadmore.onTopLoaded();    //下拉结束后加载中会消失，通知组件重新渲染
                $('.topTip .newData').slideDown(200).delay(400).slideUp(200)
            })
        }
    },
    created() {
        this.getList();
    }
}
</script>
<style lang="scss" scoped>
    #pullContainer{
        .topTip{
            position: absolute;
            left: 0;
            right: 0;
            width: 100%;
            height: 18px;
            font-size: 12px;
            .newData{
                background-color: rgb(206, 202, 202);
                text-align: center;
                display: none;
            }
        }
    }
</style>