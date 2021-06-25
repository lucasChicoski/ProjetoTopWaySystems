<template>
  <v-app>
    <div class="root">
      <div class="head">
        <v-row>
          <!--Campo Pesquisa-->
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="passworldSearch"
              solo
              label="Pesquisar"
              :hint="hintPesquisa"
              clearable
            ></v-text-field>
          </v-col>

          <!--Botões de ações pesquisa-->
          <v-col cols="1" sm="1">
            <v-btn @click="pesquisar()" class="btn1" elevation="2"
              >Pesquisar</v-btn
            >
            <v-btn @click="clearSearch = 0" elevation="2"
              >Limpar pesquisa</v-btn
            >
          </v-col>
        </v-row>
      </div>

      <div class="body">
        <div class="grid">
          <table>
            <thead>
              <tr class="meio" v-for="nLines in contentGrid" :key="nLines">
                <th >{{ nLines.id }}</th>
                <th >{{ nLines.campo1 }}</th>
                <th >{{ nLines.campo2 }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="nLines in retornoGetter" :key="nLines">
                <td v-if="clearSearch == 0">{{ nLines.id }}</td>
                <td v-if="clearSearch == 0">{{ nLines.campoCadastro1 }}</td>
                <td v-if="clearSearch == 0">
                  {{ nLines.campoCadastro2 }}{{ porcentagemAliquota }}
                </td>
              </tr>
              <!--else da parte de cima-->
              <tr v-for="nLines in resultSearch" :key="nLines">
                <td v-if="clearSearch == 1">{{ nLines.id }}</td>
                <td v-if="clearSearch == 1">{{ nLines.campo1 }}</td>
                <td v-if="clearSearch == 1">{{ nLines.campo2 }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!--Botão Cadastrar-->
        <div class="buttons">
          <v-row class="buttonCadastro" justify="center">
            <v-dialog v-model="dialogCadastro" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on">
                  Cadastrar {{ nomeCadastro }}
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">Cadastro de {{ nomeCadastro }}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="modelCampoText1"
                          :label="campoText1"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-if="disableText2 == 0"
                          v-model="modelCampoText2"
                          :hint="hintAliquota"
                          :label="campoText2"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="dialogCadastro = false"
                  >
                    Sair
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="cadastro()">
                    Cadastrar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
          <!--Fim do Botão Cadastrar-->
          <!--Botão Editar-->
          <v-row class="buttonEdit" justify="center">
            <v-dialog v-model="dialogEdit" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on">
                  Editar {{ nomeCadastro }}
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">Editar {{ nomeCadastro }}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="campoIdEdit"
                          :hint="edithitID"
                          label="Id"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="modelCampoEditText1"
                          :label="campoText1"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-if="disableText2 == 0"
                          v-model="modelCampoEditText2"
                          :hint="hintAliquota"
                          :label="campoText2"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialogEdit = false">
                    Sair
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="editar()">
                    Editar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
          <!--Fim do Botão Editar-->

          <!--Botão Excluir-->
          <v-row class="buttonExclude" justify="center">
            <v-dialog v-model="dialogExclude" persistent max-width="290">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on">
                  Excluir {{ nomeCadastro }}
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="text-h5">
                  Digite o Id para excluir {{ nomeCadastro }}
                </v-card-title>
                <v-card-text>
                  <v-col cols="12" sm="1" md="10">
                    <v-text-field
                      v-model="idExclude"
                      label="Id"
                    ></v-text-field> </v-col
                ></v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="green darken-1"
                    text
                    @click="dialogExclude = false"
                  >
                    Cancelar
                  </v-btn>
                  <v-btn color="green darken-1" text @click="excluir()">
                    Excluir
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
          <!--Fim do Botão Excluir-->
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
//import { mapActions } from "vuex"; // para usar o mapActions é preciso importar

export default {
  props: [
    "contentGrid",
    "hintPesquisa",
    "nomeCadastro",
    "campoText1",
    "campoText2",
    "retornoGetter",
    "edithitID",
    "MethodCadastro",
    "MethodEditar",
    "MethodExcluir",
    "hintAliquota",
    "porcentagemAliquota",
    "disableText2",
  ],

  data() {
    return {
      dialogCadastro: false,
      dialogExclude: false,
      dialogEdit: false,

      //Cadastro
      id: 0,
      modelCampoText1: "",
      modelCampoText2: "",

      //Editar
      campoIdEdit: "",
      modelCampoEditText1: "",
      modelCampoEditText2: "",

      //excluir
      idExclude: "",

      //Pesquisar
      resultSearch: [],
      passworldSearch: "",
      clearSearch: 0,
    };
  },

  methods: {
    cadastro() {
      var object = {
        id: (this.id = this.id + 1),
        campoCadastro1: this.modelCampoText1,
        campoCadastro2: this.modelCampoText2,
      };

      this.MethodCadastro(object);

      this.modelCampoText1 = "";
      this.modelCampoText2 = "";

      this.dialogCadastro = false;
    },

    editar() {
      for (var array = 0; array < this.retornoGetter.length; array++) {
        if (this.campoIdEdit == this.retornoGetter[array].id) {
          var object = {
            array: array,
            campoEdita1: this.modelCampoEditText1,
            campoEdita2: this.modelCampoEditText2,
          };

          this.MethodEditar(object);

          this.campoIdEdit = "";
          this.modelCampoEditText1 = "";
          this.modelCampoEditText2 = "";

          this.dialogEdit = false;
        }
      }
    },

    excluir() {
      alert("ok");
      for (var array = 0; array < this.retornoGetter.length; array++) {
        if (this.idExclude == this.retornoGetter[array].id) {
          this.MethodExcluir(array);
          this.dialogExclude = false;
        }
      }
    },

    pesquisar() {
      this.resultSearch = [];

      for (var array = 0; array < this.retornoGetter.length; array++) {
        if (
          this.passworldSearch == this.retornoGetter[array].id ||
          this.passworldSearch == this.retornoGetter[array].campoCadastro1 ||
          this.passworldSearch == this.retornoGetter[array].campoCadastro2
        ) {
          this.clearSearch = 1;

          var newObject = {
            id: this.retornoGetter[array].id,
            campo1: this.retornoGetter[array].campoCadastro1,
            campo2: this.retornoGetter[array].campoCadastro2,
          };

          this.resultSearch.push(newObject);
        }
      }
    },
  },
};
</script>

<style scoped>
.head {
  margin-left: 4%;
}
.btn1 {
  margin-bottom: 2px;
}
.buttons {
  display: inline-flex;
}
.buttonEdit {
  margin-left: 20px;
}

.buttonCadastro {
  margin-top: 11px;
}
.buttonExclude {
  margin-left: 20px;
}
.body {
  margin: 40px;
}
.head {
  margin: 40px;
}
</style>