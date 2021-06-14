<template>
  <v-app>
    <div id="root">
      <div class="menu">
        <v-navigation-drawer permanent>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{ nome }}
              </v-list-item-title>
              <v-list-item-subtitle> {{ email }} </v-list-item-subtitle>
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
        <div v-for="(rotinas, indexs) in rotina" :key="indexs" class="rotina">
          <h1 v-if="indexs == '1'">{{ rotinas.rotina }}</h1>
        </div>
        <hr />

        <!--Clientes-->

        <p>Clientes</p>
        <div class="compnent">
          <div class="search">
            <v-text-field
              class="buttonSearch"
              v-model="textoPesquisaClient"
              solo
              label="Pesquisar"
              clearable
            ></v-text-field>
          </div>
          <div class="buttons">
            <v-btn @click="pesquisarClient()" class="bt1" elevation="2"
              >Pesquisar</v-btn
            >
            <v-btn @click="flagClearSearchClient = 0" class="bt2" elevation="2"
              >Limpar Pesquisa</v-btn
            >
          </div>
        </div>
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
                <td v-if="flagClearSearchClient == 0">{{ cliente.id }}</td>
                <td v-if="flagClearSearchClient == 0">
                  {{ cliente.tipocliente }}
                </td>
                <td v-if="flagClearSearchClient == 0">
                  {{ cliente.identificationcliente }}
                </td>
                <td v-if="flagClearSearchClient == 0">
                  {{ cliente.nomecliente }}
                </td>
                <td v-if="flagClearSearchClient == 0">
                  {{ cliente.enderecoCliente }}
                </td>
                <td v-if="flagClearSearchClient == 0">
                  {{ cliente.cidadeCliente }}
                </td>
                <td v-if="flagClearSearchClient == 0">
                  {{ cliente.estadoCliente }}
                </td>
              </tr>
              <!--Else da pesquisa-->
              <tr v-for="(cliente, i) in resultSearch" :key="i">
                <td v-if="flagClearSearchClient == 1">{{ cliente.id }}</td>
                <td v-if="flagClearSearchClient == 1">{{ cliente.tipo }}</td>
                <td v-if="flagClearSearchClient == 1">
                  {{ cliente.identificador }}
                </td>
                <td v-if="flagClearSearchClient == 1">{{ cliente.nome }}</td>
                <td v-if="flagClearSearchClient == 1">
                  {{ cliente.endereco }}
                </td>
                <td v-if="flagClearSearchClient == 1">{{ cliente.cidade }}</td>
                <td v-if="flagClearSearchClient == 1">{{ cliente.estado }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />

        <!--Empresas-->

        <p>Empresas</p>
        <div class="compnent">
          <div class="search">
            <v-text-field
              class="buttonSearch"
              v-model="textoPesquisaEnterprise"
              solo
              label="Pesquisar"
              clearable
            ></v-text-field>
          </div>
          <div class="buttons">
            <v-btn @click="pesquisarEnterprise()" class="bt1" elevation="2"
              >Pesquisar</v-btn
            >
            <v-btn
              @click="flagClearSearchEnterprise = 0"
              class="bt2"
              elevation="2"
              >Limpar Pesquisa</v-btn
            >
          </div>
        </div>

        <div class="grid">
          <table>
            <thead>
              <tr class="meio" v-for="n in gridEnterprise" :key="n">
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
                <td v-if="flagClearSearchEnterprise == 0">{{ empresas.id }}</td>
                <td v-if="flagClearSearchEnterprise == 0">
                  {{ empresas.cnpj }}
                </td>
                <td v-if="flagClearSearchEnterprise == 0">
                  {{ empresas.nomeEmpresa }}
                </td>
                <td v-if="flagClearSearchEnterprise == 0">
                  {{ empresas.nomeFantasia }}
                </td>
                <td v-if="flagClearSearchEnterprise == 0">
                  {{ empresas.enderecoEmpresa }}
                </td>
                <td v-if="flagClearSearchEnterprise == 0">
                  {{ empresas.cidadeEmpresa }}
                </td>
                <td v-if="flagClearSearchEnterprise == 0">
                  {{ empresas.estadoEmpresa }}
                </td>
              </tr>
              <!--Else da pesquisa-->
              <tr v-for="(empresa, i) in resultSearch" :key="i">
                <td v-if="flagClearSearchEnterprise == 1">{{ empresa.id }}</td>
                <td v-if="flagClearSearchEnterprise == 1">
                  {{ empresa.cnpj }}
                </td>
                <td v-if="flagClearSearchEnterprise == 1">
                  {{ empresa.nomeempresa }}
                </td>
                <td v-if="flagClearSearchEnterprise == 1">
                  {{ empresa.nomefantasia }}
                </td>
                <td v-if="flagClearSearchEnterprise == 1">
                  {{ empresa.endereco }}
                </td>
                <td v-if="flagClearSearchEnterprise == 1">
                  {{ empresa.cidade }}
                </td>
                <td v-if="flagClearSearchEnterprise == 1">
                  {{ empresa.estado }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />

        <!--Produto-->
        <p>Produtos</p>
        <div class="compnent">
          <div class="search">
            <v-text-field
              class="buttonSearch"
              v-model="textoPesquisa"
              solo
              label="Pesquisar"
              clearable
            ></v-text-field>
          </div>
          <div class="buttons">
            <v-btn @click="pesquisar()" class="bt1" elevation="2"
              >Pesquisar</v-btn
            >
            <v-btn @click="flagClearSearch = 0" class="bt2" elevation="2"
              >Limpar Pesquisa</v-btn
            >
          </div>
        </div>
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
              <tr v-for="(product, i) in produto" :key="i">
                <td v-if="flagClearSearch == 0">{{ product.id }}</td>
                <td v-if="flagClearSearch == 0">
                  {{ product.productDescription }}
                </td>
                <td v-if="flagClearSearch == 0">
                  {{ product.productPrice }}
                </td>
                <td v-if="flagClearSearch == 0">
                  {{ product.productCategory }}
                </td>
                <td v-if="flagClearSearch == 0">
                  {{ product.productNCM }}
                </td>
                <td v-if="flagClearSearch == 0">
                  {{ product.productAliquot }}
                </td>
                <td v-if="flagClearSearch == 0">
                  {{ product.productEnteprise }}
                </td>
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

        <!--Botão Dialog-->
        <v-row justify="center">
          <v-dialog v-model="dialog" persistent max-width="290">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
                Calcular Preço com a Alíquota
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="text-h5">
                Calcule o preço com a taxa
              </v-card-title>
              <v-card-text
                ><v-text-field
            v-model="idCalculo"
            label="Informe o Id do produto"
            clearable
          ></v-text-field></v-card-text
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="dialog = false">
                  Cancelar
                </v-btn>
                <v-btn color="green darken-1" text @click="calculadora()">
                  Calcular
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <p>Preço do Produto: R$ {{result}}</p>
        </v-row>
        
        <!--FIM Botão Dialog-->
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
x:0,
y:0,

      dialog: "",
      idCalculo:'',
      result:'',
      selecionado: 0,
      selectedItem: 0,

      flagClearSearchClient: 0,
      textoPesquisaClient: "",

      textoPesquisa: "",
      flagClearSearch: 0,

      flagClearSearchEnterprise: 0,
      textoPesquisaEnterprise: "",

      

      grid: [
        {
          id: "Id",
          tipo: " Descrição ",
          cnpjcpf: "Preço",
          nome: "Categoria",
          endereco: "NCM / Código",
          cidade: "Alíquota",
          estado: "Empresa",
        },
      ],

      gridEnterprise: [
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

      gridClient: [
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

      intensGrid: [],
      items: [
        { title: "Início" },
        { title: "Cadastro de Empresa", icon: "" },
        { title: "Cadastro de Produtos", icon: "" },
        { title: "Cadastro de Clientes", icon: "" },
        { title: "Sair" },
      ],

      right: null,
    };
  },

  methods: {
    google(index) {
      if (index == 0) {
        alert("Você clicou em inicio");
      } else if (index == 1) {
        this.$router.push("/cadastroempresa");
      } else if (index == 2) {
        this.$router.push("/cadastroprodutos");
      } else if (index == 3) {
        //window.location.href = "http://localhost:8080/cadastroclientes";
        this.$router.push("/cadastroclientes");
      } else if (index == 4) {
        this.$router.push("/");
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

    pesquisarEnterprise() {
      this.resultSearch = [];

      for (var array = 0; array <= this.empresa.length; array++) {
        if (
          this.textoPesquisaEnterprise == this.empresa[array].cnpj ||
          this.textoPesquisaEnterprise == this.empresa[array].nomeEmpresa ||
          this.textoPesquisaEnterprise == this.empresa[array].nomeFantasia ||
          this.textoPesquisaEnterprise == this.empresa[array].enderecoEmpresa ||
          this.textoPesquisaEnterprise == this.empresa[array].cidadeEmpresa ||
          this.textoPesquisaEnterprise == this.empresa[array].estadoEmpresa
        ) {
          this.flagClearSearchEnterprise = 1;

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

    pesquisarClient() {
      this.resultSearch = [];

      for (var array = 0; array <= this.clientes.length; array++) {
        if (
          this.textoPesquisaClient == this.clientes[array].tipocliente ||
          this.textoPesquisaClient ==
            this.clientes[array].identificationcliente ||
          this.textoPesquisaClient == this.clientes[array].nomecliente ||
          this.textoPesquisaClient == this.clientes[array].enderecoCliente ||
          this.textoPesquisaClient == this.clientes[array].cidadeCliente ||
          this.textoPesquisaClient == this.clientes[array].estadoCliente
        ) {
          this.flagClearSearchClient = 1;

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

    calculadora(){
      
      for (var array = 0; array <= this.produto.length; array++) {
        if(this.idCalculo == this.produto[array].id){

        var  precoFloat = parseFloat(this.produto[array].productPrice)
        var  aliquotaFloat = parseFloat(this.produto[array].productAliquot)

          var Aliquota = precoFloat * aliquotaFloat
          var Preco = precoFloat + Aliquota

          this.result = Preco

          this.dialog = false
         // alert(this.result)
        }

    }
    
    }
   
  },
  computed: {
    rotina() {
      return this.$store.state.rotina;
    },
    clientes() {
      return this.$store.state.clientes;
    },
    empresa() {
      return this.$store.state.empresa;
    },
    produto() {
      return this.$store.state.produto;
    },
    nome() {
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
.bt1 {
  display: block;
}

.compnent {
  display: inline-flex;
}
</style>