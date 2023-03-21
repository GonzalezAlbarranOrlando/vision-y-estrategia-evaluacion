<template>
  <div class="container-fluid">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link class="" to="/">Inicio</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link class="" to="/boletines">Boletines</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Encuesta Nacional de Salud y Nutrición
        </li>
      </ol>
    </nav>
    <h1 class="my-h1">Encuesta Nacional de Salud y Nutrición</h1>
    <div class="row">
      <div class="col-sm-4 text-center">
        <img
          src="@/assets/img/boletines/health.jpeg"
          class="w-100 my-3"
          alt="..."
        />
      </div>
      <div class="col-sm-8 general-text">
        <p style="text-align: center">
          <b>
            El que tiene salud, tiene esperanza, el que tiene esperanza, tiene
            vida.
          </b>
        </p>
        <p>
          la Encuesta Nacional de Salud y Nutrición (ENSANUT) es una herramienta
          para estudiar la salud y nutrición de los mexicanos, así como para
          medir el desempeño de los sistemas de salud a nivel nacional.
        </p>
        <p>
          <b> Programas sociales </b>
        </p>
        <p>
          Durante el levantamiento de la Ensanut 2021, el 39.5% de informó
          recibir al menos algún programa social de ayuda alimentaria, el 30%
          recibió un programa, el 7% dos programas, y 2.6% tres o más programas.
        </p>
        <p>
          El programa social con una mayor cantidad de población beneficiada fue
          la pensión para adultos mayores con un 62.2%, seguido del Programa
          Nacional de Becas para el Bienestar Benito Juárez con el 18.1%, el
          Programa Alimentos Escolares (modalidad fríos) del DIF con el 6.1%, y
          el Programa de Abasto Social de Leche Liconsa con el 5.2%.
        </p>
        <p>
          <b> Seguridad alimentaria </b>
        </p>
        <p>
          La prevalencia de inseguridad alimentaria, en cualquiera de sus
          categorías, fue de 60.8%: 34.9% en inseguridad leve, 15.8% en
          inseguridad moderada y 10.1% en inseguridad severa.
        </p>
        <p>
          <b> Salud </b>
        </p>
        <p>
          La Ensanut permite saber qué proporción de la población tuvo alguna
          necesidad de salud en los últimos tres meses, donde 20% reportó haber
          tenido una necesidad de salud, de éstos, 88% buscó atención, 87% fue
          atendido y
          <b>sólo 40% se atendió en instituciones públicas de salud.</b>
        </p>
        <p>
          A nivel nacional el 37.6% son derechohabientes del IMSS, 7.1% tiene
          ISSSTE, 54% no tienen seguridad social, 1% está afiliado a otros
          servicios públicos como Pemex o Sedena y 0.3% tienen seguro médico
          privado.
          <b
            >Destaca que una proporción importante de la población
            derechohabiente se atiende en servicios privados.</b
          >
        </p>
        <p>
          Para derechohabientes del IMSS, 39% fueron atendidos en servicios
          privados y 49% para derechohabientes del ISSSTE. En el caso de la
          población sin “derechohabiencia” que incluye aquellos que reportaron
          haber sido afiliados al Seguro Popular en 2018, que se atienden en
          unidades de la Secretaría de Salud, 66% se atendió en servicios
          privados.
          <b
            >En total, 54% de la población se atendió en el sector privado y 46%
            en el sector público.</b
          >
        </p>
        <p>
          <b> Agua para la salud </b>
        </p>
        <p>
          Por otro lado, la inseguridad hídrica tiene impactos perjudiciales en
          la salud mental, nutricional y física de las personas, así como en el
          bienestar económico y político de los países, la seguridad del agua,
          contempla cuatro dimensiones: acceso, disponibilidad, uso y
          estabilidad. Acceso se refiere a la capacidad del individuo/hogar para
          obtener agua (ya sea desplazándose a la fuente del agua, puede pagar
          por el suministro de agua). 16.3% de los hogares entrevistados fueron
          clasificados con inseguridad del agua. Esta proporción equivale a
          cerca de 6 millones hogares de México que han experimentado más o con
          mayor frecuencia eventos relacionados con el acceso, disponibilidad,
          utilización, aceptabilidad y confiabilidad del agua.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyName",
};
</script>    
<style>
</style>