<template>
  <v-app>
    <div id="root">
      <div class="menu">
        <v-navigation-drawer permanent>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{ usuarios }}
              </v-list-item-title>
              <v-list-item-subtitle> {{ email }} </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense nav>
            <v-list-item v-for="(item, i) in items" :key="i" link>
              <v-list-item-content>
                <v-btn
                  v-on:click="navigation(i)"
                  elevation="2"
                  rounded
                  text
                  tile
                  >{{ item.title }}</v-btn
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </div>

      <div id="showView">
        <div v-for="(rotinas, indexs) in rotina" :key="indexs" class="rotina">
          <h1 v-if="indexs == '2'">{{ rotinas.rotina }}</h1>
        </div>

        <!--Área de Pesquisa-->
        <div class="search">
          <div class="searcharea">
            <v-text-field
              v-model="textoPesquisa"
              class="buttonSearch"
              solo
              label="Pesquisar"
              clearable
            ></v-text-field>
          </div>

          <div class="botoes">
            <v-btn class="btn2" width="170" elevation="2" @click="pesquisar()"
              >Pesquisar</v-btn
            >
            <v-btn class="btn1" elevation="2" @click="flagClearSearch = 0"
              >Limpar Pesquisa</v-btn
            >
          </div>
        </div>
        <!--GRID-->
        <div class="grid">
          <table>
            <thead>
              <tr class="meio" v-for="n in grid" :key="n">
                <th>{{ n.id }}</th>
                
                <th>{{ n.cnpjcpf }}</th>
                <th>{{ n.nome }}</th>
                <th>{{ n.nomefantasia }}</th>
                <th>{{ n.endereco }}</th>
                <th>{{ n.cidade }}</th>
                <th>{{ n.estado }}</th>
              </tr>
            </thead>
            <tbody>
            
              <tr v-for="(empresas, i) in empresa" :key="i">
              
                <td v-if="flagClearSearch == 0">{{ empresas.id }}</td>
                
                <td v-if="flagClearSearch == 0">{{ empresas.cnpj }}</td>
                <td v-if="flagClearSearch == 0">
                  {{ empresas.nomeEmpresa }}
                </td>
                <td v-if="flagClearSearch == 0">{{ empresas.nomeFantasia }}</td>
                <td v-if="flagClearSearch == 0">
                  {{ empresas.enderecoEmpresa }}
                </td>
                <td v-if="flagClearSearch == 0">{{ empresas.cidadeEmpresa }}</td>
                <td v-if="flagClearSearch == 0">{{ empresas.estadoEmpresa }}</td>
              </tr>
              <!--Else da pesquisa-->
              <tr v-for="(empresa, i) in resultSearch" :key="i">
                <td v-if="flagClearSearch == 1">{{ empresa.id }}</td>
                <td v-if="flagClearSearch == 1">{{ empresa.cnpj }}</td>
                <td v-if="flagClearSearch == 1">{{ empresa.nomeempresa }}</td>
                <td v-if="flagClearSearch == 1">{{ empresa.nomefantasia }}</td>
                <td v-if="flagClearSearch == 1">
                  {{ empresa.endereco }}
                </td>
                <td v-if="flagClearSearch == 1">{{ empresa.cidade }}</td>
                <td v-if="flagClearSearch == 1">{{ empresa.estado }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--Cadastrar-->

        <div class="actions">
          <div class="cadastro">
            <v-row justify="center">
              <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" dark v-bind="attrs" v-on="on">
                    Cadastrar Empresa
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
                            v-model="cnpj"
                            label="CNPJ*"
                            
                            persistent-hint
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="nomeEmpresa"
                            label="Nome da empresa*"
                           
                            persistent-hint
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="nomeFantasia"
                            label="Nome fantasia*"
                           
                            persistent-hint
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="enderecoEmpresa"
                            label="Endereço*"
                            hint="Nome da logradouro"
                            persistent-hint
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="cidadeEmpresa"
                            label="Cidade*"
                            persistent-hint
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="estadoEmpresa"
                            label="Estado*"
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

                    <v-btn color="blue darken-1" text @click="cadastrar()">
                      Salvar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </div>

          <!--                    Botão Excluir    -->

          <div class="buttonsexcludeandupdate">
            <div class="excluir">
              <v-row justify="center">
                <v-dialog v-model="dialogExcluir" persistent max-width="290">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="error" dark v-bind="attrs" v-on="on">
                      Excluir
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title class="text-h5">
                      Digite o Id que deseja excluir
                    </v-card-title>
                    <v-text-field
                      v-model="functionDelete"
                      label="ID"
                      solo
                      dense
                    ></v-text-field>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="green darken-1"
                        text
                        @click="dialogExcluir = false"
                      >
                        Cancelar
                      </v-btn>
                      <v-btn
                        v-on:click="excluir()"
                        color="green darken-1"
                        text
                        @click="dialogExcluir = false"
                      >
                        Excluir
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>
            </div>

            <!--Editar usuario-->

            <div class="Editar">
              <v-row justify="center">
                <v-dialog v-model="dialogEditar" persistent max-width="600px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark v-bind="attrs" v-on="on">
                      Editar
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">Editar Clientes</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="idEditar"
                              label="Id*"
                              persistent-hint
                            ></v-text-field>
                          </v-col>

                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="cnpjEditar"
                              label="CNPJ"
                             
                              persistent-hint
                            ></v-text-field>
                          </v-col>

                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="nomeEmpresaEditar"
                              label="Nome da Empresa"
                             
                              persistent-hint
                            ></v-text-field>
                          </v-col>

                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="nomeFantasiaEditar"
                              label="Nome Fantasia"
                             
                              persistent-hint
                            ></v-text-field>
                          </v-col>

                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="enderecoEditar"
                              label="Endereço"
                              hint="Logradouro"
                              persistent-hint
                            ></v-text-field>
                          </v-col>

                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="cidadeEditar"
                              label="Cidade"
                              persistent-hint
                            ></v-text-field>
                          </v-col>

                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="estadoEditar"
                              label="Estado"
                              persistent-hint
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                      <small>*Campos nescessários</small>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn
                        color="blue darken-1"
                        text
                        @click="dialogEditar = false"
                      >
                        Fechar
                      </v-btn>

                      <v-btn color="blue darken-1" text v-on:click="editar()">
                        Salvar
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      count: 0, //contador de ID

      //--------------Variáveis método Cadastrar--------------------------------------------------
      cnpj: "",
      nomeEmpresa: "",
      nomeFantasia: "",
      enderecoEmpresa: "",
      cidadeEmpresa: "",
      estadoEmpresa: "",

      //--------------------Método Delete--------------------------------------------------
      functionDelete: "",

      //--------------Cabeçalho do Grid--------------------------------------------------
      grid: [
        {
          id: "Id",
          
          cnpjcpf: "CNPJ",
          nome: "Nome",
          nomefantasia: " Nome Fantasia ",
          endereco: "Endereço",
          cidade: "Cidade",
          estado: "Estado",
        },
      ],
      //--------------Itens do Menu--------------------------------------------------
      items: [
        { title: "Início" },
        { title: "Cadastro de Empresa", icon: "" },
        { title: "Cadastro de Produtos", icon: "" },
        { title: "Cadastro de Clientes", icon: "" },
        { title: "Sair" },
      ],
      //--------------PESQUISA--------------------------------------------------
      textoPesquisa: "",
      flagClearSearch: 0,
      resultSearch: [],
      //----------------------------------------------------------------------

      //--------------EDITAR--------------------------------------------------
      idEditar: "",
      cnpjEditar: "",
      nomeEmpresaEditar: "",
     nomeFantasiaEditar: "",
      enderecoEditar: "",
      cidadeEditar: "",
      estadoEditar: "",
      //----------------------------------------------------------------------
      right: null,
      dialog: false,
      dialogExcluir: false,
      dialogEditar: false,
    };
  },

  methods: {
    navigation(index) {
      if (index == 0) {
        this.$router.push("/main");
      } else if (index == 1) {
       console.log("")
      } else if (index == 2) {
       this.$router.push('/cadastroprodutos')
      } else if (index == 3) {
        //window.location.href = "http://localhost:8080/cadastroclientes";
        this.$router.push("/cadastroclientes");
      } else if (index == 4) {
        this.$router.push("/");
      }
    },
    cadastrar() {
      const usuario = {
        id: (this.count = this.count + 1),
        cnpj: this.cnpj,
        nomeEmpresa: this.nomeEmpresa,
        nomeFantasia: this.nomeFantasia,
        enderecoEmpresa: this.enderecoEmpresa,
        cidadeEmpresa: this.cidadeEmpresa,
        estadoEmpresa: this.estadoEmpresa,
      };

      this.$store.state.empresa.push(usuario);
      this.dialog = false;

      this.cnpj = "";
      this.nomeEmpresa = "";
      this.nomeFantasia = "";
      this.enderecoEmpresa = "",
      this.cidadeEmpresa = "",
      this.estadoEmpresa = ""

    },

    excluir() {
      for (var array = 0; array <= this.empresa.length; array++) {
        if (this.empresa[array].id == this.functionDelete) {
          var index = this.empresa.indexOf(this.empresa[array]);
          this.$store.state.empresa.splice(index, 1);
          this.functionDelete = "";
        }
      }
    },

    editar() {
      for (var array = 0; array <= this.empresa.length; array++) {
        if (this.idEditar == this.empresa[array].id) {
          this.$store.state.empresa[array].cnpj = this.cnpjEditar;
          this.$store.state.empresa[array].nomeEmpresa =
            this.nomeEmpresaEditar;
          this.$store.state.empresa[array].nomeFantasia = this.nomeFantasiaEditar;
          this.$store.state.empresa[array].enderecoEmpresa =
            this.enderecoEditar;
          this.$store.state.empresa[array].cidadeEmpresa = this.cidadeEditar;
          this.$store.state.empresa[array].estadoEmpresa = this.estadoEditar;

          this.dialogEditar = false;
        }
      }
    },

    pesquisar() {
      this.resultSearch = [];

      for (var array = 0; array <= this.empresa.length; array++) {
        if (
          this.textoPesquisa == this.empresa[array].cnpj ||
          this.textoPesquisa == this.empresa[array].nomeEmpresa ||
          this.textoPesquisa == this.empresa[array].nomeFantasia ||
          this.textoPesquisa == this.empresa[array].enderecoEmpresa ||
          this.textoPesquisa == this.empresa[array].cidadeEmpresa ||
          this.textoPesquisa == this.empresa[array].estadoEmpresa
        ) {
          this.flagClearSearch = 1;

          const values = {
            id: this.empresa[array].id,
            cnpj: this.empresa[array].cnpj,
            nomeempresa: this.empresa[array].nomeEmpresa,
            nomefantasia: this.empresa[array].nomeFantasia,
            endereco: this.empresa[array].enderecoEmpresa,
            cidade: this.empresa[array].cidadeEmpresa,
            estado: this.empresa[array].estadoEmpresa,
          };
          this.resultSearch.push(values);
        }
      }
    },
  },

  computed: {
    empresa() {
      return this.$store.state.empresa;
    },
    rotina() {
      return this.$store.state.rotina;
    },
    usuarios() {
      return this.$store.state.usuario.Nome;
    },
    email() {
      return this.$store.state.usuario.Email;
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
.actions {
  margin-top: 10%;
  margin-left: 25%;
  display: inline-flex;
}
.excluir{
padding-left: 10px;
padding-right: 10px;
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
  background-color: white;
}

.grid {
  background-color: rgb(233, 233, 207);
  border-radius: 10px;
}

.excluir {
  margin-left: 20px;
  margin-right: 20px;
}

.buttonsexcludeandupdate {
  display: inline-flex;
  margin-top: 0px;
}
.search {
  display: inline-flex;
}
.btn1 {
  display: block;
  margin-top: 5%;
}
.btn2 {
  height: 20px;
}

.searcharea {
  margin-right: 5%;
  margin-top: 10px;
}

th {
  padding-left: 60px;
}
td {
  text-align: center;
  padding-left: 60px;
}
</style>