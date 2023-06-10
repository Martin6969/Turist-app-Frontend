<template>
<div>
<div style="position:fixed;width:100%;z-index:99;background-color: #fff!important;">
<div class="container-fluid py-4" style="background-color:green">
        <div class="container">
            <div class="row">
                <div class="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
                </div>
            </div>
        </div>
    </div>
<div class="container-fluid position-relative nav-bar p-0">
        <div class="container-lg position-relative p-0 px-lg-3" style="z-index: 9;">
            <nav class="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 pl-3 pl-lg-5">
                <router-link to="/" class="navbar-brand">
                    <span style="display: inline-flex;"><h2 class="m-0"><span class="text-green">Tourist<i class="fa-solid fa-plane" style="margin-top: 20px;color:green" aria-hidden="true"></i>Guide</span></h2></span>
                </router-link>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                    <div class="navbar-nav ml-auto py-0">
                        <p v-if="auth.userEmail" class="userDisplay">Pozdrav, {{auth.userEmail}}!</p>
                        <router-link to="/" class="nav-item nav-link">Početna</router-link>
                        <router-link to="/city" v-if="auth.userEmail" class="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab">Dodajte grad</router-link>
                        <router-link to="/wishlist" v-if="auth.userEmail" class="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab">Omiljeni gradovi</router-link>
                        <router-link to="/about" class="nav-item nav-link">O nama</router-link>
                        <router-link v-if="!auth.userEmail" to="/login" class="nav-link" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab">Prijava</router-link>
                        <router-link v-if="!auth.userEmail" to="/register" class="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab">Registracija</router-link>
                        <router-link to="" v-if="auth.userEmail" class="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab" @click="signOut()">Odjava</router-link>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</div>
</div>
</template>

<script>
import store from '@/store.js'
import { Auth } from '@/service/index.js';
export default{
    data:function(){
    return { 
      store,
      auth: Auth.state,
    }
  },
  methods:{
    signOut()
    {
        Auth.logout();
        this.$router.go();
	},
  }
}
</script>

<style>


.text-green{
    font-size:30px;
    color:green;
}
.navbar-collapse {
    font-size: 15px;
}
.nav-link {
    padding: 0px;
}
.userDisplay {
    color:rgba(0,0,0,.5);
    margin-right:20px;
}
.nav-bar {
    z-index:99999;
}
</style>
