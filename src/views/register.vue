<template>

    <div class="container">
        <form>
          <br><br><br><br><br><br><br><br><br><br><br>
        <p class="errorMsg" v-if="emptyMess">Enter all the data!</p>
        <p class="errorMsg" v-if="shortPass">Too short password!</p>
        <!--<div class="form-outline mb-4">
            <input v-model="repeat_password" type="password" id="registerRepeatPassword" class="form-control" />
            <label class="form-label" for="registerRepeatPassword">Repeat password</label>
        </div>-->
        <div class="login-page">
  <div class="form">
        <form class="login-form">
        <input v-model="name" type="text" placeholder="name"/>
        <input v-model="email" type="text" placeholder="email address"/>
        <input v-model="password" type="password" placeholder="password"/>
        <button @click.prevent="registerUser()">Sign up</button>
        </form>
        </div>
    </div>
        <!-- Submit button -->
    </form>
  </div>
</template>

<script>
import store from '@/store.js'
import { Auth } from '@/service/index.js';
export default {
    data:function(){
        return{
            store,
            emptyMess:null,
            shortPass:null,
            name:'',
            email:'',
            password:'',
            username:''
        }
    },
    methods: {
        async registerUser(){
            if (this.name=='' || this.email=='' || this.password=='' || this.username==''){
                this.emptyMess=true
            }
            if(this.password.length <6){
                this.shortPass=true;
            }
        else{
            let userData = {
                name:this.name,
                username:this.username,
                email:this.email, 
                password:this.password,
            }
            
            
            await Auth.signUp(userData).then(() => {
                this.$router.push({ path: '/login' });
                store.authenticated=true;
                store.currentUserEmail=this.email;
            });
            }
        },
    }
}
</script>

<style scoped>
.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,.form button:active,.form button:focus {
  background: #43A047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4CAF50;
  text-decoration: none;
}
.form .register-form {
  display: none;
}
.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before, .container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #EF3B3A;
}
body {
  background: #76b852; /* fallback for old browsers */
  background: rgb(141,194,111);
  background: linear-gradient(90deg, rgba(141,194,111,1) 0%, rgba(118,184,82,1) 50%);
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;      
}
.errorMsg {
    color:red;
}
.btn-primary{
    background-color:green;
}
</style>