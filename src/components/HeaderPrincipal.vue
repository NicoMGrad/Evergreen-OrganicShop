<template>
    <div class="header">
        <img src="../assets/imgs/logo_evergreen01.svg" alt="Evergreen tienda orgánica" class="logo" />
        <div class="combo-carrito">
            <p style="color:var(--rojo)"> <span class="font-weight-bold">{{ sumarPrecios() }}</span></p>
            <modal-carrito></modal-carrito>
        </div>
        <!--
        <div v-for="producto in carrito" :key="producto.index">
            <span>Producto: {{ producto.producto }}</span>
            <span>Precio: {{ producto.precio }}</span>
        </div>
        -->
    </div>
</template>
<script>
import { mapState } from 'vuex'
import ModalCarrito from './ModalCarrito.vue'
import sumarPrecios from 'vue'

export default {
    name:'HeaderPrincipal',
    components:{
        ModalCarrito
    },
    computed: {
      ...mapState([
        'carrito'
        ])
    },
    mixins: [ sumarPrecios ]
}
</script>
<style>
@import '../assets/estilos/header.css';
</style>