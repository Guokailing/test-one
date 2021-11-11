<template>
  <div id='indexForIn'>
    <div id="kl_head">上</div>
    <div id="kl_left">左</div>
    <div id='kl_main'>
      <router-view />
    </div>
    <Dialog v-show='dialog.show'></Dialog>
  </div>
</template>
<script>
import Dialog from "../common/dialog.vue";
export default {
  components: { Dialog },
  data() {
    return {
      dialog: this.$dialog.data
    }
  },
}
</script>
<style lang="scss" src="../../assets/css/common.scss"></style>