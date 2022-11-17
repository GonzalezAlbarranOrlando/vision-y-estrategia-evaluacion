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
      <option value="Transparencia">Transparencia</option>
      <option
        value="Taller de Gestión Integral del Presupuesto basado en Resultados"
      >
        Taller de Gestión Integral del Presupuesto basado en Resultados
      </option>
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
  <div class="my-5" v-if="selected_pbr === 'Transparencia'">
    <Transparencia />
  </div>
  <div
    class="my-5"
    v-if="
      selected_pbr ===
      'Taller de Gestión Integral del Presupuesto basado en Resultados'
    "
  >
    <TallerdeGestiónIntegraldelPresupuestobasadoenResultados />
  </div>
</template>
  
<script>
import EnQueConsiste from "./EnQueConsiste.vue";
import PreguntasFrecuentes from "./PreguntasFrecuentes.vue";
import Capacitacion from "./Capacitacion.vue";
import Transparencia from "./Transparencia.vue";
import TallerdeGestiónIntegraldelPresupuestobasadoenResultados from "./capacitacion/Taller de Gestión Integral del Presupuesto basado en Resultados.vue";
export default {
  name: "PBR-Home",
  components: {
    EnQueConsiste,
    PreguntasFrecuentes,
    Capacitacion,
    Transparencia,
    TallerdeGestiónIntegraldelPresupuestobasadoenResultados,
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