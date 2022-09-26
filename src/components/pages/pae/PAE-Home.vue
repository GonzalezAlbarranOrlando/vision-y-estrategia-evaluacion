<template>
  <div class="animate-div p-3">
    <p class="animate__animated animate__heartBeat">
      Programa Anual de Evaluación (PAE)
    </p>
  </div>
  <div class="my-5">
    <EnQueConsiste />
  </div>
  <div class="my-5">
    <PreguntasFrecuentes />
  </div>
  <div class="my-5">
    <Consultoria />
  </div>
  <div class="my-5">
    <Capacitacion />
  </div>
</template>

<script>
import EnQueConsiste from "./EnQueConsiste.vue";
import PreguntasFrecuentes from "./PreguntasFrecuentes.vue";
import Consultoria from "./Consultoria.vue";
import Capacitacion from "./Capacitacion.vue";
export default {
  name: "PAE-Home",
  components: { EnQueConsiste, PreguntasFrecuentes, Consultoria, Capacitacion },
};
</script>

<style>
</style>