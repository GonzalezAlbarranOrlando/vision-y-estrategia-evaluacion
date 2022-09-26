<template>
  <div class="animate-div p-3">
    <p class="animate__animated animate__heartBeat">
      Estándar de Competencia, AGpR
    </p>
  </div>
  <div class="my-5">
    <EnQueConsiste />
  </div>
</template>

<script>
import EnQueConsiste from "./EnQueConsiste.vue";
export default {
  name: "AGPR-Home",
  components: { EnQueConsiste },
};
</script>

<style>
</style>