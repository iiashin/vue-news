<template>
    <div id="detail">
        <div class="top">
            <my-header>
                <div slot="left">
                    <img src="../assets/back.png" alt="" class="back img" @click='$router.go(-1)'>
                </div>
                <div slot="mid" class=""></div>
                <div slot="right" class="btn">
                    <img src="../assets/search.png" alt="" class="img" style="position:relative;left:-20px" @click="$router.push('/search')">
                    <img src="../assets/dot2.png" alt="" class="img">
                </div>
            </my-header>
        </div>
        <div class="content">
            <div>
                <div class="title">{{articleList.title}}</div>
                <div class="author">{{articleList.author}}</div>
            </div>
            <div v-html="articleList.content"></div>
        </div>
    </div>
</template>

<script>
import myHeader from '../components/myHeader'
import { mapActions, mapState } from 'vuex'
export default {
    data() {
        return {
            id:this.$route.params.id
        }
    },
    components:{
        myHeader
    },
    computed: {
        ...mapState(["articleList"]),
        
    },
    methods:{
        ...mapActions(['get_articleList']),
    },
    created(){
        this.get_articleList(this.id);
    }
}
</script>

<style lang="scss" scoped>
    #detail{
        .top{
            background-color: white;   //固定顶端
            position: fixed;
            box-sizing: border-box;  //设置padding margin不扩充原长度
            width: 100%;
            z-index: 999;
            padding: 0 15px;
            border-bottom: 0.2px solid grey;
            .img{
                height: 15px;
                width: auto;
            }
        }
        .content{
            position: relative;
            top: 50px;
            padding: 0 15px;
            ::v-deep img{             //scss给v-html设置样式
                width: 100%;
                height:auto;
            }
            .title{
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 10px;
            }
            .author{
                font-size: 13px;
            }
        }
    }
</style>

