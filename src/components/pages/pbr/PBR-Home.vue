<template>
  <div class="animate-div p-3">
    <p class="animate__animated animate__heartBeat">
      Presupuesto Basado en Resultados
    </p>
  </div>
  <!--Select option-->
  <div class="container">
    <select
      class="form-select form-select-lg"
      aria-label=".form-select-lg example"
      v-model="selected_pbr"
    >
      <option selected value="EnQueConsiste">En que consistene</option>
      <option value="PreguntasFrecuentes">Preguntas Frecuentes</option>
      <option value="Capacitacion">Capacitación</option>
    </select>
    <!--
        <span>Selected: {{ selected_pbr }}</span>
      -->
  </div>
  <!--Select option end-->
  <div class="my-5" v-if="selected_pbr === 'EnQueConsiste'">
    <EnQueConsiste />
  </div>
  <div class="my-5" v-if="selected_pbr === 'PreguntasFrecuentes'">
    <PreguntasFrecuentes />
  </div>
  <div class="my-5" v-if="selected_pbr === 'Capacitacion'">
    <Capacitacion />
  </div>
</template>
  
<script>
import EnQueConsiste from "./EnQueConsiste.vue";
import PreguntasFrecuentes from "./PreguntasFrecuentes.vue";
import Capacitacion from "./Capacitacion.vue";
export default {
  name: "PBR-Home",
  components: {
    EnQueConsiste,
    PreguntasFrecuentes,
    Capacitacion,
  },
  data() {
    return {
      selected_pbr: "EnQueConsiste",
    };
  },
};
</script>
  
<style>
</style>