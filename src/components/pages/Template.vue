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
    <a class="download-here" href="/pdf/example.pdf" target="_blank"> aquí </a>
    <!--download here end-->
    <br />

    <!--download text-->
    <div class="mb-3" style="text-align: center">
      <a class="download-text" href="/pdf/example.pdf" target="_blank">
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
          <div class="card-body card-body-transparencia">
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
          <div class="card-body card-body-transparencia">
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
    <div class="row">
      <div class="col-lg-6 py-2">
        <!--card servicios pae-->
        <div class="card">
          <router-link to="/contacto" style="text-decoration: none">
            <img src="@/assets/img/example.jpg" class="w-100" alt="..." />
            <div class="card-header table-title">
              <h5 class="mb-3 mt-3">title</h5>
            </div>
          </router-link>
        </div>
        <!--card servicios pae end-->
      </div>
      <div class="col-sm-6 py-2">
        <!--card servicios-->
        <div class="card">
          <router-link to="/contacto" style="text-decoration: none">
            <img src="@/assets/img/example.jpg" class="w-100" alt="..." />
            <div class="card-header card-header-nosotros">
              <h5 class="card-title">TITLE</h5>
            </div>
          </router-link>
        </div>
        <!--card servicios end-->
      </div>
    </div>
    <br />
    <br />
    <div class="row justify-content-center">
      <div class="col-sm-6 col-lg-3 py-2">
        <img
          src="@/assets/img/equipo/01-VICENTE.jpg"
          class="w-100"
          style="border: 2px solid #555"
          alt="..."
        />
        <h2 class="my-h2" style="text-align: center">name</h2>
        <div class="general-text" style="text-align: center">text</div>
      </div>
      <div class="col-sm-6 col-lg-3 py-2">
        <img
          src="@/assets/img/equipo/02-LALO.jpg"
          class="w-100 rounded-circle"
          alt="..."
        />
        <h2 class="my-h2" style="text-align: center">name</h2>
        <div class="general-text" style="text-align: center">text</div>
      </div>
      <div class="col-sm-6 col-lg-3 py-2">
        <img
          src="@/assets/img/equipo/03-MIRIAM.jpg"
          class="w-100 rounded-5"
          style="border: 2px solid #555"
          alt="..."
        />
        <h2 class="my-h2" style="text-align: center">name</h2>
        <div class="general-text" style="text-align: center">text</div>
      </div>
      <div class="col-sm-6 col-lg-3 py-2">
        <img
          src="@/assets/img/equipo/04-ANDREA.jpg"
          class="w-100 rounded-5"
          alt="..."
        />
        <h2 class="my-h2" style="text-align: center">name</h2>
        <div class="general-text" style="text-align: center">text</div>
      </div>
    </div>
    <br />
    <br />
    <div class="card-deck row">
      <div class="card col-sm-6 col-lg-3">
        <img
          class="card-img-top"
          src="@/assets/img/equipo/01-VICENTE.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This card has supporting text below as a natural lead-in to
            additional content.
          </p>
        </div>
      </div>
      <div class="card col-sm-6 col-lg-3">
        <img
          class="card-img-top"
          src="@/assets/img/equipo/02-LALO.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This card has supporting text below as a natural lead-in to
            additional content.
          </p>
        </div>
      </div>
      <div class="card col-sm-6 col-lg-3">
        <img
          class="card-img-top"
          src="@/assets/img/equipo/03-MIRIAM.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This card has supporting text below as a natural lead-in to
            additional content.
          </p>
        </div>
      </div>
      <div class="card col-sm-6 col-lg-3">
        <img
          class="card-img-top"
          src="@/assets/img/equipo/04-ANDREA.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This card has supporting text below as a natural lead-in to
            additional content.
          </p>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="row">
      <div class="col-sm-6 col-lg-3">
        <!--card equipo-->
        <div class="card">
          <img
            src="@/assets/img/equipo/01-VICENTE.jpg"
            class="w-100 rounded-circle"
            alt="..."
          />
          <div class="card-body card-body-equipo">
            <h2 class="my-h2">Title</h2>
            <div class="general-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod.
            </div>
          </div>
        </div>
        <!--card equipo end-->
      </div>
      <div class="col-sm-6 col-lg-3">
        <!--card equipo-->
        <div class="card">
          <img
            src="@/assets/img/equipo/02-LALO.jpg"
            class="w-100 rounded-circle"
            alt="..."
          />
          <div class="card-body card-body-equipo">
            <h2 class="my-h2">Title</h2>
            <div class="general-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod.
            </div>
          </div>
        </div>
        <!--card equipo end-->
      </div>
      <div class="col-sm-6 col-lg-3">
        <!--card equipo-->
        <div class="card">
          <img
            src="@/assets/img/equipo/03-MIRIAM.jpg"
            class="w-100"
            alt="..."
          />
          <div class="card-body card-body-equipo">
            <h2 class="my-h2">Title</h2>
            <div class="general-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod.
            </div>
          </div>
        </div>
        <!--card equipo end-->
      </div>
      <div class="col-sm-6 col-lg-3">
        <!--card equipo-->
        <div class="card">
          <img
            src="@/assets/img/equipo/04-ANDREA.jpg"
            class="w-100"
            alt="..."
          />
          <div class="card-body card-body-equipo">
            <h2 class="my-h2">Title</h2>
            <div class="general-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod.
            </div>
          </div>
        </div>
        <!--card equipo end-->
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <h2 class="my-h2">EQUIPO EVALUADOR</h2>
    <div class="row">
      <div class="col-sm-6 col-lg-3">
        <!--card nosotros-->
        <div class="card">
          <div class="card-body">
            <img
              src="@/assets/img/equipo/04-ANDREA.jpg"
              class="w-100 rounded-circle"
              alt="..."
            />
          </div>
          <div class="card-header card-header-nosotros">
            <div class="general-text" style="color: black; text-align: center">
              <b>Title</b><br />subtitle
            </div>
          </div>
        </div>
        <!--card nosotros end-->
      </div>
    </div>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div
      id="carouselCaptions"
      class="carousel slide carousel-dark px-5"
      data-bs-ride="true"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="3000">
          <div style="margin: 300px">
            <img
              src="@/assets/img/equipo/04-ANDREA.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <div style="margin: 300px">
            <img
              src="@/assets/img/equipo/05-HAROLD.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <!--Accordion example-->
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Accordion Item #1
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Accordion Item #2
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Accordion Item #3
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
    <!--Accordion example end-->
    <br />

    <!--Accordion mood-->
    <div class="accordion" id="accordionMood">
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading1">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse1"
            aria-expanded="true"
            aria-controls="collapse1"
          >
            Accordion Item #1
          </button>
        </h2>
        <div
          id="collapse1"
          class="accordion-collapse collapse show"
          aria-labelledby="heading1"
          data-bs-parent="#accordionMood"
        >
          <div class="accordion-body">text #1</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading2">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse2"
            aria-expanded="false"
            aria-controls="collapse2"
          >
            Accordion Item #2
          </button>
        </h2>
        <div
          id="collapse2"
          class="accordion-collapse collapse"
          aria-labelledby="heading2"
          data-bs-parent="#accordionMood"
        >
          <div class="accordion-body">text #2</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading3">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse3"
            aria-expanded="false"
            aria-controls="collapse3"
          >
            Accordion Item #3
          </button>
        </h2>
        <div
          id="collapse3"
          class="accordion-collapse collapse"
          aria-labelledby="heading3"
          data-bs-parent="#accordionMood"
        >
          <div class="accordion-body">text #3</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading4">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse4"
            aria-expanded="false"
            aria-controls="collapse4"
          >
            Accordion Item #4
          </button>
        </h2>
        <div
          id="collapse4"
          class="accordion-collapse collapse"
          aria-labelledby="heading4"
          data-bs-parent="#accordionMood"
        >
          <div class="accordion-body">text #4</div>
        </div>
      </div>
    </div>
    <!--Accordion mood end-->
    <br />
    <br />
    <br />
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