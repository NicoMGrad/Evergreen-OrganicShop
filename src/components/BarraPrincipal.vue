<template>
    <v-app-bar
      app
      color="white"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Evergreen Logo"
          class="shrink mr-2"
          contain
          src="../assets/imgs/logo_evergreen01.svg"
          transition="scale-transition"
          width="150"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        outlined
        color="lime accent-3"
        
      >
        Carrito
      </v-btn>
    </v-app-bar>
</template>
<script>
export default {
    name:'BarraPrincipal'
}
</script>