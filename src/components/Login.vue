<template>
  <div class="root">

    <div class="textArea">
      <v-col  class="intenForm" cols="12" sm="6" md="3">
        <v-text-field
         
          label="Usuario"
          v-model="login"
        ></v-text-field>
      </v-col>
   

   
      <v-col  class="intenForm" cols="12" sm="6" md="3">
        <v-text-field
          label="Senha"
          v-model="senha"
        ></v-text-field>
      </v-col>
    </div>

    <div class="buttonSubmit">
      <v-btn @click="entrar()">Entrar</v-btn>
    </div>
    
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
      usuarios: [
        { login: "lucas", senha: "1234" },
        { login: "gabriel", senha: "1234" },
      ],
      // login: "",
      // senha: "",
    };
  },
  methods: {
    entrar() {
      if (this.login == "lucas" && this.senha == "1234") {
        alert("lucas acessou");
        window.location.href = "http://localhost:8081/main";
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
.root {
position: relative;
margin-top: 10%;
}

.textArea{
  background-color: blue;
}

.intenForm{
background-color: brown;
  margin-left: 38%;
}

.buttonSubmit {
  background: rosybrown;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>