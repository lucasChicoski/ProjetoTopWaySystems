<template>
  <v-app>
    <div class="root">
      <v-col class="intenForm" cols="12" sm="6" md="3">
        <v-text-field label="Usuario" v-model="login"></v-text-field>

        <v-text-field label="Senha" v-model="senha"></v-text-field>

        <div class="buttonSubmit">
          <v-btn @click="entrar()">Entrar</v-btn>
        </div>
      </v-col>
    </div>
  </v-app>
</template>

<script>
/**
 * Obs: na raiz da pasta /my-app, rodar o comando 'npm run serve'
 */
export default {
  data() {
    return {
      email: "lucas.chicoski@outlook.com",
      nome: "Lucas",

      teste: [
        { nome: "Lucas", email: "lucas.chicoski@outlook.com", senha: "1234" },
        { nome: "Bruno", email: "bruno@outlook.com", senha: "1234" },
        { nome: "Rafaella", email: "rafaela@outlook.com", senha: "1234" },
        { nome: "Cloves", email: "cloves@outlook.com", senha: "1234" },
        { nome: "Luiza", email: "luiza@outlook.com", senha: "1234" },
      ],

      login: "",
      senha: "",
    };
  },

  methods: {
    entrar() {
      for (var i = 0; i < this.teste.length; i++) {
        if (
          this.login == this.teste[i].email &&
          this.senha == this.teste[i].senha
        ) {

          // const usuario1 = {
          //   Nome:this.teste[i].nome,
          //   Email:this.teste[i].email
          // }
           alert(this.teste[i].nome + "acessou");
          // window.location.href = "http://localhost:8080/main";
          this.$store.state.usuario.Nome = this.teste[i].nome
          this.$store.state.usuario.Email = this.teste[i].email
          this.$router.push("/main");
        } else if (this.login == "" || this.senha == "") {
          alert("preencha todos os campos");
        } else {
          //alert("usuario ou senha incorreto");
        }
      }
    },
  },

  computed: {
    rotina() {
      return this.$store.state.rotina;
    },
   usuario(){
      return this.$store.state.usuarios 
    }
  },
};
</script> 

<style>
.textArea {
  padding-top: 100px;
}

.intenForm {
  margin-top: 10%;
  margin-left: 38%;
  background-color: white;
  border-radius: 10px;
}

.buttonSubmit {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>