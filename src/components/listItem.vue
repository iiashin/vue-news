<template>
    <div id="listItem">
        <ul>
            <template v-for="list in contentList">
                <!-- 无图片 -->
                <li v-if="list.none">
                    <router-link :to="{name:'detail',params:{id:list.id}}" class="link">
                        <div class="none">
                            <div class="title">{{list.title}}</div>
                            <div>
                                <span class="attlist">置顶</span>
                                <span class="author">{{list.author}}</span>
                                <span class="comment">{{list.comment}}</span>
                            </div>
                        </div>
                    </router-link>
                </li>
                <!-- 单张小图 -->
                <li v-else-if="list.smallSingle">
                    <div class="smallSingle">
                        <div class="word">
                            <div class="title">{{list.title}}</div>
                            <div class="msg">
                                <span class="attlist">置顶</span>
                                <span class="author">{{list.author}}</span>
                                <span class="comment">{{list.comment}}</span>
                            </div>
                        </div>
                        <img :src='list.pic1' alt="">
                    </div>
                </li>
                <!-- 单张大图 -->
                <li v-else-if="list.bigSingle">
                    <div class="bigSingle">
                        <div class="title">{{list.title}}</div>
                        <div class="pic">
                            <img :src='list.pic1' alt="">
                        </div>
                        <div>
                            <span class="attlist">置顶</span>
                            <span class="author">{{list.author}}</span>
                            <span class="comment">{{list.comment}}</span>
                        </div>
                    </div>
                </li>
                <!-- 三张图 -->
                <li v-else-if="list.few">
                    <div class="threePic">
                        <div class="title">{{list.title}}</div>
                        <div class="pic">
                            <img :src='list.pic1' alt="">
                            <img :src='list.pic2' alt="">
                            <img :src='list.pic3' alt="">
                        </div>
                        <div>
                            <span class="attlist">置顶</span>
                            <span class="author">{{list.author}}</span>
                            <span class="comment">{{list.comment}}</span>
                        </div>
                    </div>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props:[
        'contentList'
    ]

}
</script>

<style lang="scss" scoped>
    #listItem{
        ul{
            padding: 0;
            margin: 0;
            .link{
                text-decoration: none;
            }
            li{
                box-sizing: border-box;
                padding: 8px 5px;
                list-style: none;
                width: 100%;
                border-bottom: 0.1px solid #D3D3D3;
                .smallSingle{
                    height: 90px;
                    display: flex;
                    justify-content: space-between;
                    img{
                        height: 90px;
                        width: 34%;
                    }
                    .word{
                       height: 100%;
                       position: relative;
                       width:66%;
                       .msg{
                           position: absolute;
                           bottom: 0;
                           width: 100%;
                       }
                    }
                }
                .bigSingle{              //不设置高度，当里面的内容增加时能扩充板块的长度
                    .pic{
                        width: 100%;
                        height: 120px;
                        overflow: hidden;
                        img{
                            height:auto;
                            width: 100%;
                            margin-top: 5px;
                        }
                    }
                }
                .threePic{
                    .pic{
                        width: 100%;
                        height: 70px;
                        overflow: hidden;
                        img{
                            height:auto;
                            width: 33%;
                            margin-top: 5px;
                            float: left;
                            margin-right: 1px;
                        }
                    }
                }
                .title{
                    font-size: 14px;
                    color:black;
                    font-family: '黑体';
                }
                .attlist{
                    color: red;
                    font-size: 9px;
                    margin-right: 5px;
                }
                .author{
                    color: grey;
                    font-size: 9px;
                    margin-right: 5px;
                }
                .comment{
                    color: grey;
                    font-size: 9px;
                    margin-right: 5px;
                }
            }
        }
    }
</style>
