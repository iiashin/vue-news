<template>
  <div id="myheader">
    <slot name="left"></slot>
    <slot name="mid"></slot>
    <slot name="right"></slot>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  #myheader{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    line-height: 40px;
  }
</style>
