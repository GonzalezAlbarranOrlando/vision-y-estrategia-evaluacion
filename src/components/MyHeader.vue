<template>
  <nav class="navbar navbar-expand-lg header-text">
    <div class="container-fluid container">
      <!--Logo-->
      <router-link class="nav-link active" aria-current="page" to="/">
        <img src="@/assets/img/vision-y-estrategia.png" width="120" height="" />
      </router-link>
      <!--Navbar toggler-->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!--Navbar-->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">
              <i class="fa fa-home"></i>
              <b>Inicio</b>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/nosotros">
              <i class="fa fa-phone"></i>
              <b>Nosotros</b>
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fa fa-bar-chart"></i>
              <b>Soluciones</b>
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/pae">
                  <b>PAE</b>
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/pbr">
                  <b>PbR</b>
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/agpr">
                  <b>AGpR</b>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contacto">
              <i class="fa fa-phone"></i>
              <b>Contacto</b>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/template">
              <i class="fa fa-folder"></i>
              <b>Template</b>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MyHeader",
};
</script>

<style>
</style>