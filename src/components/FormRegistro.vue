<template>
    <div class="formulario">
        <v-form v-model="valid" action="" @submit.prevent="login">
            <v-container>
            <v-row
                :align="align"
                style="height: 150px;"
            >
                <v-col
                cols="15"
                md="3"
                >
                    <v-text-field
                        v-model="firstname"
                        :rules="nameRules"
                        :counter="10"
                        label="Nombre"
                        required
                    ></v-text-field>
                </v-col>

                <v-col
                cols="15"
                md="3"
                >
                    <v-text-field
                        v-model="lastname"
                        :rules="nameRules"
                        :counter="10"
                        label="Apellido"
                        required
                    ></v-text-field>
                </v-col>
                <v-col
                cols="15"
                md="3"
                >
                    <date-picker></date-picker>
                </v-col>

                <v-col
                cols="15"
                md="3"
                >
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                    ></v-text-field>
                </v-col>
                <v-col
                cols="15"
                md="3"
                >
                    <v-btn
                    color="primary"
                    class="mt-3"
                    @click="submit"
                    >
                    Registrarme :)
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
        
    </v-form>
  </div>
</template>
<script>
import DatePicker from './DatePicker.vue'
  export default {
  components: { DatePicker },
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || '¡No te olvides de tu nombre!',
        v => v.length <= 10 || 'El nombre tiene que tener más de una letra ;)',
      ],
      email: '',
      emailRules: [
        v => !!v || '¡No te olvides de tu correo!',
        v => /.+@.+/.test(v) || 'E-mail debe ser válido',
      ],
    }),
  }
</script>
<style scoped>
.formulario {
    width: 60%;
}

</style>