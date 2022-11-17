<template>
  <div class="container">
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">
        Administración Gubernamental por Resultados (AGpR)
      </p>
    </div>
    <!--Select option-->
    <select
      class="form-select form-select-lg"
      aria-label=".form-select-lg example"
      v-model="selected_agpr"
    >
      <option selected value="EnQueConsiste">En que consiste</option>
      <option value="InformacionGeneral">Información general</option>
      <option value="ProgramaDeCertificacion">Programa de certificación</option>
      <option value="Capacitacion">Capacitación</option>

      <option
        value="Implantación del Sistema de Gestión para Resultados en el Sector Público"
      >
        Implantación del Sistema de Gestión para Resultados en el Sector Público
      </option>
      <option
        value="Módulo I Planeación de un Sistema de Administración por Resultados"
      >
        Módulo I. Planeación de un Sistema de Administración por Resultados
      </option>
      <option value="Módulo II Programación en la gestión de proyectos">
        Módulo II. Programación en la gestión de proyectos
      </option>
      <option value="Módulo III Presupuesto basado en Resultados">
        Módulo III. Presupuesto basado en Resultados (PbR)
      </option>
      <option value="Módulo IV Diseño de indicadores estratégicos y de gestión">
        Módulo IV. Diseño de indicadores estratégicos y de gestión
      </option>
      <option value="Módulo V Monitoreo y control">
        Módulo V. Monitoreo y control
      </option>
      <option value="Módulo VI Gestión de la evidencia">
        Módulo VI. Gestión de la evidencia
      </option>
      <option value="Módulo VII Comunicación de resultados">
        Módulo VII. Comunicación de resultados
      </option>
    </select>
    <!--
      <span>Selected: {{ selected_agpr }}</span>
    -->
    <!--Select option end-->
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
  <div class="my-5" v-if="selected_agpr === 'Capacitacion'">
    <Capacitacion />
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
      'Módulo I Planeación de un Sistema de Administración por Resultados'
    "
  >
    <MóduloIPlaneacióndeunSistemadeAdministraciónporResultados />
  </div>
  <div
    class="my-5"
    v-if="selected_agpr === 'Módulo II Programación en la gestión de proyectos'"
  >
    <MóduloIIProgramaciónenlagestióndeproyectos />
  </div>
  <div
    class="my-5"
    v-if="selected_agpr === 'Módulo III Presupuesto basado en Resultados'"
  >
    <MóduloIIIPresupuestobasadoenResultados />
  </div>
  <div
    class="my-5"
    v-if="
      selected_agpr ===
      'Módulo IV Diseño de indicadores estratégicos y de gestión'
    "
  >
    <MóduloIVDiseñodeindicadoresestratégicosydegestión />
  </div>
  <div class="my-5" v-if="selected_agpr === 'Módulo V Monitoreo y control'">
    <MóduloVMonitoreoycontrol />
  </div>
  <div
    class="my-5"
    v-if="selected_agpr === 'Módulo VI Gestión de la evidencia'"
  >
    <MóduloVIGestióndelaevidencia />
  </div>
  <div
    class="my-5"
    v-if="selected_agpr === 'Módulo VII Comunicación de resultados'"
  >
    <MóduloVIIComunicaciónderesultados />
  </div>
</template>

<script>
import EnQueConsiste from "./EnQueConsiste.vue";
import InformacionGeneral from "./InformacionGeneral.vue";
import Capacitacion from "./Capacitacion.vue";
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
    Capacitacion,
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
    };
  },
};
</script>

<style>
</style>