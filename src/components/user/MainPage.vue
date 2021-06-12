<template>
<v-app>
  <div id="root">
    <div class="menu">
      <v-navigation-drawer permanent>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
             {{nome}}
            </v-list-item-title>
            <v-list-item-subtitle> {{email}} </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item v-for="(item, i) in items" :key="i" link>
            <v-list-item-content>
              <v-btn v-on:click="google(i)" elevation="2" rounded text tile>{{
                item.title
              }}</v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>

    <div id="showView">
      <div v-for="(rotinas , indexs) in rotina" :key="indexs" class="rotina">
          <h1 v-if="indexs == '1'">{{rotinas.rotina}}</h1>
        </div>

      <div class="search">
        <v-text-field
          class="buttonSearch"
          v-model="message2"
          solo
          label="Pesquisar"
          clearable
        ></v-text-field>
      </div>

      <div class="grid">
        
      </div>
    </div>
  </div>
  </v-app>
</template>

<script>
// height="550" width="256"
//<v-list-item-title >{{item.title}}</v-list-item-title>
export default {
  data() {
    return {
      selecionado: 0,
      selectedItem: 0,
      grid: [
        { title: " Empresa " },
        { title: " Produto " },
        { title: " Categoria " },
        { title: " Cliente " },
      ],
      intensGrid: [],
      items: [
        { title: "Início" },
        { title: "Cadastro de Empresa", icon: "" },
        { title: "Cadastro de Produtos", icon: "" },
        { title: "Cadastro de Clientes", icon: "" },
        { title: "Sair"}
      ],

      right: null,
    };
  },

  methods: {
    google(index) {
      if (index == 0) {
        alert("Você clicou em inicio");
      } else if (index == 1) {
        this.$router.push('/cadastroempresa')
      } else if (index == 2) {
        this.$router.push('/cadastroprodutos')
      } else if (index == 3) {
        //window.location.href = "http://localhost:8080/cadastroclientes";
        this.$router.push('/cadastroclientes')
      } else if (index == 4){
        this.$router.push('/')
      }
    },
  },
computed:{
  rotina(){
    return this.$store.state.rotina
  },

  nome(){
    return this.$store.state.usuario.Nome
  },
  email(){
    return this.$store.state.usuario.Email
  }

}

};
</script>

<style>
#root {
  display: inline-flex;
}
.mx-auto {
  width: 256px;
  height: 97vh; /**vh = view port */
}

.menu {
  margin: 10px;
  width: 256px;
  height: auto;
}

#showView {
  margin: 10px;
  width: 1000vh;
  height: 97vh;
  background-color: white;
}

.rotina {
  background-color: yellow;
}

.buttonSearch {
  width: 500px;
}

.grid {
  background-color: yellow;
  
}
</style>