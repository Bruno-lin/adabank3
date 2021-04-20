<template>
  <div id="app">
    <img class="logo" src="./assets/bank_icon.png" />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style>
body,
html {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
}

#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.error-msg {
  color: #f56c6c;
}

.success-msg {
  color: #67c23a;
}

.logo {
  width: 256px;
  height: auto;
}
</style>
