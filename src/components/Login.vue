<template>
  <v-app>
    <div class="root">
      <v-col class="intenForm" cols="12" sm="6" md="3">
        <div class="form">
          <v-text-field label="Usuario" v-model="login"></v-text-field>

          <v-text-field label="Senha" v-model="senha"></v-text-field>

          <div class="buttonSubmit">
            <v-btn width="130" @click="entrar()">Entrar</v-btn>
            <v-btn width="130" @click="cadastrar()">Cadastrar</v-btn>
          </div>
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
    
     console.log(this.users.length)
     for(let array = 0 ; array < this.users.length;array++){
       console.log(this.users[array].email)
       if(this.login == this.users[array].email && this.senha == this.users[array].senha){
         this.$router.push('/main')
       }
     }
      // for (var i = 0; i < this.users[i].length; i++) {
      //   if (
      //     this.login == this.users[i].email &&
      //     this.senha == this.users[i].senha
      //   ) {
      //     alert(this.teste[i].nome + "acessou");
      //     // window.location.href = "http://localhost:8080/main";
      //     this.$store.state.usuario.Nome = this.users[i].nome;
      //     this.$store.state.usuario.Email = this.users[i].email;
      //     this.$router.push("/main");
      //   } else if (this.login == "" || this.senha == "") {
      //     alert("preencha todos os campos");
      //   } else {
      //     alert("usuario ou senha incorreto");
      //   }
      // }
    },

    cadastrar() {
      this.$router.push("/cadastrar");
    },
  },

  computed: {
    rotina() {
      return this.$store.state.rotina;
    },
    usuario() {
      return this.$store.state.usuario;
    },
    users() {
      return this.$store.state.usuarios;
      //console.log(this.$store.state.usuarios[0].email);
    },
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

.form {
  background: #78acde;
  box-shadow: 5px 5px 5px 1px rgb(179, 179, 157);
  border-radius: 20px;
  padding: 10%;
}
</style>