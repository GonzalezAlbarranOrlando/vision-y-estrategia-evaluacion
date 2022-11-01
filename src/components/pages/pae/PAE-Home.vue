<template>
  <div class="container">
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">
        Programa Anual de Evaluación (PAE)
      </p>
    </div>
    <!--Select option-->
    <select
      class="form-select form-select-lg"
      aria-label=".form-select-lg example"
      v-model="selected_pae"
    >
      <option selected value="EnQueConsiste">En que consiste</option>
      <option value="PreguntasFrecuentes">Preguntas frecuentes</option>
      <option value="Consultoria">Consultoría</option>
      <option value="Capacitacion">Capacitación</option>
    </select>
    <!--
      <span>Selected: {{ selected_pae }}</span>
    -->
    <!--Select option end-->
  </div>
  <div class="my-5" v-if="selected_pae === 'EnQueConsiste'">
    <EnQueConsiste />
  </div>
  <div class="my-5" v-if="selected_pae === 'PreguntasFrecuentes'">
    <PreguntasFrecuentes />
  </div>
  <div class="my-5" v-if="selected_pae === 'Consultoria'">
    <Consultoria />
  </div>
  <div class="my-5" v-if="selected_pae === 'Capacitacion'">
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
  data() {
    return {
      selected_pae: "EnQueConsiste",
    };
  },
};
</script>

<style>
</style>