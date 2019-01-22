<template>
  <div>
    <div v-if="!isReg">
      <div class="welcome">
        <h3>欢迎登录</h3>
      </div>

      <div class="welcome username">
        <span>用户名</span>
        <input type="text" v-model="name">
      </div>
      <div class="welcome username">
        <span>密码</span>
        <input type="text" v-model="password">
      </div>
  


      <div class="buttonArea">
        <button id="btnLogin" class="button1" @click="login">登录</button>
        <button id="btnReg" @click="reg">注册</button>
      </div>
    </div>

    <div v-else>
      <div class="welcome">
        <h3>请输入以下信息</h3>
      </div>

      <div  class="welcome username">
        <span>用户名</span>
        <input type="text" v-model="name">
      </div>
      <div  class="welcome username">
        <span>密码</span>
        <input type="text" v-model="password">
      </div>
      <div  class="welcome username">
        <span>再次密码</span>
        <input type="text" v-model="repeat">
      </div>
      <div class="buttonArea">
        <button id="btnLogin" class="button1" @click="addUser">确定</button>
        <button id="btnReg" @click="cancel">取消</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      name: "",
      password: "",
      repeat: "",
      isReg: false
    };
  },
  methods: {
    login() {
      const originName = localStorage.getItem("name");
      const originPassword = localStorage.getItem("password");
      //this.name得到输入框中的用户名
      if (this.name === originName && this.password === originPassword) {
        //跳转到home页面
        this.$router.push({ path: "/home/list" });
      } else {
        alert("用户名密码不正确");
      }
    },
    reg() {
      this.clearInfo();
      this.isReg = true;
    },
    addUser() {
      if (this.name != "" && this.password === this.repeat) {
        localStorage.setItem("name", this.name);
        localStorage.setItem("password", this.password);
        alert("注册成功，请登录");
        this.clearInfo();
        this.isReg = false;
      } else {
        alert("两次密码输入不一致");
      }
    },
    cancel() {
      this.clearInfo();
      this.repeat = "";
      this.isReg = false;
    },
    clearInfo() {
      //清空用户名密码信息
      this.name = "";
      this.password = "";
    }
  }
};
</script>

<style scoped lang="scss">
body {
  font-size: 16px;
}
.welcome {
  width: 94%;
  height: 60px;
  line-height: 60px;
  margin-left: 3%;
  margin-right: 3%;
  text-align: left;
}
.username {
  display: flex;
  flex-flow: row nowrap;
  justify-content:flex-end;
  align-items: center;
  align-content: flex-start;
  margin-left: 0;
  

  span {
     flex-grow: 0.1;
    display: block;
    width: 18%;
    text-align: right;
    margin-right: 5%;
  }

  input {
    border: 1px solid #aaa;
    border-radius: 5px;
    height: 30px;
     flex-grow: 1;
    // line-height:30px;
  }
}
.buttonArea {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 94%;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 80px;
  button {
    width: 45%;
    height: 40px;
    line-height: 40px;
    border: 1px solid #42b983;
    border-radius: 5px;
    background: #fff;
    color: #42b983;
  }
  .button1 {
    background: #42b983;
    color: #fff;
  }
}
</style>

