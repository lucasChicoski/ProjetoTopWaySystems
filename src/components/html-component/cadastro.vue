<template>
  <v-app>
    <div class="root">
      <div class="head">
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="message2"
              solo
              label="Solo"
              clearable
            ></v-text-field>
          </v-col>

          <v-col cols="1" sm="1">
            <v-btn class="btn1" elevation="2">Pesquisar</v-btn>
            <v-btn elevation="2">Limpar pesquisa</v-btn>
          </v-col>
        </v-row>
      </div>

      <div class="body">
        <div class="grid">
          <table>
            <thead>
              <tr class="meio" v-for="nLines in contentGrid" :key="nLines">
                <th>{{ nLines.id }}</th>
                <th>{{ nLines.campo1 }}</th>
                <th>{{ nLines.campo2 }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="nLines in retornoGetter" :key="nLines">
                <td>{{ nLines.id }}</td>
                <td>{{ nLines.campoCadastro1 }}</td>
                <td>{{ nLines.campoCadastro2 }}</td>
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
                          v-model="modelCampoText2"
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
                          v-model="modelCampoEditText2"
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
                  Open Dialog
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="text-h5">
                  Use Google's location service?
                </v-card-title>
                <v-card-text
                  >Let Google help apps determine location. This means sending
                  anonymous location data to Google, even when no apps are
                  running.</v-card-text
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" text @click="dialogExclude = false">
                    Disagree
                  </v-btn>
                  <v-btn color="green darken-1" text @click="dialogExclude = false">
                    Agree
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
    "nomeCadastro",
    "campoText1",
    "campoText2",
    "camposStore", //OBS Excluir
    "retornoGetter",
    "edithitID",
    "MethodCadastro",
    "MethodEditar",
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
  },
};
</script>

<style>
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
.buttonExclude{
  margin-left: 20px;
}
</style>