<template>
  <div>
    <div v-for="(rotinas, indexs) in rotina" :key="indexs" class="rotina">
      <h1 v-if="indexs == indiceNumero">{{ rotinas.rotina }}</h1>
    </div>
  </div>
</template>

<script>
export default {
props:['rotina','indiceNumero']

};
</script>

<style>
</style>