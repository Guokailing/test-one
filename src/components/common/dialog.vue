<template>
  <div id="dialog">
    <!-- 对话框 -->
    <a-modal title="Title" :visible="visible" :confirm-loading="confirmLoading">
      <p>{{  }}</p>
    </a-modal>
  </div>
</template>
<script>
export default {
    data(){
        return{
            confirmLoading:false,
            visible:false,
        }
    }
}
</script>
<style lang="scss">

</style>