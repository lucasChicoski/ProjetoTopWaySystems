<template>
    <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{ usuarios }}
              </v-list-item-title>
              <v-list-item-subtitle> {{ email }} </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
</template>

<script>
export default {
props:['usuarios', 'email']
}
</script>

<style>

</style>