<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="4">
        <el-input id="username" v-model="username" placeholder="请输入帐号">
          <template v-slot:prepend>帐号</template>
        </el-input>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="4">
        <el-input
          id="password"
          v-on:keyup.enter.native="login"
          v-model="password"
          type="password"
          placeholder="请输入密码"
        >
          <template v-slot:prepend>密码</template>
        </el-input>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="4">
        <el-button
          id="login"
          v-on:click="login"
          style="width: 100%"
          type="primary"
          >登录</el-button
        >
      </el-col>
    </el-row>
    <el-row class="error-msg" type="flex" justify="center">{{ msg }}</el-row>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      msg: "",
    }
  },
  methods: {
    login: function () {
      let username = this.username
      let password = this.password
      this.$http
        .post("/api/login", {
          username,
          password,
        })
        .then((response) => {
          if (response.data.status === "OK") {
            this.$router.push("dashboard")
          } else {
            this.msg = response.data.message
          }
        })
    },
  },
}
</script>