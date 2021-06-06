<template>

  <div class="root">

    
      <v-col  class="intenForm" cols="12" sm="6" md="3">
        <v-text-field
         
          label="Usuario"
          v-model="login"
        ></v-text-field>

        <v-text-field
          label="Senha"
          v-model="senha"
        ></v-text-field>

        <div class="buttonSubmit">
      <v-btn @click="entrar()">Entrar</v-btn>
    </div>
      </v-col>

    
    
  </div>

</template>

<script>
/**
 * Obs: na raiz da pasta /my-app, rodar o comando 'npm run serve'
 */

export default {
  el: "#app",
  data() {
    return {
      email:'lucas.chicoski@outlook.com',
      nome:'Lucas',
      
      login: "",
      senha: "",
    };
  },
  methods: {
    entrar() {
      if (this.login == this.email && this.senha == "1234") {
        alert("lucas acessou");
        window.location.href = "http://localhost:8083/main";
      } else if (this.login == "" || this.senha == "") {
        alert("preencha todos os campos");
      } else {
        alert("usuario ou senha incorreto");
      }
    },
  },
};
</script>

<style>


.textArea{
padding-top: 100px;
}

.intenForm{
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