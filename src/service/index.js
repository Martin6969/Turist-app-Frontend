import $router from '@/router';
import axios from 'axios';

let Service = axios.create({
    baseURL: 'http://localhost:3100/',
    timeout: 1000
})

Service.interceptors.response.use(
    (response) => {
        console.log('Interceptor', response);
        return response;
    },
    (error) => {
        if(error.response.status == 401){
            console.error('Interceptor', error.response)
        }
    }
);

let Auth = {
    async signUp(userData) {
        let post = await Service.post('/korisnik', userData);
        return post
    },
    async login(email, password){
        let response = await Service.post("/prijava",{
           email: email,
           password: password
        });
        console.log(response)
        let user = await response.data;
        localStorage.setItem("user", JSON.stringify(user)); 
        return true;
    },
    logout(){
        localStorage.removeItem("user");
    },
    getUser(){
      return JSON.parse(localStorage.getItem("user"))  
    },
    getToken(){
      let user = Auth.getUser();
      if(user && user.token){
          return user.token
      }
      else{
          return false;
      }
    },
    state: {
        get authenticated() {
            return Auth.authenticated();
        },
        get userEmail(){
            let user = Auth.getUser()
            if (user){
                return user.email;
            }
        }
    }
}

let cityData = {
    async sendData(city_data){
        let postData = await Service.post('/grad', city_data);
        return postData
    },
    async getData(){
            let response = await Service.get('/gradovi');
            console.log("Odgovor s backenda: ",response);
            let data = response.data;
            
            data=data.map((doc)=>{
            return {
                id: doc._id,
                grad: doc.grad,
                slika: doc.slika,
                opis_grada: doc.opis_grada,
                regija: doc.regija,
                zupanija: doc.zupanija
            }    
            });
            console.log("Podaci su ovdje: ",data);
            return data;
    },
    async dataCategory(zupanija){

        let response = await Service.get(`/gradovi/${zupanija}`);
        let doc = response.data;
        doc = doc.map((doc)=>{
        console.log(doc);
        return {
            grad: doc.grad,
            slika: doc.slika,
            opis_grada: doc.opis_grada,
            regija: doc.regija,
            zupanija: doc.zupanija
        }
        });
        return doc;
    },

    async sendWishList(city_wishlist){
        let postWishList = await Service.post('/omiljeni_gradovi', city_wishlist);
        return postWishList
    }
}

export  { Auth, cityData }