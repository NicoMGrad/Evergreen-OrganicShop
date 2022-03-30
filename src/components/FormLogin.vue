<template>
    <div class="formulario">
        <v-form v-model="valid" action="" @submit.prevent="login">
            <v-container>
            <v-row
                :align="align"
                style="height: 150px;"
            >

                <v-col
                cols="12"
                md="4"
                >
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                    ></v-text-field>
                </v-col>
                <v-col
                cols="12"
                md="4"
                >
                    <v-text-field
                        v-model="password"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                        name="input-10-1"
                        label="Contraseña"
                        hint="Al menos 8 caracteres"
                        counter
                        @click:append="show1 = !show1"
                    ></v-text-field>
                </v-col>
                <v-col
                cols="12"
                md="4"
                >
                    <v-btn
                    color="primary"
                    class="mt-3"
                    @click="submit"
                    >
                    Ingresar
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
        
    </v-form>
  </div>
</template>
<script>
  export default {
    data: () => ({
      valid: false,
      email: '',
      emailRules: [
        v => !!v || '¡No te olvides de tu correo!',
        v => /.+@.+/.test(v) || 'E-mail debe ser válido',
      ],
      show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: '',
        rules: {
            required: value => !!value || 'Required.',
            min: v => v.length >= 8 || 'Min 8 caracteres',
            emailMatch: () => (`El email y contraseña introducidos no son válidos`),
        },
    }),
  }
</script>
<style scoped>
.formulario {
    width: 60%;
}

</style>