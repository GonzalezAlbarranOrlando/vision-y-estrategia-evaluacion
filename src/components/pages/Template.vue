<template>
  <div class="container">
    <!--Animated title-->
    <div class="animate-div p-3">
      <p class="animate__animated animate__heartBeat">Animated title</p>
    </div>
    <!--Animated title end-->
    <!--Heading 1-->
    <h1 class="my-h1">Heading 1</h1>
    <!--General text-->
    <div class="general-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </div>
    <!--General text end-->
    <!--Heading 2-->
    <h2 class="my-h2">Heading 2</h2>
    <!--General text-->
    <div class="general-text">
      <ul>
        <li>El eficiente diseño de los programas presupuestarios.</li>
        <li>La efectividad de los programas presupuestarios.</li>
        <li>Aspectos susceptibles de Mejora.</li>
        <li>Hallazgos.</li>
      </ul>
    </div>
    <!--General text end-->

    <!--download text-->
    <div class="mb-3" style="text-align: center">
      <a
        class="download-text"
        href="https://drive.google.com/uc?export=download&id=1t01rxFweZz8nVEGPO0IcwYg5kQjvdQDR"
        target="_blank"
      >
        Download text
        <i class="fa fa-cloud-download download-text"></i>
      </a>
    </div>
    <!--download text end-->
    <!--Table -->
    <div class="row table-row">
      <div class="col-12 table-title">titulo</div>
      <div class="col-12 table-white">
        <b>Objetivo:</b>
        <ul>
          <li>text</li>
        </ul>
      </div>
      <div class="col-12 table-gray">
        <b>Descripción:</b><br />
        text
      </div>
      <div class="col-md-5 table-white">
        <b>Características:</b><br />
        text
      </div>
      <div class="col-md-7 table-gray">
        <b>Temario:</b>
        <ol type="1">
          <li>text</li>
          <ul class="ul-clean">
            <li>opc1</li>
            <li>opc2</li>
          </ul>
        </ol>
      </div>
      <div class="col-12 table-white"><b>Horas de duración:</b>text</div>
      <div class="col-12 table-gray"><b>Fecha de realización: </b>text</div>
    </div>
    <br />
    <br />
    <!--Table end-->
  </div>
</template>

<script>
export default {
  name: "TemplateView",
};
</script>

<style>
</style>