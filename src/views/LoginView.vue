<script setup>
import axios from 'axios'
</script>
<script>
axios.get("https://netzwelt-devtest.azurewebsites.net/Territories/All", {
      headers: {
        'Accept': "application/json",
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }})
    .then((response) => {
      console.log(response.message);         
    });
export default {
    data() {
        return{
            username: '',
            password: ''
        }
        
    },
    methods: {
        
        async sendData() {
            const headers = {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            };
            //localStorage.storedData = this.username;
            localStorage.setItem("storedData", this.username);
            axios.post("https://netzwelt-devtest.azurewebsites.net/Account/SignIn",{headers}, {
                username: this.username,
                password: this.password
            })
            .then((response) => {
                if(response.message !== 'undefined'){
                    alert(response.message);
                }
                else{
                    localStorage.storedData = this.username;
                    this.$router.push('/home')
                }
            });
        }
    }
}
</script>

<template>
  <main>
    <div class="container">
        <div class="login-items-container">
            <div>
                <input id="username" type="text" v-model="username">
            </div>
            <div>
                <input id="password" type="password" name="" v-model="password">
            </div>
            <div>
                <button id="submit" class="button" @click="sendData">Login</button>
            </div>
        </div>
    </div>
  </main>
</template>

<style scoped>

</style>