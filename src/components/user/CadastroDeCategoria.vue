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
          <app-cadastro />
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      indiceNumero: "4",
    };
  },
};
</script>

<style>
.navbar {
  display: inline-flex;
}
</style>