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
        <app-rotina
          :rotina="rotina"
          :indiceNumero="indiceNumero"
        />

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
                <th>{{ n.description }}</th>
                <th>{{ n.price }}</th>
                <th>{{ n.category }}</th>
                <th>{{ n.code }}</th>
                <th>{{ n.aliquot }}</th>
                <th>{{ n.enterprise }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, i) in produto" :key="i">
                <td v-if="flagClearSearch == 0">{{ product.id }}</td>
                <td v-if="flagClearSearch == 0">{{ product.productDescription }}</td>
                <td v-if="flagClearSearch == 0">
                  {{ 'R$ ' + product.productPrice}}
                </td>
                <td v-if="flagClearSearch == 0">{{ product.productCategory }}</td>
                <td v-if="flagClearSearch == 0">
                  {{ product.productNCM }}
                </td>
                <td v-if="flagClearSearch == 0">{{ product.productAliquot + '%' }}</td>
                <td v-if="flagClearSearch == 0">{{ product.productEnteprise }}</td>
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
                    Cadastrar Produtos
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Cadastrar Produtos</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="productDescription"
                            label="Descrição*"
                            persistent-hint
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="productPrice"
                            label="Preço*"
                            persistent-hint
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="productCategory"
                            label="Categoria*"
                            persistent-hint
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="productNCM"
                            label="NCM / Código*"
                            persistent-hint
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="productAliquot"
                            label="Alíquota %*"
                            persistent-hint
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="productEnteprise"
                            label="Empresa*"
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

          <!--              Botão Excluir            -->

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

            <!--Editar Produto-->

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
                              v-model="descriptionEdit"
                              label="Descrição"
                              hint="Juridica ou Fisica"
                              persistent-hint
                            ></v-text-field>
                          </v-col>

                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="priceEdit"
                              label="Preço"
                              hint="Com pontuação"
                              persistent-hint
                            ></v-text-field>
                          </v-col>

                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="categoryEdit"
                              label="Categoria"
                              hint="Nome completo"
                              persistent-hint
                            ></v-text-field>
                          </v-col>

                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="ncmEdit"
                              label="NCM / Código"
                              hint="Logradouro"
                              persistent-hint
                            ></v-text-field>
                          </v-col>

                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="aliquotEdit"
                              label="Alíquota %"
                              persistent-hint
                            ></v-text-field>
                          </v-col>

                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="interpriseEdit"
                              label="Empresa"
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
      productDescription: "",
      productPrice: '',
      productCategory: "",
      productNCM: "",
      productAliquot: '',
      productEnteprise: "",

      //--------------------Método Delete -----------------------------
      functionDelete: "",

      //--------------Cabeçalho do Grid--------------------------------------------------
      grid: [
        {
          id: "Id",
          description: " Descrição ",
          price: "Preço",
          category: "Categoria",
          code: "NCM / Código",
          aliquot: "Alíquota",
          enterprise: "Empresa",
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
indiceNumero:'3',
      //--------------EDITAR--------------------------------------------------
      idEditar: "",
      descriptionEdit: "",
      priceEdit: "",
      categoryEdit: "",
      ncmEdit: "",
      aliquotEdit: "",
      interpriseEdit: "",
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
        this.$router.push('/cadastroempresa')
      } else if (index == 2) {
       this.$router.push('')
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
        productDescription: this.productDescription,
        productPrice: this.productPrice,
        productCategory: this.productCategory,
        productNCM: this.productNCM,
        productAliquot: this.productAliquot,
        productEnteprise: this.productEnteprise,
      };

      this.$store.state.produto.push(usuario);
      this.dialog = false;

      this.productDescription = "";
      this.productPrice = "";
      this.productCategory = "";
      (this.productNCM = ""),
        (this.productAliquot = ""),
        (this.productEnteprise = "");

      
    },

    excluir() {
      for (var array = 0; array <= this.produto.length; array++) {
        if (this.produto[array].id == this.functionDelete) {
          var index = this.produto.indexOf(this.produto[array]);
          this.$store.state.produto.splice(index, 1);
          this.functionDelete = "";
        }
      }
    },

    editar() {
      for (var array = 0; array <= this.produto.length; array++) {
        if (this.idEditar == this.produto[array].id) {
          
          this.$store.state.produto[array].productDescription = this.descriptionEdit;
          this.$store.state.produto[array].productPrice =
            this.priceEdit;
          this.$store.state.produto[array].productCategory = this.categoryEdit;
          this.$store.state.produto[array].productNCM =
            this.ncmEdit;
          this.$store.state.produto[array].productAliquot = this.aliquotEdit;
          this.$store.state.produto[array].productEnteprise = this.interpriseEdit;

          this.dialogEditar = false;
        }
      }
    },

    pesquisar() {
      this.resultSearch = [];

      for (var array = 0; array <= this.produto.length; array++) {
        if (
          this.textoPesquisa == this.produto[array].productDescription ||
          this.textoPesquisa == this.produto[array].productPrice ||
          this.textoPesquisa == this.produto[array].productCategory ||
          this.textoPesquisa == this.produto[array].productNCM ||
          this.textoPesquisa == this.produto[array].productAliquot ||
          this.textoPesquisa == this.produto[array].productEnteprise
        ) {
          this.flagClearSearch = 1;

          const values = {
            id: this.produto[array].id,
            tipo: this.produto[array].productDescription,
            identificador: this.produto[array].productPrice,
            nome: this.produto[array].productCategory,
            endereco: this.produto[array].productNCM,
            cidade: this.produto[array].productAliquot,
            estado: this.produto[array].productEnteprise,
          };
          this.resultSearch.push(values);
        }
      }
    },
  },

  computed: {
    produto() {
      return this.$store.state.produto;
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