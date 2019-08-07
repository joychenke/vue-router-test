<template>
  <div class="paramObj">
    prop 传参是对象 <span>btnType</span>: {{btnType}},<span>isFromRouter</span>: {{isFromRouter}}
  </div>
</template>
<script>
export default {
  data(){
    return {
      
    }
  },
  props: {
    btnType: { type: String},
    isFromRouter: {type: Boolean}
  }
}
</script>
<style lang="less">
.paramObj{
  span{
    color: #34434;
    font-weight:900;
    font-size: 20px;
  }
}
</style>


