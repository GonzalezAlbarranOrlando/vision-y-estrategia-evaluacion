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
  <div class="my-5">
    <Capacitacion />
  </div>
</template>

<script>
import EnQueConsiste from "./EnQueConsiste.vue";
import InformacionGeneral from "./InformacionGeneral.vue";
import Capacitacion from "./Capacitacion.vue";
export default {
  name: "AGPR-Home",
  components: { EnQueConsiste, InformacionGeneral, Capacitacion },
};
</script>

<style>
</style>