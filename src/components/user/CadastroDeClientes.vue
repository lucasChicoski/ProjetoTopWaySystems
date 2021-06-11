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
          <h1 v-if="indexs == '0'">{{ rotinas.rotina }}</h1>
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
                <th>{{ n.tipo }}</th>
                <th>{{ n.cnpjcpf }}</th>
                <th>{{ n.nome }}</th>
                <th>{{ n.endereco }}</th>
                <th>{{ n.cidade }}</th>
                <th>{{ n.estado }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(cliente, i) in clientes" :key="i">
                <td v-if="flagClearSearch == 0">{{ cliente.id }}</td>
                <td v-if="flagClearSearch == 0">{{ cliente.tipocliente }}</td>
                <td v-if="flagClearSearch == 0">
                  {{ cliente.identificationcliente }}
                </td>
                <td v-if="flagClearSearch == 0">{{ cliente.nomecliente }}</td>
                <td v-if="flagClearSearch == 0">
                  {{ cliente.enderecoCliente }}
                </td>
                <td v-if="flagClearSearch == 0">{{ cliente.cidadeCliente }}</td>
                <td v-if="flagClearSearch == 0">{{ cliente.estadoCliente }}</td>
              </tr>
              <!--Else da pesquisa-->
              <tr v-for="(cliente, i) in resultSearch" :key="i">
                <td v-if="flagClearSearch == 1">{{ cliente.id }}</td>
                <td v-if="flagClearSearch == 1">{{ cliente.tipo }}</td>
                <td v-if="flagClearSearch == 1">{{ cliente.identificador }}</td>
                <td v-if="flagClearSearch == 1">{{ cliente.nome }}</td>
                <td v-if="flagClearSearch == 1">
                  {{ cliente.endereco }}
                </td>
                <td v-if="flagClearSearch == 1">{{ cliente.cidade }}</td>
                <td v-if="flagClearSearch == 1">{{ cliente.estado }}</td>
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

                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="enderecoCliente"
                            label="Endereço*"
                            hint="Nome da logradouro"
                            persistent-hint
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="cidadeCliente"
                            label="Cidade*"
                            persistent-hint
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="estadoCliente"
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
                              v-model="tipoEditar"
                              label="Tipo de Cliente"
                              hint="Juridica ou Fisica"
                              persistent-hint
                            ></v-text-field>
                          </v-col>

                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="numeroIdentification"
                              label="CPF/CNPJ"
                              hint="Com pontuação"
                              persistent-hint
                            ></v-text-field>
                          </v-col>

                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="nomeEditar"
                              label="Nome"
                              hint="Nome completo"
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
      tipocliente: "",
      identificationcliente: "",
      nomecliente: "",
      enderecoCliente: "",
      cidadeCliente: "",
      estadoCliente: "",

      //--------------------Método Delete
      functionDelete: "",

      //--------------Cabeçalho do Grid--------------------------------------------------
      grid: [
        {
          id: "Id",
          tipo: " Tipo de cliente ",
          cnpjcpf: "CNPJ/CPF",
          nome: "Nome",
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
      nomeEditar: "",
      tipoEditar: "",
      numeroIdentification: "",
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
        alert("Cadastro de Empresa");
      } else if (index == 2) {
        alert("Cadastro de Produtos");
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
        tipocliente: this.tipocliente,
        identificationcliente: this.identificationcliente,
        nomecliente: this.nomecliente,
        enderecoCliente: this.enderecoCliente,
        cidadeCliente: this.cidadeCliente,
        estadoCliente: this.estadoCliente,
      };

      this.$store.state.clientes.push(usuario);
      this.dialog = false;

      this.tipocliente = "";
      this.identificationcliente = "";
      this.nomecliente = "";
      (this.enderecoCliente = ""),
        (this.cidadeCliente = ""),
        (this.estadoCliente = "");

      console.log(this.$store.state.clientes);
    },

    excluir() {
      for (var array = 0; array <= this.clientes.length; array++) {
        if (this.clientes[array].id == this.functionDelete) {
          var index = this.clientes.indexOf(this.clientes[array]);
          this.$store.state.clientes.splice(index, 1);
          this.functionDelete = "";
        }
      }
    },

    editar() {
      for (var array = 0; array <= this.clientes.length; array++) {
        if (this.idEditar == this.clientes[array].id) {
          this.$store.state.clientes[array].tipocliente = this.tipoEditar;
          this.$store.state.clientes[array].identificationcliente =
            this.numeroIdentification;
          this.$store.state.clientes[array].nomecliente = this.nomeEditar;
          this.$store.state.clientes[array].enderecoCliente =
            this.enderecoEditar;
          this.$store.state.clientes[array].cidadeCliente = this.cidadeEditar;
          this.$store.state.clientes[array].estadoCliente = this.estadoEditar;

          this.dialogEditar = false;
        }
      }
    },

    pesquisar() {
      this.resultSearch = [];

      for (var array = 0; array <= this.clientes.length; array++) {
        if (
          this.textoPesquisa == this.clientes[array].tipocliente ||
          this.textoPesquisa == this.clientes[array].identificationcliente ||
          this.textoPesquisa == this.clientes[array].nomecliente ||
          this.textoPesquisa == this.clientes[array].enderecoCliente ||
          this.textoPesquisa == this.clientes[array].cidadeCliente ||
          this.textoPesquisa == this.clientes[array].estadoCliente
        ) {
          this.flagClearSearch = 1;

          const values = {
            id: this.clientes[array].id,
            tipo: this.clientes[array].tipocliente,
            identificador: this.clientes[array].identificationcliente,
            nome: this.clientes[array].nomecliente,
            endereco: this.clientes[array].enderecoCliente,
            cidade: this.clientes[array].cidadeCliente,
            estado: this.clientes[array].estadoCliente,
          };
          this.resultSearch.push(values);
        }
      }
    },
  },

  computed: {
    clientes() {
      return this.$store.state.clientes;
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