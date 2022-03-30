<template>
  <v-app>
    <header-principal></header-principal>
    <v-main class="pa-6 pt-12">
      <div class="contenedor-productos">
        <card-producto v-for="producto in productos" :key="producto.producto" :producto="producto.producto" :srcimg="producto.srcimg" :precio="producto.precio" :cantidad="producto.cantidad" :descripcion1="producto.descripcion1" :envio="producto.envio" :norma="producto.norma" :dias="producto.dias" :id="producto.id"></card-producto>
      </div>
      <!--
      <h2 class="margint2">Form Registro</h2>
      <form-registro></form-registro>
      <h2 class="margint2">Form Login</h2>
      <form-login></form-login>
      -->
    </v-main>
  </v-app>
</template>

<script>
import CardProducto from './components/CardProducto.vue'
import HeaderPrincipal from './components/HeaderPrincipal.vue'
import { mapState } from 'vuex'

export default {
    name: 'App',
    components: {
      CardProducto,
      HeaderPrincipal,
    },
    computed: {
      ...mapState([
        'productos'
      ])
    },
    mounted() {
      this.$store.dispatch('traerProductos');
    }/*,
    async created() {
        let url = 'arrayProductos'
        await this.$urlApi.get(url).then((response) => this.arrayproductos = response.data)
    }*/
  };
</script>
<style>
 .v-application p {
   margin-bottom:unset;
 }

 .theme--light.v-input input, .theme--light.v-input textarea {
   color: var(--rojo);
 }

 .v-application .error--text {
  color: var(--rojo) !important;
  caret-color: var(--rojo) !important;
}
.margint2 {
  margin-top: 2rem;
}

.contenedor-productos {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
