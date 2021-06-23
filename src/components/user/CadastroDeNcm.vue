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
            nomeCadastro="NCM"
            hintPesquisa="Você pode pesquisar por um id, Código ou Descrição"
            campoText1="Código"
            campoText2="Descrição"
            :camposStore="Ncm"
            :retornoGetter="returnNcm"
            :edithitID="hintIdEdit"
            disableText2=0
            actions="cadastrarNCM"
            :MethodCadastro="cadastrarNcm"
            :MethodEditar="editaCadastroNcm"
            :MethodExcluir="excluirNcm"
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
      grid: [{ id: "Id" }, { campo1: "Código" }, { campo2: "Descrição" }],
      hintIdEdit: "Informe o Id para Editar",
      indiceNumero: "5",
    };
  },

  computed: {
    returnNcm() {
      return this.$store.getters.retornoVariavelNCM;
    },
   returnUser(){
     return this.$store.getters.userHeader
   }
  },

  methods: {
    ...mapActions(["cadastrarNCM", "editarNCM","excluirNCM"]),

    cadastrarNcm(object) {
      this.cadastrarNCM(object);
    },
    editaCadastroNcm(Obeject) {
      this.editarNCM(Obeject);
    },
    excluirNcm(indice){
      this.excluirNCM(indice)
    }
  },
};
</script>

<style>
.navbar {
  display: inline-flex;
}
</style>