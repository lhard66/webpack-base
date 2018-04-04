<template>
  <div class="app-content">
    <span class="success">success</span>
    <span class="fail">fail</span>
    <p class="msg" @click="showMsg">{{msg}}</p>
    <p>这是一个段落<span class="warning">警告信息</span></p>
    <p>babel配置完成0000000000</p>
    <p>fail....</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello vue!',
    }
  },
  mounted() {
    this.showMsg();
  },
  methods: {
    showMsg() {
      // alert(this.msg);
      let abc = 'allen liu';
      let end = abc.endsWith('iu');
      console.log(end);
    },
  },
}
</script>

<style scoped lang="less">
.success {
  color: green;
}
.app-content {
  .fail {
    color: red;
  }
  .msg {
    cursor: pointer;
  }
}
</style>
