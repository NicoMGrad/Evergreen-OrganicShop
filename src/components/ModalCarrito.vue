<template>
  <v-row justify="center">
    <button class="btn-carrito" @click.stop="dialog = true">
      <span class="material-icons-outlined">add_shopping_cart</span><span class="marker-carrito">{{ carrito.length }}</span>
    </button>
    

    <v-dialog
      v-model="dialog"
      max-width="50%"
    >
    
      <v-card class="pa-6">
        <div class="item-carrito" v-for="producto in carrito" :key="producto.id">

            <v-card-title class="text-h6 width-30">
                {{ producto.producto }}  <span>x {{ producto.cantidad }} grs.</span>
            </v-card-title>
            <div class="d-flex align-center width-30">
              <v-card-title>
                Packs:
              </v-card-title>
              <button class="btn-items" @click="restarItem(producto)">-</button>
              <v-card-title class="rojo font-weight-regular">
                  {{ producto.contador }} u.
              </v-card-title>
              <button class="btn-items" @click="sumarItem(producto)">+</button>
            </div>
            <button @click.prevent="eliminarProductoEnCarrito(producto)" class="width-20">Eliminar</button>
            <v-card-title class="rojo font-weight-regular width-20 text-right">
                {{ producto.precio | formatPrecio }}
            </v-card-title>
            
        </div>
        <div class="item-carrito">
          <v-card-title class="text-h6">
                Monto total:
            </v-card-title>
            <v-card-title class="rojo font-weight-bold">
                {{ sumarPrecios() }}
            </v-card-title>
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Continuar comprando
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Check out
          </v-btn>
        </v-card-actions>
      </v-card>
      
    </v-dialog>
  </v-row>
</template>
<script>
import { mapState } from 'vuex'
import sumarPrecios from 'vue'
import sumarItem from 'vue'

export default {
  name:'ModalCarrito',
  data () {
    return {
      dialog: false,
    }
  },
  computed: {
      ...mapState([
        'carrito'
    ])
  },
  mixins: [ sumarPrecios, sumarItem ],
  methods: {
    eliminarProductoEnCarrito(producto){
      this.$store.dispatch('eliminarProductoEnCarrito', producto);
    },
    sumarItem(producto) {
      this.$store.dispatch('sumarItem', producto);
    },
    restarItem(producto) {
      this.$store.dispatch('restarItem', producto);
    }
  }
}
</script>
<style scoped>
.btn-items {
  color: var(--verde-medio);
  font-size: 1.5rem;
  background: var(--gris-claro);
  font-weight: 500;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: var(--animacion-hover);
}
  .btn-items:hover {
    transform: scale(1.1);
    background: var(--verde-claro);
    color: #ffffff;
    transition: var(--animacion-hover);
  }
  .btn-items:active {
    transform: scale(.9);
    transition: var(--animacion-hover);
  }

  .width-30 {
    width: 30%;
  }
  .width-20 {
    width: 20%;
  }
</style>