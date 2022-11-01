<template>
  <div class="container py-5">
    <div
      id="carouselExampleIndicators"
      class="carousel slide carousel-dark my-shadow"
      data-bs-ride="true"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="3000">
          <router-link to="/pae-calendario">
            <img
              src="@/assets/img/carrusel/carrusel-calendario-pae.jpeg"
              class="d-block w-100"
              alt="..."
            />
          </router-link>
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <router-link to="/pbr">
            <img
              src="@/assets/img/carrusel/carrusel-PbR.jpeg"
              class="d-block w-100"
              alt="..."
            />
          </router-link>
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <router-link to="/agpr">
            <img
              src="@/assets/img/carrusel/carrusel-agpr.jpeg"
              class="d-block w-100"
              alt="..."
            />
          </router-link>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <h1 class="my-h1 mt-5">Servicios</h1>
    <div class="row justify-content-center">
      <div class="col-sm-6 py-2">
        <!--card servicios pae-->
        <div class="card">
          <router-link to="/pae" style="text-decoration: none">
            <img
              src="@/assets/img/servicios/servicio-pae.jpeg"
              class="w-100"
              alt="..."
            />
            <div class="card-header table-title">
              <h5 class="my-3">Programa Anual de Evaluación (PAE)</h5>
            </div>
          </router-link>
        </div>
        <!--card servicios pae end-->
      </div>
      <div class="col-sm-6 py-2">
        <!--card servicios pbr-->
        <div class="card">
          <router-link to="/pbr" style="text-decoration: none">
            <img
              src="@/assets/img/servicios/servicio-pbr.jpeg"
              class="w-100"
              alt="..."
            />
            <div class="card-header table-title">
              <h5 class="my-3">Presupuesto basado en Resultados (PbR)</h5>
            </div>
          </router-link>
        </div>
        <!--card servicios pbr end-->
      </div>
      <div class="col-sm-6 py-2">
        <!--card servicios agpr-->
        <div class="card">
          <router-link to="/agpr" style="text-decoration: none">
            <img
              src="@/assets/img/servicios/servicio-agpr.jpeg"
              class="w-100"
              alt="..."
            />
            <div class="card-header table-title">
              <h5 class="my-3">Estándar de Competencia</h5>
            </div>
          </router-link>
        </div>
        <!--card servicios agpr end-->
      </div>
    </div>
    <div class="alert alert-danger my-5" role="alert">
      Favor de leer el
      <a
        href="/pdf/AVISO DE PRIVACIDAD Y CONFIDENCIALIDAD.pdf"
        download
        class="alert-link"
        >Aviso de privacidad y confidencialidad</a
      >.
    </div>
  </div>
</template>

<script>
export default {
  name: "InicioPage",
};
</script>

<style>
</style>