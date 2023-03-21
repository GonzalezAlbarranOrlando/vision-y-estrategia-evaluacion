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
        <b>Programa Anual de Evaluación (PAE)</b>
      </div>
      <button
        class="text-truncate"
        v-on:click="
          selected_pae = 'EnQueConsiste';
          boolean_sidenav = false;
        "
      >
        En que consiste
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_pae = 'PreguntasFrecuentes';
          boolean_sidenav = false;
        "
      >
        Preguntas frecuentes
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_pae = 'Consultoría';
          boolean_sidenav = false;
        "
      >
        Consultoría
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_pae = 'Transparencia';
          boolean_sidenav = false;
        "
      >
        Transparencia
      </button>
      <div class="sidenav-blue"><b>Capacitación:</b></div>
      <button
        class="text-truncate"
        v-on:click="
          selected_pae = 'Inducción al Programa Anual de Evaluación';
          boolean_sidenav = false;
        "
      >
        Inducción al Programa Anual de Evaluación
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_pae = 'Elaboración de Términos de Referencia';
          boolean_sidenav = false;
        "
      >
        Elaboración de Términos de Referencia
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_pae =
            'Diseño de Convenio para la Mejora de Resultados Gubernamentales';
          boolean_sidenav = false;
        "
      >
        Diseño de Convenio para la Mejora de Resultados Gubernamentales
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_pae = 'Desarrollo integral del Programa Anual de Evaluación';
          boolean_sidenav = false;
        "
      >
        Desarrollo integral del Programa Anual de Evaluación
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_pae = 'Elaboración de informes de resultados';
          boolean_sidenav = false;
        "
      >
        Elaboración de informes de resultados
      </button>
    </div>
    <!--sidenav end-->
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">
        Programa Anual de Evaluación (PAE)
      </p>
    </div>
    <span
      style="font-size: 30px; cursor: pointer; color: gray; font-weight: bold"
      v-on:click="boolean_sidenav = true"
      >&#9776; Menú de opciones</span
    >
  </div>
  <div class="my-5" v-if="selected_pae === 'EnQueConsiste'">
    <EnQueConsiste />
  </div>
  <div class="my-5" v-if="selected_pae === 'PreguntasFrecuentes'">
    <PreguntasFrecuentes />
  </div>
  <div class="my-5" v-if="selected_pae === 'Consultoría'">
    <Consultoria />
  </div>
  <div class="my-5" v-if="selected_pae === 'Transparencia'">
    <Transparencia />
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
import Transparencia from "./Transparencia.vue";
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
    Transparencia,
    InducciónalProgramaAnualdeEvaluación,
    ElaboracióndeTérminosdeReferencia,
    DiseñodeConvenioparalaMejoradeResultadosGubernamentales,
    DesarrollointegraldelProgramaAnualdeEvaluación,
    Elaboracióndeinformesderesultados,
  },
  data() {
    return {
      selected_pae: "EnQueConsiste",
      boolean_sidenav: false,
    };
  },
};
</script>

<style>
</style>