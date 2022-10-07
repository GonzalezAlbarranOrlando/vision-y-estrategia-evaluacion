<template>
  <div class="animate-div py-3 container">
    <p class="animate__animated animate__slideInDown">
      Administración Gubernamental por Resultados (AGpR)
    </p>
  </div>
  <!--Select option-->
  <div class="container">
    <select
      class="form-select form-select-lg"
      aria-label=".form-select-lg example"
      v-model="selected_agpr"
    >
      <option selected value="EnQueConsiste">En que consistene</option>
      <option value="InformacionGeneral">Informacion general</option>
      <option value="ProgramaDeCertificacion">Programa de certificación</option>
      <option value="Capacitacion">Capacitación</option>
    </select>
    <!--
      <span>Selected: {{ selected_agpr }}</span>
    -->
  </div>
  <!--Select option end-->
  <div class="my-5" v-if="selected_agpr === 'EnQueConsiste'">
    <EnQueConsiste />
  </div>
  <div class="my-5" v-if="selected_agpr === 'InformacionGeneral'">
    <InformacionGeneral />
  </div>
  <div class="my-5" v-if="selected_agpr === 'ProgramaDeCertificacion'">
    <ProgramaDeCertificacion />
  </div>
  <div class="my-5" v-if="selected_agpr === 'Capacitacion'">
    <Capacitacion />
  </div>
</template>

<script>
import EnQueConsiste from "./EnQueConsiste.vue";
import InformacionGeneral from "./InformacionGeneral.vue";
import Capacitacion from "./Capacitacion.vue";
import ProgramaDeCertificacion from "./ProgramaDeCertificacion.vue";
export default {
  name: "AGPR-Home",
  components: {
    EnQueConsiste,
    InformacionGeneral,
    Capacitacion,
    ProgramaDeCertificacion,
  },
  data() {
    return {
      selected_agpr: "EnQueConsiste",
    };
  },
};
</script>

<style>
</style>