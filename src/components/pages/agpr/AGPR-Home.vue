<template>
  <div class="container">
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
        <b>Administración Gubernamental por Resultados (AGpR)</b>
      </div>
      <button
        class="text-truncate"
        v-on:click="
          selected_agpr = 'EnQueConsiste';
          boolean_sidenav = false;
        "
      >
        En que consiste
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_agpr = 'InformacionGeneral';
          boolean_sidenav = false;
        "
      >
        Información general
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_agpr = 'ProgramaDeCertificacion';
          boolean_sidenav = false;
        "
      >
        Programa de certificación
      </button>
      <div class="sidenav-blue"><b>Capacitación:</b></div>
      <button
        class="text-truncate"
        v-on:click="
          selected_agpr =
            'Implantación del Sistema de Gestión para Resultados en el Sector Público';
          boolean_sidenav = false;
        "
      >
        Implantación del Sistema de Gestión para Resultados en el Sector Público
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_agpr =
            'Módulo I. Planeación de un Sistema de Administración por Resultados';
          boolean_sidenav = false;
        "
      >
        Módulo I. Planeación de un Sistema de Administración por Resultados
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_agpr = 'Módulo II. Programación en la gestión de proyectos';
          boolean_sidenav = false;
        "
      >
        Módulo II. Programación en la gestión de proyectos
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_agpr = 'Módulo III. Presupuesto basado en Resultados';
          boolean_sidenav = false;
        "
      >
        Módulo III. Presupuesto basado en Resultados (PbR)
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_agpr =
            'Módulo IV. Diseño de indicadores estratégicos y de gestión';
          boolean_sidenav = false;
        "
      >
        Módulo IV. Diseño de indicadores estratégicos y de gestión
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_agpr = 'Módulo V. Monitoreo y control';
          boolean_sidenav = false;
        "
      >
        Módulo V. Monitoreo y control
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_agpr = 'Módulo VI. Gestión de la evidencia';
          boolean_sidenav = false;
        "
      >
        Módulo VI. Gestión de la evidencia
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_agpr = 'Módulo VII. Comunicación de resultados';
          boolean_sidenav = false;
        "
      >
        Módulo VII. Comunicación de resultados
      </button>
    </div>
    <!--sidenav end-->
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">
        Administración Gubernamental por Resultados (AGpR)
      </p>
    </div>
    <span
      style="font-size: 30px; cursor: pointer; color: gray; font-weight: bold"
      v-on:click="boolean_sidenav = true"
      >&#9776; Menú de opciones</span
    >
  </div>
  <div class="my-5" v-if="selected_agpr === 'EnQueConsiste'">
    <EnQueConsiste />
  </div>
  <div class="my-5" v-if="selected_agpr === 'InformacionGeneral'">
    <InformacionGeneral />
  </div>
  <div class="my-5" v-if="selected_agpr === 'ProgramaDeCertificacion'">
    <ProgramaDeCertificacion />
  </div>
  <div
    class="my-5"
    v-if="
      selected_agpr ===
      'Implantación del Sistema de Gestión para Resultados en el Sector Público'
    "
  >
    <Implantaciondelsistemadegestionpararesultadosenelsectorpublico />
  </div>
  <div
    class="my-5"
    v-if="
      selected_agpr ===
      'Módulo I. Planeación de un Sistema de Administración por Resultados'
    "
  >
    <MóduloIPlaneacióndeunSistemadeAdministraciónporResultados />
  </div>
  <div
    class="my-5"
    v-if="
      selected_agpr === 'Módulo II. Programación en la gestión de proyectos'
    "
  >
    <MóduloIIProgramaciónenlagestióndeproyectos />
  </div>
  <div
    class="my-5"
    v-if="selected_agpr === 'Módulo III. Presupuesto basado en Resultados'"
  >
    <MóduloIIIPresupuestobasadoenResultados />
  </div>
  <div
    class="my-5"
    v-if="
      selected_agpr ===
      'Módulo IV. Diseño de indicadores estratégicos y de gestión'
    "
  >
    <MóduloIVDiseñodeindicadoresestratégicosydegestión />
  </div>
  <div class="my-5" v-if="selected_agpr === 'Módulo V. Monitoreo y control'">
    <MóduloVMonitoreoycontrol />
  </div>
  <div
    class="my-5"
    v-if="selected_agpr === 'Módulo VI. Gestión de la evidencia'"
  >
    <MóduloVIGestióndelaevidencia />
  </div>
  <div
    class="my-5"
    v-if="selected_agpr === 'Módulo VII. Comunicación de resultados'"
  >
    <MóduloVIIComunicaciónderesultados />
  </div>
</template>

<script>
import EnQueConsiste from "./EnQueConsiste.vue";
import InformacionGeneral from "./InformacionGeneral.vue";
import ProgramaDeCertificacion from "./ProgramaDeCertificacion.vue";
import Implantaciondelsistemadegestionpararesultadosenelsectorpublico from "./capacitacion/Implantación del Sistema de Gestión para Resultados en el Sector Público.vue";
import MóduloIPlaneacióndeunSistemadeAdministraciónporResultados from "./capacitacion/Módulo I Planeación de un Sistema de Administración por Resultados.vue";
import MóduloIIProgramaciónenlagestióndeproyectos from "./capacitacion/Módulo II Programación en la gestión de proyectos.vue";
import MóduloIIIPresupuestobasadoenResultados from "./capacitacion/Módulo III Presupuesto basado en Resultados.vue";
import MóduloIVDiseñodeindicadoresestratégicosydegestión from "./capacitacion/Módulo IV Diseño de indicadores estratégicos y de gestión.vue";
import MóduloVMonitoreoycontrol from "./capacitacion/Módulo V Monitoreo y control.vue";
import MóduloVIGestióndelaevidencia from "./capacitacion/Módulo VI Gestión de la evidencia.vue";
import MóduloVIIComunicaciónderesultados from "./capacitacion/Módulo VII Comunicación de resultados.vue";
export default {
  name: "AGPR-Home",
  components: {
    EnQueConsiste,
    InformacionGeneral,
    ProgramaDeCertificacion,
    Implantaciondelsistemadegestionpararesultadosenelsectorpublico,
    MóduloIPlaneacióndeunSistemadeAdministraciónporResultados,
    MóduloIIProgramaciónenlagestióndeproyectos,
    MóduloIIIPresupuestobasadoenResultados,
    MóduloIVDiseñodeindicadoresestratégicosydegestión,
    MóduloVMonitoreoycontrol,
    MóduloVIGestióndelaevidencia,
    MóduloVIIComunicaciónderesultados,
  },
  data() {
    return {
      selected_agpr: "EnQueConsiste",
      boolean_sidenav: false,
    };
  },
};
</script>

<style>
</style>