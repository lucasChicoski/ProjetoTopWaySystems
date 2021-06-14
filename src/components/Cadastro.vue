<template>
  <v-app>
    <div class="raiz">
      <v-col class="itemform">
        <div class="formCadastro">
          <h1 class="login">Cadastar</h1>

          <v-text-field
            color="white"
            class="textInput"
            v-model="nome"
            label="Nome*"
            outlined
            clearable
          ></v-text-field>

          <v-text-field
            color="white"
            class="textInput"
            v-model="email"
            label="Email*"
            outlined
            clearable
          ></v-text-field>

          <v-text-field
            color="white"
            type="password"
            class="textInput"
            v-model="senha"
            label="Senha*"
            outlined
            clearable
          ></v-text-field>
          <div class="buttons">
            <v-btn @click="submit()" elevation="2">Enviar</v-btn>
          </div>

          <!--DIALOG-->
<v-dialog v-if="flagVericationFilds == 1"
      v-model="dialog"
      width="500"
    >
     <v-card>
        <v-card-title class="text-h5 grey lighten-2">
        Alerta!
        </v-card-title>

        <v-card-text>
         Você Precisa de preencher todos os campos de cadastro.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
           Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    
    </v-dialog>

        </div>
      </v-col>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      nome: "",
      email: "",
      senha: "",
      flagVericationFilds:0,
      dialog : true
    };
  },
  methods: {
    submit() {
      if (this.nome == "" || this.email == "" || this.senha == "") {
        //alert("Você precisa de preencher todos os campos");
        this.flagVericationFilds = 1
      } else {
        this.flagVericationFilds = 0
        const dados = {
          nome: this.nome,
          email: this.email,
          senha: this.senha,
        };

        this.$store.state.usuarios.push(dados);

        this.$router.push("/");
      }
    },
  },
  computed: {
    users() {
      return this.$store.state.usuarios;
    },
  },
};
</script>

<style>
.textInput {
  height: 60px;
}
.formCadastro {
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #78acde;
  box-shadow: 5px 5px 5px 1px rgb(179, 179, 157);
  border-radius: 20px;
  width: 500px;
}
.itemform {
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>