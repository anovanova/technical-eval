<script setup>
import axios from 'axios'

</script>

<script>
axios.get("https://netzwelt-devtest.azurewebsites.net/Territories/All")
  .then((response) => {
    console.log(response.message);         
  });
</script>

<template>
  <main>

  </main>
</template>
