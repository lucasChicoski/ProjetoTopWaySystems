<template>
  <v-app class="app">
    <div id="root">
      <div class="menu">
       <app-navigation
        :itensNavigation="items"
        :functionNavigation="navigation"
        :nomeUser="nome"
        :emailUser="email"
       />
      </div>

      <div id="showView">
        
<app-rotina
          :rotina="rotina"
          :indiceNumero="indiceNumero"

        />

        
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
            <v-btn color="#d4d0cc" width="170" @click="pesquisarClient()" class="bt1" elevation="2"
              >Pesquisar</v-btn
            >
            <v-btn color="#d4d0cc" @click="flagClearSearchClient = 0" class="bt2" elevation="2"
              >Limpar Pesquisa</v-btn
            >
          </div>
        </div>
        <div class="grid">
          <table>
            <thead>
              <tr class="meio" v-for="n in gridClient" :key="n">
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
            color="#d4d0cc"
              class="buttonSearch"
              v-model="textoPesquisaEnterprise"
              solo
              label="Pesquisar"
              clearable
            ></v-text-field>
          </div>
          <div class="buttons">
            <v-btn width="170px" color="#d4d0cc"  @click="pesquisarEnterprise()" class="bt1" elevation="2"
              >Pesquisar</v-btn
            >
            <v-btn
              @click="flagClearSearchEnterprise = 0"
              color="#d4d0cc"
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
            <v-btn color="#d4d0cc" width="170" @click="pesquisar()" class="bt1" elevation="2"
              >Pesquisar</v-btn
            >
            <v-btn color="#d4d0cc" @click="flagClearSearch = 0" class="bt2" elevation="2"
              >Limpar Pesquisa</v-btn
            >
          </div>
        </div>
        <div class="grid">
          <table>
            <thead>
              <tr class="meio" v-for="n in grid" :key="n">
                 <th>{{ n.id }}</th>
                <th>{{ n.description }}</th>
                <th>{{ n.price  }}</th>
                <th>{{ n.category }}</th>
                <th>{{ n.code }}</th>
                <th>{{ n.aliquot }}</th>
                <th>{{ n.enterprise }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, i) in produto" :key="i">
                <td v-if="flagClearSearch == 0">{{ product.id }}</td>
                <td v-if="flagClearSearch == 0">
                  {{ product.productDescription }}
                </td>
                <td v-if="flagClearSearch == 0">
                  {{'R$ '+ product.productPrice }}
                </td>
                <td v-if="flagClearSearch == 0">
                  {{ product.productCategory }}
                </td>
                <td v-if="flagClearSearch == 0">
                  {{ product.productNCM }}
                </td>
                <td v-if="flagClearSearch == 0">
                  {{ product.productAliquot + '%' }}
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

      indiceNumero:'1',

      grid: [
        {
          id: "Id",
          description: " Descrição ",
          price: "Preço",
          category: "Categoria",
          code: "NCM / Código",
          aliquot: "Alíquota %",
          enterprise: "Empresa",
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
      

      right: null,
    };
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
  methods: {
    navigation(index) {
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

          var Aliquota = precoFloat * (aliquotaFloat / 100)
          var Preco = precoFloat + Aliquota

          this.result = Preco

          this.dialog = false
         // alert(this.result)
        }

    }
    
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
.bt1 {
  display: block;
  margin-bottom: 5px;
  
}

.compnent {
  display: inline-flex;
}
.ButtonDialog{
  margin-top: 100px;
}
p{
  font-size: 20px;
}
.calculo{
  margin-left: 7px;
}
hr{
  margin-top: 20px;
  
}
.buttons{
  padding-bottom: 10px;
  margin-left: 8px;
}
</style>