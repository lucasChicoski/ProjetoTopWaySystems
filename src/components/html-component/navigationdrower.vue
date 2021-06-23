<template>
  <v-navigation-drawer permanent>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          {{ nomeUser }}
        </v-list-item-title>
        <v-list-item-subtitle> {{ emailUser }} </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="(item, i) in items" :key="i" link>
        <v-list-item-content>
          <v-btn v-on:click="navigation(i)" elevation="2" rounded text tile>{{
            item.title
          }}</v-btn>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ["functionNavigation", "nomeUser", "emailUser"],
  data() {
    return {
      items: [
        { title: "Início" },
        { title: "Cadastro de Empresa", icon: "" },
        { title: "Cadastro de Produtos", icon: "" },
        { title: "Cadastro de Clientes", icon: "" },
        { title: "Cadastro de Categoria" },
        { title: "Cadastro de NCM" },
        { title: "Cadastro de Alíquota" },
        { title: "Sair" },
      ],
    };
  },

  methods: {
    navigation(index) {
      if (index == 0) {
        this.$router.push("/main");
      } else if (index == 1) {
        this.$router.push("/cadastroempresa");
      } else if (index == 2) {
        this.$router.push("/cadastroprodutos");
      } else if (index == 3) {
        this.$router.push("/cadastroclientes");
      } else if (index == 4) {
        this.$router.push("/cadastrocategoria");
      } else if (index == 5) {
        this.$router.push("/cadastroNcm");
      } else if (index == 6) {
        this.$router.push("/cadastroaliquota");
      } else if (index == 7) {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style>
</style>