<template>
  <v-app>
    <div class="root">
      <v-col class="intenForm" cols="12" sm="6" md="3">
        <div class="form">
        <img class="icon" src="../assets/arrow_entrance_in_internet_log_login_security_icon_127060.png" alt="">
        <h1 class="login">Login</h1>
          <v-text-field color="white" label="Usuario" v-model="login"></v-text-field>

          <v-text-field color="white" type="password" label="Senha" v-model="senha"></v-text-field>

          <div class="buttonSubmit">
            <v-btn  class="bt0" width="130" @click="entrar()">Entrar</v-btn>
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
         this.$store.state.usuario.Nome = this.users[array].nome;
           this.$store.state.usuario.Email = this.users[array].email;
         this.$router.push('/main')
       }else if(this.login == '' || this.senha == ''){
         alert('Preencha todos os Campos')
       }
     }
     
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
.bt0{
  margin-right: 5px;
}

.icon{
  width: 50px;
  height: 50px;
  
  display: flex;
  flex-direction: column;
}
.login{
  text-align: center;
  color: white;
}

</style>