<template>
  <div class="container">
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">
        Animated title animatedTitle
      </p>
    </div>
    <!--Animated title end-->
    <!--Select option-->
    <select
      class="form-select form-select-lg"
      aria-label=".form-select-lg example"
      v-model="selected_opt"
    >
      <option selected value="opt1">opt1</option>
      <option value="opt2">opt2</option>
      <option value="opt3">opt3</option>
      <option value="opt4">opt4</option>
    </select>
    <!--
      <span>Selected: {{ selected_pae }}</span>
    -->
    <!--Select option end-->
    <br />
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
      <br />
      1234567890
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
    <br />
    <!--download here-->
    <a
      class="download-here"
      href="https://drive.google.com/uc?export=download&id=1t01rxFweZz8nVEGPO0IcwYg5kQjvdQDR"
      target="_blank"
    >
      aquí
    </a>
    <!--download here end-->
    <br />

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
      <div class="col-12 table-blue">
        <b>Descripción:</b><br />
        text
      </div>
      <div class="col-md-12 table-white">
        <b>Características:</b><br />
        text
      </div>
      <div class="col-md-12 table-blue">
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
      <div class="col-12 table-blue"><b>Fecha de realización: </b>text</div>
    </div>
    <br />
    <br />
    <!--Table end-->
    <!--Table 2 -->
    <div class="row table-row">
      <div class="col-12 table-title">title</div>
      <div class="col-12 table-white">
        <b>Objetivo:</b>
        <ul>
          <li>text</li>
        </ul>
      </div>
      <div class="col-12 table-blue">
        <b>Descripción:</b><br />
        text
      </div>
      <div class="col-12 table-white">
        <b>Características:</b>
        <hr size="2px" color="white" />
        text
      </div>
      <div class="col-12 table-blue">
        <b>Temario:</b>
        <hr size="2px" color="white" />
        <b> title </b>
        <ul class="ul-clean">
          <li>text</li>
        </ul>
      </div>
      <div class="col-12 table-white"><b>Horas de duración:</b>text</div>
      <div class="col-12 table-blue"><b>Fecha de realización: </b>text</div>
    </div>
    <br />
    <br />
    <!--Table 2 end-->
    <br />
    <!--card nosotros-->
    <div class="card">
      <div class="card-header card-header-nosotros">
        <h5 class="card-title">TITLE</h5>
      </div>
      <div class="card-body card-body-nosotros">
        <p class="card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
    <!--card nosotros end-->
    <br />
    <br />
    <div class="row">
      <div class="col-sm-6 py-2">
        <!--card transparencia-->
        <div class="card">
          <img src="@/assets/img/example.jpg" class="w-100" alt="..." />
          <div
            class="
              card-body card-body-transparencia
              d-flex
              flex-column
              justify-content-center
            "
          >
            <h2 class="my-h2">Title</h2>
            <div class="general-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod.
            </div>
          </div>
        </div>
        <!--card transparencia end-->
      </div>
      <div class="col-sm-6 py-2">
        <!--card transparencia-->
        <div class="card">
          <img src="@/assets/img/example.jpg" class="w-100" alt="..." />
          <div
            class="
              card-body card-body-transparencia
              d-flex
              flex-column
              justify-content-center
            "
          >
            <h2 class="my-h2">Title</h2>
            <div class="general-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod.
            </div>
          </div>
        </div>
        <!--card transparencia end-->
      </div>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: "TemplateView",
  data() {
    return {
      selected_opt: "opt1",
    };
  },
};
</script>

<style>
</style>