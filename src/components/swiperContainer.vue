<template>
    <div id="swiperContainer">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="item in recomendItem" :key="item.id">
                <pull-container :path="item.path"></pull-container>   
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
import pullContainer from './pullContainer.vue'
export default {
  components: { pullContainer },
    data() {
        return {
            swiperOption:{
                //滑动速度
                notNextTick: true, 
                onSlideChangeStart:this.changeActiveId
            }
        }
    },
    computed:{
        ...mapState(['recomendItem','activeId'])
    },
    watch:{
        //监听栏目index变化,滑动内容
        activeId(Val){
            this.$refs.mySwiper.swiper.slideTo(Val,200,true);
        }
    },
    methods:{
        ...mapMutations([
            'set_activeItem'
        ]),
        //滑动窗口时
        changeActiveId(){
            let id=this.$refs.mySwiper.swiper.activeIndex+'';    //加''隐形转换,int转String
            this.set_activeItem(id);
        }
    }
}
</script>
<style lang="scss" scoped>
// #swiperContainer{
    // height:100%;
// }
</style>