<!--NT2 - PARCIAL - AQUINO PABLO HERNAN-->
<template>
  <section class="src-components-tabla">
    <div class="jumbotron">
      
    <div class="table-responsive">
      <table class="table">
        <tr class="bg-success text-white">
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Importe</th>
          <th>Fecha</th>
        </tr>
        <tr
          class="bg-info text-white"
          v-for="(gasto, index) in gastos"
          :key="index"
        >
          <td>{{ gasto.nombre }}</td>
          <td>{{ gasto.descripcion }}</td>
          <td>{{ wrap(gasto.importe) }}</td>
          <td>{{ formatearFecha(gasto.createdAt) }}</td>
        </tr >

        <tr class="bg-warning text-white" >Resultado Total = $ {{ calcularTotalGastos.total }}</tr>

      </table>

      <div class="alert alert-info">
        <!-- Calcular cantidad de gastos -->
        <div v-if="calcularCantidadGastos.ninguno">
          No hay gastos disponibles
        </div>
        <div v-else>
          Hay {{ calcularCantidadGastos.total }} registros de gastos
        </div>
      </div>
    </div>
    </div>
  </section>

</template>

<script>
//Importo los FILTERS para formatear las fechas:
import filters from '../filters.js'

export default {
  name: "src-components-tabla",
  mixins: [filters],
  props: [],
  mounted() {
    this.getGastosAxios()
  },
  data() {
    return {
      gastos: [],
      nombre: "",
      descripcion: "",
      importe: "",
      createdAt: ""
    };
  },
  methods: {
    /* Pedido de datos almacenados en el backend */
    getGastosAxios() {
        let url = 'https://5f99e54250d84900163b92f3.mockapi.io/parcial'

        this.axios(url)
        .then(res => {
          console.log(res.data)
          this.gastos = res.data
        })
        .catch(error => console.log('HTTP GET ERROR', error))
    }
  },
  computed: {
    calcularCantidadGastos() {
      let cant = this.gastos.filter((gasto) => gasto.importe).length
      let total =  this.gastos.length
    
      return {
        total: total,
        ninguno: cant == 0
      };
    },
    calcularTotalGastos(){

      let total = this.gastos.filter((gasto) => gasto.importe).length

      return {

        total: total
      }
    }
  },
};
</script>

<style scoped lang="css">

    .jumbotron {
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#fcecfc+0,fba6e1+50,fd89d7+51,ff7cd8+100;Pink+Gloss+%232 */
    background: #fcecfc; /* Old browsers */
    background: -moz-linear-gradient(top,  #fcecfc 0%, #fba6e1 50%, #fd89d7 51%, #ff7cd8 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  #fcecfc 0%,#fba6e1 50%,#fd89d7 51%,#ff7cd8 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  #fcecfc 0%,#fba6e1 50%,#fd89d7 51%,#ff7cd8 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fcecfc', endColorstr='#ff7cd8',GradientType=0 ); /* IE6-9 */

    color: white;
    }

    hr {
    background-color: #ddd;
    }

    .table td, .table th {
        vertical-align: middle;
    }

</style>
