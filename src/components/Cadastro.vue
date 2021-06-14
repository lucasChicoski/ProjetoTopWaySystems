<template>
  <v-app>
    <div class="raiz">
      <v-col>
        <div class="formCadastro">
          <h1>Cadastar</h1>

          <v-text-field
            class="textInput"
            v-model="nome"
            label="Nome"
            outlined
            clearable
          ></v-text-field>

          <v-text-field
            class="textInput"
            v-model="email"
            label="Email"
            outlined
            clearable
          ></v-text-field>

          <v-text-field
            type="password"
            class="textInput"
            v-model="senha"
            label="Senha"
            outlined
            clearable
          ></v-text-field>
          <div class="buttons">
            <v-btn @click="submit()" elevation="2">Enviar</v-btn>
          </div>
        </div>
      </v-col>
    </div>
  </v-app>
</template>

<script>
export default {
data() {
    return {
        nome:'',
        email:'',
        senha:'',
    }
},
methods: {
    submit(){
        const dados = {
            nome: this.nome,
            email:this.email,
            senha:this.senha
        }

        this.$store.state.usuarios.push(dados)
        this.$router.push('/')
        console.log(this.users)
    }
},
computed: {
   users(){
       return this.$store.state.usuarios
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
  justify-content: center;
  flex-direction: column;
  background: yellow;
}
.raiz {
  background: grey;
  height: 100%;
}
</style>