<!--NT2 - PARCIAL - AQUINO PABLO HERNAN-->
<template>
  <section class="src-components-navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-info">
      
      <router-link to="/">
          <a class="navbar-brand" href="#">Formulario</a>
      </router-link>
      
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

          <li class="nav-item">

             <router-link to="/tabla">
                <a class="nav-link" href="#">Tabla</a>
             </router-link>

          </li>
          <li class="nav-item">

             <router-link to="/resultado">
                <a class="nav-link" href="#">Resultado</a>
             </router-link>

          </li>

        </ul>
      </div>
    </nav>
  </section>
</template>

<script>

  export default  {
    name: 'src-components-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}

</script>

<style scoped lang="css">
</style>
