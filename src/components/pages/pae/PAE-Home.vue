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
      <option value="Inducción al Programa Anual de Evaluación">
        Inducción al Programa Anual de Evaluación
      </option>
      <option value="Elaboración de Términos de Referencia">
        Elaboración de Términos de Referencia
      </option>
      <option
        value="Diseño de Convenio para la Mejora de Resultados Gubernamentales"
      >
        Diseño de Convenio para la Mejora de Resultados Gubernamentales
      </option>
      <option value="Desarrollo integral del Programa Anual de Evaluación">
        Desarrollo integral del Programa Anual de Evaluación
      </option>
      <option value="Elaboración de informes de resultados">
        Elaboración de informes de resultados
      </option>
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
  <div
    class="my-5"
    v-if="selected_pae === 'Inducción al Programa Anual de Evaluación'"
  >
    <InducciónalProgramaAnualdeEvaluación />
  </div>
  <div
    class="my-5"
    v-if="selected_pae === 'Elaboración de Términos de Referencia'"
  >
    <ElaboracióndeTérminosdeReferencia />
  </div>
  <div
    class="my-5"
    v-if="
      selected_pae ===
      'Diseño de Convenio para la Mejora de Resultados Gubernamentales'
    "
  >
    <DiseñodeConvenioparalaMejoradeResultadosGubernamentales />
  </div>
  <div
    class="my-5"
    v-if="
      selected_pae === 'Desarrollo integral del Programa Anual de Evaluación'
    "
  >
    <DesarrollointegraldelProgramaAnualdeEvaluación />
  </div>
  <div
    class="my-5"
    v-if="selected_pae === 'Elaboración de informes de resultados'"
  >
    <Elaboracióndeinformesderesultados />
  </div>
</template>

<script>
import EnQueConsiste from "./EnQueConsiste.vue";
import PreguntasFrecuentes from "./PreguntasFrecuentes.vue";
import Consultoria from "./Consultoria.vue";
import Capacitacion from "./Capacitacion.vue";
import InducciónalProgramaAnualdeEvaluación from "./capacitacion/Inducción al Programa Anual de Evaluación.vue";
import ElaboracióndeTérminosdeReferencia from "./capacitacion/Elaboración de Términos de Referencia.vue";
import DiseñodeConvenioparalaMejoradeResultadosGubernamentales from "./capacitacion/Diseño de Convenio para la Mejora de Resultados Gubernamentales.vue";
import DesarrollointegraldelProgramaAnualdeEvaluación from "./capacitacion/Desarrollo integral del Programa Anual de Evaluación.vue";
import Elaboracióndeinformesderesultados from "./capacitacion/Elaboración de informes de resultados.vue";
export default {
  name: "PAE-Home",
  components: {
    EnQueConsiste,
    PreguntasFrecuentes,
    Consultoria,
    Capacitacion,
    InducciónalProgramaAnualdeEvaluación,
    ElaboracióndeTérminosdeReferencia,
    DiseñodeConvenioparalaMejoradeResultadosGubernamentales,
    DesarrollointegraldelProgramaAnualdeEvaluación,
    Elaboracióndeinformesderesultados,
  },
  data() {
    return {
      selected_pae: "EnQueConsiste",
    };
  },
};
</script>

<style>
</style>