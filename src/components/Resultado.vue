<!--NT2 - PARCIAL - AQUINO PABLO HERNAN-->
<template>
  <section class="src-components-resultado">
    <div class="jumbotron">
      
    <div class="table-responsive">
      <table class="table">
        <tr class="bg-success text-white">
          <th>Numero de Pregunta</th>
          <th>Respuesta</th>
        </tr>
        <tr
          class="bg-info text-white"
          v-for="(pregunta, index) in preguntas"
          :key="index"
        >
          <td>{{ pregunta.pregunta }}</td>
          <td>{{ pregunta.respuestas }}</td>
        </tr>
      </table>

    </div>
    </div>
  </section>

</template>

<script>

export default {
  name: "src-components-resultado",
  props: [],
  mounted() {

  },
  data() {
    return {
      preguntas : [
      { pregunta: "1", respuestas: "b,d"  },
      { pregunta: "2", respuestas: "b" },
      { pregunta: "3", respuestas: "c" },
      { pregunta: "4", respuestas: "b" },
      { pregunta: "5", respuestas: "b,e" }]
    }
  },
  methods: {

  },
  computed: {
  }
}
</script>

<style scoped lang="css">

    .jumbotron {
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffb76b+0,ffa73d+50,ff7c00+51,ff7f04+100;Orange+Gloss */
    background: #ffb76b; /* Old browsers */
    background: -moz-linear-gradient(top,  #ffb76b 0%, #ffa73d 50%, #ff7c00 51%, #ff7f04 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  #ffb76b 0%,#ffa73d 50%,#ff7c00 51%,#ff7f04 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  #ffb76b 0%,#ffa73d 50%,#ff7c00 51%,#ff7f04 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffb76b', endColorstr='#ff7f04',GradientType=0 ); /* IE6-9 */

    color: white;
    }

    hr {
    background-color: #ddd;
    }

    .table td, .table th {
        vertical-align: middle;
    }

    .table td {

      background-color:brown;
    }

</style>
