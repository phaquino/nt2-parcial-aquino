<!--NT2 - PARCIAL - AQUINO PABLO HERNAN-->
<template>
  <div id="app" class="container-fluid mt-3">
      <div class="jumbotron">
          <h1>NT2 - PARCIAL - AQUINO PABLO HERNAN</h1>
          <br>
            <Navbar />
            <router-view/>
       </div> 
  </div> 
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>

  #app {

  }

  h1 {
    font-family: sans-serif bold;
    color: rgb(44, 44, 56);
    text-align: center;
  }

</style>