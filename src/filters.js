//NT2 - PARCIAL - AQUINO PABLO HERNAN
export default {

    methods: {

      formatearFecha: function(fyh){

        return new Date(fyh).toLocaleString()
      }
      //Metodo para agregarle $  al comienzo del texto:
      ,wrap(value){

        return '$ '+value
      }
    }
  }
