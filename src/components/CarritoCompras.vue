<template>
    <div class="fondo-carrito">
        <div class="carrito">
            <span class="material-icons-outlined cerrar">
                close
            </span>
            
        </div>
    </div>
</template>

<script>
export default {
    name:'CarritoCompras',
    props: {
        item:String
    }
}
</script>

<style>
@import '../assets/estilos/carrito.css';
</style>
