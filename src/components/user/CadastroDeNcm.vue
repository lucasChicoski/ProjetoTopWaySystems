<template>
  <v-app>
    <div class="root">
      <div class="navbar">
        <app-navigation
          :itensNavigation="items"
          :functionNavigation="navigation"
          :nomeUser="usuarios"
          :emailUser="email"
        />
        <div class="showView">
          <app-rotina :indiceNumero="indiceNumero" />

          <app-cadastro
            :contentGrid="grid"
            nomeCadastro="NCM"
            campoText1="Código"
            campoText2="Descrição"
            :camposStore="Ncm"
            :retornoGetter="returnNcm"
            :edithitID="hintIdEdit"
            actions="cadastrarNCM"
            :MethodCadastro="cadastrarNcm"
            :MethodEditar="editaCadastroNcm"
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

    Ncm() {
      return this.$store.state.NCM;
    },
  },

  methods: {
    ...mapActions(["cadastrarNCM", "editarNCM"]),

    cadastrarNcm(object) {
      this.cadastrarNCM(object);
    },
    editaCadastroNcm(Obeject) {
      this.editarNCM(Obeject);
    },
  },
};
</script>

<style>
.navbar {
  display: inline-flex;
}
</style>