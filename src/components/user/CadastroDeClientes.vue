<template>
  <v-app>
    <div id="root">
      <div class="menu">
        <v-navigation-drawer permanent>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{usuarios}}
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
          <p v-if="indexs == '0'">{{rotinas.rotina}}</p>
        </div>

        <div class="search">
          <v-text-field
            class="buttonSearch"
            
            solo
            label="Pesquisar"
            clearable
          ></v-text-field>
        </div>

        <div class="grid">
          <table>
            <thead>
              <tr v-for="n in grid" :key="n">
                <th>{{ n.tipo }}</th>
                <th>{{ n.cnpjcpf }}</th>
                <th>{{ n.nome }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cliente in clientes" :key="cliente">
                <td>{{ cliente.tipocliente }}</td>
                <td>{{ cliente.identificationcliente }}</td>
                <td>{{ cliente.nomecliente}}</td>
              </tr>
            </tbody>
          </table>
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
                          <v-text-field 
                            v-model="tipocliente"
                            label="Tipo de Cliente*"
                            hint="Juridica ou Fisica"
                            persistent-hint
                            
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                           v-model="identificationcliente"
                            label="CPF/CNPJ*"
                            hint="Com pontuação"
                            persistent-hint
                            
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                          v-model="nomecliente"
                            label="Nome*"
                            hint="Nome completo"
                            persistent-hint
                            
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

                    <v-btn color="blue darken-1" text @click="metodoAddArray()">
                      Salvar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </div>

          <div class="buttonsexcludeandupdate">
            <div class="excluir">
              <v-btn color="error" elevation="2" raised>Excluir</v-btn>
            </div>
            <div class="Editar">
              <v-btn color="success" elevation="2" raised>Editar</v-btn>
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
      
     tipocliente:'',
identificationcliente:'',
nomecliente:'',

      grid: [{ tipo: " Tipo de cliente ", cnpjcpf: "CNPJ/CPF", nome: "Nome" }],

      items: [
        { title: "Início" },
        { title: "Cadastro de Empresa", icon: "" },
        { title: "Cadastro de Produtos", icon: "" },
        { title: "Cadastro de Clientes", icon: "" },
        {title: "Sair"}
      ],

    
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
      }else if( index == 4){
        this.$router.push("/")
      }
    },
    metodoAddArray(){
        const usuario ={

        tipocliente:this.tipocliente,
        identificationcliente:this.identificationcliente,
        nomecliente:this.nomecliente

        }

        this.$store.state.clientes.push(usuario)
        this.dialog = false
        console.log(this.$store.state.clientes)
        
    }
  },
  
  computed: {
    clientes(){
      return this.$store.state.clientes;
    },
    rotina(){
      return this.$store.state.rotina;
    },
     usuarios(){
      return this.$store.state.usuario.Nome
    },
    email(){
      return this.$store.state.usuario.Email
    }
    
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

.actions {
  display: inline-flex;
  padding: 10%;
}

.excluir {
  margin-left: 20px;
  margin-right: 20px;
}

.buttonsexcludeandupdate {
  display: inline-flex;

  margin-top: -12px;
}
</style>