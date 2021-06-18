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
            <v-list-item v-for="(item, i) in itensNavigation" :key="i" link>
              <v-list-item-content>
                <v-btn v-on:click="functionNavigation(i)" elevation="2" rounded text tile>{{
                  item.title
                }}</v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
</template>

<script>
export default {
    props:['itensNavigation',"functionNavigation","nomeUser","emailUser"]
};
</script>

<style>
</style>