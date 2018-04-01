<template>
  <div class="app-content">
    <span class="success">success</span>
    <span class="fail">fail</span>
    <p class="msg" @click="showMsg">{{msg}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello vue!',
    }
  },
  methods: {
    showMsg() {
      alert(this.msg);
    },
  },
}
</script>

<style scoped>
.success {
  color: green;
}
.fail {
  color: red;
}
.msg {
  cursor: pointer;
}
</style>
