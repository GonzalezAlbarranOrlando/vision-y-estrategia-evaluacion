<template>
  <div class="animate-div">
    <p class="animate__animated animate__heartBeat">
      Programa Anual de Evaluación (PAE)
    </p>
  </div>
  <EnQueConsiste />
  <PreguntasFrecuentes />
  <Consultoria />
  <Capacitacion />
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