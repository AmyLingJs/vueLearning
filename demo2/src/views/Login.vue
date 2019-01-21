<template>
<div>
  <div v-if="!isReg">
    <h3>欢迎登录</h3>
    <div>
    <span>用户名：</span>
    <input type="text"  v-model="name"/>
</div>
<div>
    <span>密码：</span>
    <input type="text" v-model="password"/>
</div>
<div>
    <button id="btnLogin" @click="login">登录</button>
    <button id="btnReg" @click="reg">注册</button>
    </div>
  </div>



  <div v-else>
    <h3>请输入以下信息：</h3>
    <div>
    <span>用户名：</span>
    <input type="text"  v-model="name"/>
</div>
<div>
    <span>密码：</span>
    <input type="text"  v-model="password"/>
</div>
<div>
    <span>再次输入密码：</span>
    <input type="text" v-model="repeat" />
</div>
<div>
    <button id="btnLogin" @click="addUser">确定</button>
    <button id="btnReg" @click="cancel">取消</button>
    </div>
  </div>



  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      name: '',
      password: '',
      repeat:'',
      isReg:false
    };
  },
  methods: {
    login() {
        
      const originName = localStorage.getItem("name");
      const originPassword = localStorage.getItem("password")
      //this.name得到输入框中的用户名
      if(this.name === originName && this.password === originPassword){
          //跳转到home页面
        this.$router.push({path:'/home'})
      }else {
          alert("用户名密码不正确")
      } 
    },
    reg() {
       this.clearInfo();
        this.isReg = true;
    },
    addUser() {
         if(this.name !="" && this.password === this.repeat) {
            localStorage.setItem("name",this.name)
            localStorage.setItem("password",this.password)
            alert("注册成功，请登录")
            this.clearInfo();
            this.isReg =false;
            
        }else {
            alert('两次密码输入不一致')
        }

    },
    cancel() {
        this.clearInfo();
        this.repeat = ""
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

<style scoped>

</style>

