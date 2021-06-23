<template>
  <div class="rotina">
    <div v-for="(rotinas, indexs) in rotina" :key="indexs" class="rotina">
      <h1 v-if="indexs == indiceNumero">{{ rotinas.rotina }}</h1>
    </div>
  </div>
</template>

<script>
export default {
props:['indiceNumero'],
computed:{
  rotina() {
      return this.$store.state.rotina;
    },
}

};
</script>

<style>
.rotina{
margin-left: 20px;
margin-top: 10px;
}
</style>