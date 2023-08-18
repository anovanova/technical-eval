<script setup>
import axios from 'axios'

</script>

<script>
//axios.get("https://netzwelt-devtest.azurewebsites.net/Territories/All")
  //.then((response) => {
    //console.log(response.message);         
  //});
  export default {
    methods: {
        logout() {
            /*const headers = {
                'Content-Type': 'application/json',
            };*/
            //localStorage.storedData = this.username;
            localStorage.removeItem("storedData");
            this.$router.push('/')
            /*axios.post("https://netzwelt-devtest.azurewebsites.net/Account/SignIn",{headers}, {
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
            });*/
        }
    }
  }
</script>

<template>
  <main>
    <button @click="logout">Logout</button>
  </main>
</template>
