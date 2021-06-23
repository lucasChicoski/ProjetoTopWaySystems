<template>
  <v-app>
   
    <div class="root">
      <div class="navbar">
        <app-navigation
          :itensNavigation="items"
          :functionNavigation="navigation"
          :nomeUser="returnUser.Nome"
          :emailUser="returnUser.Email"
        />
        <div class="showView">
          <app-rotina :indiceNumero="indiceNumero" />

          <app-cadastro
            :contentGrid="grid"
            nomeCadastro="Categoria"
            hintPesquisa="Você pode pesquisar por um id ou Categoria"
            campoText1="Categoria"
            disableText2=1
            :camposStore="Ncm"
            :retornoGetter="returnCategory"
            :edithitID="hintIdEdit"
          
            :MethodCadastro="cadastrarCategory"
            :MethodEditar="editaCadastroCategory"
            :MethodExcluir="excluirCategory"
          />
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import { mapActions } from "vuex"; // para usar o mapActions é preciso importar

export default {
  data() {
    return {
      grid: [{ id: "Id" }, { campo1: "Categoria" }],
      hintIdEdit: "Informe o Id para Editar",
      indiceNumero: "4",
    };
  },

  computed: {
    returnCategory() {
      return this.$store.getters.retornoVariavelCategoria;
    },
   returnUser(){
     return this.$store.getters.userHeader
   }
  },

  methods: {
    ...mapActions(["cadastrarCategoria", "editarCategoria","excluirCategoria"]),

    cadastrarCategory(object) {
      this.cadastrarCategoria(object);
    },
    editaCadastroCategory(Obeject) {
      this.editarCategoria(Obeject);
    },
    excluirCategory(indice){
      this.excluirCategoria(indice)
    }
  },
};
</script>

<style>
.navbar {
  display: inline-flex;
}
</style>