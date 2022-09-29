<template>
  <div class="animate-div p-3">
    <p class="animate__animated animate__heartBeat">
      Estándar de Competencia, AGpR
    </p>
  </div>
  <div class="my-5">
    <EnQueConsiste />
  </div>
  <div class="my-5">
    <InformacionGeneral />
  </div>
</template>

<script>
import EnQueConsiste from "./EnQueConsiste.vue";
import InformacionGeneral from "./InformacionGeneral.vue";
export default {
  name: "AGPR-Home",
  components: { EnQueConsiste, InformacionGeneral },
};
</script>

<style>
</style>