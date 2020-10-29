<!--NT2 - PARCIAL - AQUINO PABLO HERNAN-->
<template>
  <section class="src-components-formulario">
    <div class="jumbotron">
      <h1>Ingreso de gastos:</h1>
      <form novalidate autocomplete="off" @submit.prevent="enviar()">
          <!-- ------------ -->
          <!-- CAMPO NOMBRE -->
          <!-- ------------ -->
          <div class="form-group">
                <label for="nombre">Nombre</label>
                <input 
                    type="text"
                    id="nombre"
                    class="form-control"
                    v-model="$v.f.nombre.$model"
                >
                <!-- CARTELES DE VALIDACIÓN -->
                <div v-if="$v.f.nombre.$error && $v.f.nombre.$dirty" class="alert alert-danger mt-1">
                    
                    <div v-if="$v.f.nombre.required.$invalid">(*) Campo requerido</div>
                    <div v-if="$v.f.nombre.minLength.$invalid">(*) Debe ingresar al menos {{ $v.f.nombre.minLength.$params.min }} caracteres.</div>
                    <div v-else-if="$v.f.nombre.maxLength.$invalid">(*) Debe ingresar como máximo {{ $v.f.nombre.maxLength.$params.max }} caracteres.</div>

                </div>
          </div>
          <!-- ------------ -->
          <!--  CAMPO DESCRIPCION  -->
          <!-- ------------ -->
          <div class="form-group">
                <label for="descripcion">Descripcion</label>
                <input 
                    type="text"
                    id="descripcion"
                    class="form-control"
                    v-model="$v.f.descripcion.$model"
                >
                <!-- CARTELES DE VALIDACIÓN -->
                <div v-if="$v.f.descripcion.$error && $v.f.descripcion.$dirty" class="alert alert-danger mt-1">
                    <div v-if="$v.f.descripcion.required.$invalid">(*) Campo requerido</div>                    
                </div>
          </div>
          <!-- ------------ -->
          <!--  CAMPO IMPORTE  -->
          <!-- ------------ -->
          <div class="form-group">
                <label for="importe">Importe</label>
                <input 
                    type="number"
                    id="importe"
                    class="form-control"
                    v-model.number="$v.f.importe.$model"
                >
                <!-- CARTELES DE VALIDACIÓN -->
                <div v-if="$v.f.importe.$error && $v.f.importe.$dirty" class="alert alert-danger mt-1">
                    <div v-if="$v.f.importe.required.$invalid">(*) Campo requerido.</div>
                </div>
          </div>
          <!-- ------------ -->
          <!-- BOTÓN ENVÍO  -->
          <!-- ------------ -->
          <div class="form-group">
                <input 
                    type="submit"
                    :disabled="$v.$invalid"
                    class="btn btn-success mt-4"
                    value="Enviar"
                >
          </div>
      </form>

    </div>
  </section>
</template>

<script>
 //VALIDADORES:
  import { required, minLength, maxLength } from '@vuelidate/validators'

  //Validador personalizado para validar espacios:
  /*function validarEspacios(value){
    return !value.includes(' ')
  }*/

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {
        this.getDatosFormAxios()
    },
    data () {
      return {
          f: this.resetForm(),
          url : 'https://5f99e54250d84900163b92f3.mockapi.io/parcial'
      }
    },
    validations: {
      f: {
        nombre: { 
          required,
          minLength: minLength(5),
          maxLength: maxLength(15)
        },
        descripcion: { 
          required,
        },
        importe: { 
          required
        }
      }
    },

    methods: {

        delay : ms => new Promise(resolve => setTimeout(resolve, ms)),

        async sendDatosFormAxios(datos) {
            try{
              let res = await this.axios.post(this.url, datos, {'content-type': 'application/json'})
              await this.delay(2000)
              console.log(res.data)
            }catch(error){
              console.log('HTTP POST ERROR', error)
            }
        },

        async getDatosFormAxios() {
            try{
              let res = await this.axios(this.url)
              console.log(res.data)
            }catch(error){
              console.log('HTTP GET ERROR', error)
            }  
        },

        /* Submit del formulario */
        async enviar() {

            this.$v.$touch()

            if(!this.$v.$invalid){
              let form = this.f
              console.log(form)
              await this.sendDatosFormAxios(form)
              this.f = this.resetForm()
              this.$v.$reset()
            }
        },

        resetForm() {
            return {
               nombre: '',
               descripcion: '',
               importe: ''
            }
        }
    },
    computed: {

    }
}

</script>

<style scoped lang="css">

  .jumbotron {
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#3b679e+0,2b88d9+50,207cca+51,7db9e8+100;Blue+Gloss+%232 */
    background: #3b679e; /* Old browsers */
    background: -moz-linear-gradient(top,  #3b679e 0%, #2b88d9 50%, #207cca 51%, #7db9e8 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  #3b679e 0%,#2b88d9 50%,#207cca 51%,#7db9e8 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  #3b679e 0%,#2b88d9 50%,#207cca 51%,#7db9e8 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3b679e', endColorstr='#7db9e8',GradientType=0 ); /* IE6-9 */
    color: white;
  }

  hr {
    background-color: #ddd;
  }

  h1 {

    color: rgb(53, 53, 70);
  }

  pre {

    color: white;
  }

</style>
