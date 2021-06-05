<template>


  <div id="app">
    <p>Login</p>
    <input type="text" v-model="login" />
    <p>Senha</p>
    <input type="passworld" v-model="senha" />
    <button v-on:click="entrar">Entrar</button>
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
            {login:'lucas',senha:'1234'},
            {login:'gabriel',senha:'1234'}
        ]
     // login: "",
     // senha: "",
    };
  },
  methods: {
    entrar() {
      if (this.login == "lucas" && this.senha == "1234") {

        alert("lucas acessou");
        window.location.href = "http://localhost:8080/main";
      } else if (this.login == "" || this.senha == "") {

        alert("preencha todos os campos");
      } else {

        alert("usuario ou senha incorreto");

      }
    },
  },
};
</script>