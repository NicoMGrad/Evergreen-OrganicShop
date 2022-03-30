<template>
  <div class="contenedor-card">
    <div class="card">
          <div class="card-primary">
              <div class="combo-item-price">
                  <p class="card-title">{{producto}}</p>
                  <div class="div-price">
                      <p :inner-html.prop="precio | formatPrecioCentavos" class="price-valor">

                      </p>
                      <p class="price-cant">
                          x {{cantidad}} grs
                      </p>
                  </div>
              </div>
              <img :src="require(`../assets/imgs/${srcimg}`)" :alt="producto" :title="producto" class="item-img" />
          </div>
          <div class="card-secondary">
              <div class="item-description">
                  <p>{{descripcion1}}</p>
              </div>
              <div>
                  <div class="item-info">
                      <div>
                          <p class="info-title">Envío</p>
                          <p class="info-data">{{envio | envios}}</p>
                      </div>
                      <div>
                          <p class="info-title">Norma</p>
                          <p class="info-data">{{norma}}</p>
                      </div>
                      <div>
                          <p class="info-title">Duración</p>
                          <p class="info-data">{{dias}} días</p>
                      </div>
                  </div>
                  <span class="material-icons-outlined add-to-cart" 
                  @click="agregarCarrito()">
                      add_shopping_cart
                  </span>
              </div>
              
          </div>
      </div>
  </div>
</template>

<script>
import DetalleProductos from '../mixins/DetalleProductos';
import agregarCarrito from 'vue'
import { mapState } from 'vuex'

export default {
  name: 'CardProducto',
  mixins:[DetalleProductos, agregarCarrito],
  props: ['product'],
  computed: {
      ...mapState([
        'carrito'
    ])
  }
}
</script>

<style scoped>
@import '../assets/estilos/style.css';
</style>
