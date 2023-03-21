<template>
  <div class="container-fluid">
    <!--sidenav -->
    <div
      id="mySidenav"
      class="sidenav"
      style="width: 300px"
      v-if="boolean_sidenav"
    >
      <button
        type="button"
        class="btn-close closebtn"
        aria-label="Close"
        v-on:click="boolean_sidenav = false"
      ></button>
      <div class="sidenav-blue">
        <b>Presupuesto Basado en Resultados (PbR)</b>
      </div>
      <button
        class="text-truncate"
        v-on:click="
          selected_pbr = 'EnQueConsiste';
          boolean_sidenav = false;
        "
      >
        En que consiste
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_pbr = 'PreguntasFrecuentes';
          boolean_sidenav = false;
        "
      >
        Preguntas Frecuentes
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_pbr = 'Transparencia';
          boolean_sidenav = false;
        "
      >
        Transparencia
      </button>
      <div class="sidenav-blue"><b>Capacitación:</b></div>
      <button
        class="text-truncate"
        v-on:click="
          selected_pbr =
            'Taller de Gestión Integral del Presupuesto basado en Resultados';
          boolean_sidenav = false;
        "
      >
        Taller de Gestión Integral del Presupuesto basado en Resultados
      </button>
    </div>
    <!--sidenav end-->
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">
        Presupuesto Basado en Resultados (PbR)
      </p>
    </div>
    <span
      style="font-size: 30px; cursor: pointer; color: gray; font-weight: bold"
      v-on:click="boolean_sidenav = true"
      >&#9776; Menú de opciones</span
    >
  </div>
  <div class="my-5" v-if="selected_pbr === 'EnQueConsiste'">
    <EnQueConsiste />
  </div>
  <div class="my-5" v-if="selected_pbr === 'PreguntasFrecuentes'">
    <PreguntasFrecuentes />
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
import Transparencia from "./Transparencia.vue";
import TallerdeGestiónIntegraldelPresupuestobasadoenResultados from "./capacitacion/Taller de Gestión Integral del Presupuesto basado en Resultados.vue";
export default {
  name: "PBR-Home",
  components: {
    EnQueConsiste,
    PreguntasFrecuentes,
    Transparencia,
    TallerdeGestiónIntegraldelPresupuestobasadoenResultados,
  },
  data() {
    return {
      selected_pbr: "EnQueConsiste",
      boolean_sidenav: false,
    };
  },
};
</script>
  
<style>
</style>