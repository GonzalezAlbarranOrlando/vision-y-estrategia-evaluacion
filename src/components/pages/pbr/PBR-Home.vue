<template>
  <div class="container">
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">
        Presupuesto Basado en Resultados (PbR)
      </p>
    </div>
    <!--Select option-->
    <select
      class="form-select form-select-lg"
      aria-label=".form-select-lg example"
      v-model="selected_pbr"
    >
      <option selected value="EnQueConsiste">En que consiste</option>
      <option value="PreguntasFrecuentes">Preguntas Frecuentes</option>
      <option value="Capacitacion">Capacitación</option>
    </select>
    <!--
        <span>Selected: {{ selected_pbr }}</span>
      -->
    <!--Select option end-->
  </div>
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