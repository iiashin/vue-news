<template>
  <div id="home">
    <my-container></my-container>
    <swiper-container></swiper-container>
  </div>
</template>
<script>
import myContainer from '../components/myContainer.vue'
import swiperContainer from '../components/swiperContainer'
export default {
  components: { myContainer,swiperContainer },
  
}
</script>
<style lang="scss" scoped>
  #home{
    height: 100%;
    overflow: hidden;
  }
</style>