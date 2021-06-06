<template>
  <v-app>
    <div id="root">
      <div class="menu">
        <v-navigation-drawer permanent>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Lucas Chicoski
              </v-list-item-title>
              <v-list-item-subtitle> Lucas </v-list-item-subtitle>
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
        <div class="rotina">
          <p>Nome da Rotina</p>
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
          <v-container class="grey lighten-5">
            <v-row  :class="k === 1 ? 'mb-6' : ''" no-gutters>
            
              <v-col v-for="n in grid" :key="n">
                <v-card class="pa-2" outlined tile>
                  {{ n.title }}
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>

        <div class="actions">

          <div class="cadastro">
            <v-row justify="center">
              <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" dark v-bind="attrs" v-on="on">
                    Cadastrar Cliente
                  </v-btn>
                </template>
                <v-card>

                  <v-card-title>
                    <span class="text-h5">Cadastrar Cliente</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="tipo"
                            label="Tipo de Cliente*"
                            hint="Juridica ou Fisica"
                            persistent-hint
                            required
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="CPF/CNPJ*"
                            hint="Com pontuação"
                            persistent-hint
                            required
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="Nome*"
                            hint="Nome completo"
                            persistent-hint
                            required
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                    <small>*Campos nescessários</small>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="blue darken-1" text @click="dialog = false">
                      Fechar
                    </v-btn>

                    <v-btn color="blue darken-1" text @click="dialog = false">
                      Salvar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </div>


          <div class="buttonsexcludeandupdate">
          <div class="excluir">
            <v-btn color="error"  elevation="2" raised>Excluir</v-btn>
          </div>
           <div class="Editar">
            <v-btn color="success"  elevation="2" raised>Editar</v-btn>
          </div>
          </div>
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
      alignments: ["start"],

      grid: [
        { title: " Tipo de cliente " },
        { title: " CNPJ/CPF " },
        { title: " Nome " },
        
      ],

      intensGrid: [{tipo:"Fisica"},{CNPJ:'123123'},{nome:'Lucas'}],

      items: [
        { title: "Início" },
        { title: "Cadastro de Empresa", icon: "" },
        { title: "Cadastro de Produtos", icon: "" },
        { title: "Cadastro de Clientes", icon: "" },
      ],

      tipo:'',
      numeroprivado:'',
      nomeCliente:'',

      right: null,
      dialog: false,
    };
  },

  methods: {
    google(index) {
      if (index == 0) {
        this.$router.push("/main");
      } else if (index == 1) {
        alert("Cadastro de Empresa");
      } else if (index == 2) {
        alert("Cadastro de Produtos");
      } else if (index == 3) {
        //window.location.href = "http://localhost:8080/cadastroclientes";
        this.$router.push("/cadastroclientes");
      }
    },

    
  },
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

.actions{
  display: inline-flex;
  padding: 10%;
}

.excluir{
margin-left: 20px;
  margin-right: 20px;
}

.buttonsexcludeandupdate{
display: inline-flex;
  
  margin-top: -12px;
}

</style>