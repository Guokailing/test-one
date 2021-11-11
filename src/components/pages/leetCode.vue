<template>
  <div id="code">
    <!-- 算法练习 -->
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    let A = [1, 1, 2, 3, 4, 4, 4, 4, 7];
    let c = this.removeDuplicates(A);
    console.log('-------', c);
    console.log('---------arr--------', A)
  },
  methods: {
    //   排序数组去重排序
    removeDuplicates (arr) {
      if (arr == null || arr.length == 0) return 0;
      let left = 0;
      for (let right = 1; right < arr.length; right++) {
        //如果左指针和右指针指向的值一样，说明有重复的，
        //这个时候，左指针不动，右指针继续往右移。如果他俩
        //指向的值不一样就把右指针指向的值往前挪
        if (arr[left] != arr[right]) arr[++left] = arr[right];
      }
      let len = ++left;
      arr.splice(len)
      return len;
    }
  }
}
</script>