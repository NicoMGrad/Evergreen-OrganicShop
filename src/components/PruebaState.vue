<template>
    <p>{{ carrito[0].producto }}</p>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'PruebaState',
    computed: {
        ...mapState([
        'carrito'
        ])
    }
}
</script>