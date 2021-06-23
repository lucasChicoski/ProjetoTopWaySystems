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
            nomeCadastro="Alíquota"
            hintPesquisa="Você pode pesquisar por um id, Estado ou Alíquota"
            campoText1="Estado"
            campoText2="Alíquota"
            hintAliquota="Digitar a alíquota em porcentagem"
            disableText2=0
            porcentagemAliquota="%"
            :camposStore="Ncm"
            :retornoGetter="returnAliquota"
            :edithitID="hintIdEdit"
            :MethodCadastro="cadastrarAliquota"
            :MethodEditar="editaCadastroAliquota"
            :MethodExcluir="excluirAliquota"
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
      grid: [{ id: "Id" }, { campo1: "Estado" }, { campo2: "Alíquota" }],
      hintIdEdit: "Informe o Id para Editar",
      indiceNumero: "6",
    };
  },

  computed: {
    returnAliquota() {
      return this.$store.getters.retornoVariavelAliquota;
    },
    returnUser() {
      return this.$store.getters.userHeader;
    },
  },

  methods: {
    ...mapActions(["cadastrarAliquot", "editarAliquot", "excluirAliquot"]),

    cadastrarAliquota(object) {
      this.cadastrarAliquot(object);
    },
    editaCadastroAliquota(Obeject) {
      this.editarAliquot(Obeject);
    },
    excluirAliquota(indice) {
      this.excluirAliquot(indice);
    },
  },
};
</script>

<style>
.navbar {
  display: inline-flex;
}
</style>