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

export default {
    name:'HeaderCarrito',

    computed: {
      ...mapState([
        'carrito'
      ])
    },
    methods: {
        sumarPrecios(){
            let monto = 0;
            for(let i = 0; i < this.carrito.length; i++){
                monto += this.carrito[i].precio
            }
            let aPesos = new Intl.NumberFormat('es-AR', {
                style:'currency',
                currency:'ARS'
            });
            return aPesos.format(monto/100);
        },
        
    }
}
</script>
<style>
@import '../assets/estilos/header.css';
</style>