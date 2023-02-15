<template>
  <div class="container mb-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link class="" to="/"> Inicio </router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Boletines</li>
      </ol>
    </nav>
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">Boletines</p>
    </div>
    <!--Animated title end-->
    <div class="row justify-content-center" id="boletines">
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/results.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              Administración Pública para Resultados
            </h5>
            <p class="crop-text-4 general-text">
              <em>
                Todos los organismos públicos cumplen cabalmente con sus
                programas de trabajo, entonces… ¿Porqué no se observan los
                resultados de ese trabajo?
              </em>
              <br />
              Datos conservadores indican que el 10% de los planes de desarrollo
              municipales se ejecutan de manera adecuada, sin embargo, la
              información que se sistematiza en ese porcentaje no está sujeta a
              ninguna comprobación, pues solo se muestran los informes de
              cumplimiento, no las evidencias de cómo se cumplieron. Los motivos
              son múltiples, aunque el más recurrente es que no se transparenta
              la información debido a que no está lo suficientemente soportada
              por evidencias. Entonces, sí 90% de los planes no se cumplen y 10%
              de los que se cumplen no registran evidencia de cumplimiento:
              “tenemos un problema Houston”.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/Administraci%C3%B3n_P%C3%BAblica_para_Resultados"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/measure.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              Medición de la calidad del gasto municipal en Edomex
            </h5>
            <p class="crop-text-4 general-text">
              Un centavo ahorrado es un centavo ganado: Benjamin Franklin
              <br />
              Hay muy pocas herramientas para medir si los recursos públicos se
              están ejerciendo de tal manera que se cumplan los propósitos para
              los que fueron destinados, una de ellas, establecida incluso en la
              Constitución Federal (Artículo 134) es el Programa Anual de
              Evaluación (PAE), el cual permite garantizar un uso eficaz y
              eficiente de los recursos con el objeto de elevar el impacto del
              gasto, es decir, identifica si el presupuesto ejercido está
              generando el beneficio esperado de acuerdo a las necesidades y
              expectativas de una población. En resumen, los entes públicos
              tienen la obligación constitucional de conocer si los programas
              presupuestarios funcionan, de informar a la población de los
              resultados de dichos programas, y de medir la calidad del gasto
              público para traducirla en mejor calidad de vida para la
              ciudadanía.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/Medici%C3%B3n_de_la_calidad_del_gasto_municipal_en_Edomex"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/government.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              El valor público en las organizaciones gubernamentales del siglo
              XXI
            </h5>
            <p class="crop-text-4 general-text">
              <em>
                No pidas retos a la altura de tu fuerza; pide fuerza a la altura
                de tus retos. El Capitán América.
              </em>
              <br />
              El término “valor público” se popularizó a raíz de los trabajos de
              Mark H. Moore, (Creating Public Value; Strategic Managment in
              Government) para denotar la necesidad de lograr mejoras
              considerables en la administración pública. Propone la utilización
              de la administración estratégica en vez de doctrinas tradicionales
              para crear instituciones que respondan de manera más efectiva a
              las necesidades de los ciudadanos(as). El impacto que esta
              doctrina ha tenido se deriva del “deseo genuino de los gobiernos
              para entender las cosas que le importan a la gente”.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/El_valor_p%C3%BAblico_en_las_organizaciones_gubernamentales_del_siglo_XXI"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/checklist.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              Evaluar para mejorar la calidad del gasto público.
            </h5>
            <p class="crop-text-4 general-text">
              “El éxito de un programa podría decidirse por la cantidad de
              presupuesto que se le asigna, sin embargo, la verdadera evaluación
              está en apreciar sus resultados”
              <br />
              El término “evaluación” se ha ido diluyendo con el pasar del
              tiempo, haciendo que cada vez sea menos preciso entenderlo, en
              gran parte se debe a todo aquello con lo que lo relacionamos; y no
              está de más decir que desde las aulas se generan ideas -erronas-
              de que evaluar supone una oportunidad que es exclusivamente para
              señalar errores, ¿quién no recuerda esa sensación de
              incertidumbre, incluso temor, cuando se acercaban las
              evaluaciones?
            </p>
            <router-link
              aria-current="page"
              to="/boletines/Evaluar_para_mejorar_la_calidad_del_gasto_p%C3%BAblico"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/decline.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              Gobiernos con resultados que no son apreciados por los electores
            </h5>
            <p class="crop-text-4 general-text">
              “La falta de un bien (hospital o patrulla) no necesariamente es un
              problema”.
              <br />
              Estamos a escasas tres semanas de ver una de las escenas más
              frustrantes para los alcaldes y diputados, que en algunos casos
              terminará con su carrera política: A pesar de que muchos
              trabajaron a tope, repartieron despensas, construyeron clínicas,
              dieron miles de apoyos… perderán las elecciones.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/Gobiernos_con_resultados_que_no_son_apreciados_por_los_electores"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/fist_bump.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              En el trabajo diario, la evidencia hace la diferencia
            </h5>
            <p class="crop-text-4 general-text">
              <em>
                Es incorrecto siempre, en todas partes, y para todos, creer algo
                basándose en insuficientes evidencias.
              </em>
              <br />
              En muy pocos casos logramos identificar logros importantes en
              nuestro trabajo cotidiano, nos preocupamos siempre por cumplir con
              el trabajo que se nos asigna, y aunque muchas veces sabemos que
              estamos dando un valor agregado a la organización, la evidencia de
              ello no es identificable ni por nuestros empleadores, ni por los
              clientes o usuarios.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/En_el_trabajo_diario_la_evidencia_hace_la_diferencia"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/survey.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              Encuesta Nacional de Calidad de Servicios Públicos
            </h5>
            <p class="crop-text-4 general-text">
              “Predecir el diluvio no cuenta, construir el arca, si”
              <br />
              Identifico dos brechas relevantes en cuanto al destino de los
              recursos públicos, la primera brecha tiene que ver con las
              prioridades del gobernante a la hora de programar el gasto, cuya
              orientación deriva generalmente en un mayor número de programas
              sociales, como apoyo a las siguientes elecciones, y también en la
              construcción de obras emblemáticas, que le permitirán “pasar a la
              posteridad”. Digamos que, en este caso, la brecha consiste en que
              dichas acciones no necesariamente coinciden con las necesidades de
              los habitantes.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/Encuesta_Nacional_de_Calidad_de_Servicios_P%C3%BAblicos"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/communication.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              La comunicación de resultados, un problema añejo.
            </h5>
            <p class="crop-text-4 general-text">
              Lo de hoy es escuchar a gran cantidad de directivos públicos
              afirmar que todo iría mejor si su equipo de comunicación social
              fuera más inteligente para enterar a la sociedad de logros en la
              gestión diaria. Me atrevo a señalar que en muchos casos se
              califica esta situación como el mayor problema para alcanzar un
              mejor desempeño gubernamental.
              <br />
              El problema no es de hoy, baste decir que la comunicación
              gubernamental como la entendemos en la actualidad es una invención
              de los romanos, particularmente del emperador Julio Cesar, quien
              fue el creador del primer periódico del que tenemos antecedente;
              se trató del
              <em>Acta Diurna Populi Romani</em>. Escribe Suetonio: “Lo primero
              que ordenó, al posesionarse de su dignidad, fue que se llevara un
              diario de todos los actos populares y del senado y que se
              publicase”. (De Masi:2001).
            </p>
            <router-link
              aria-current="page"
              to="/boletines/La_comunicaci%C3%B3n_de_resultados_un_problema_a%C3%B1ejo"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/poverty.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              Medir la pobreza: Lo que no se mide se deteriora.
            </h5>
            <p class="crop-text-4 general-text">
              <em>
                “La pobreza a menudo priva al hombre de toda virtud: es difícil
                que un costal vacío se mantenga derecho”. Benjamin Franklin
              </em>
              <br />
              Para conocer el estado de la pobreza el Consejo Nacional de
              Evaluación de la Política de Desarrollo Social (CONEVAL), ha
              establecido una metodología que considera al menos 8 indicadores y
              vincula la evaluación integral de la política nacional de
              desarrollo social para efectuar su medición.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/Medir_la_pobreza_Lo_que_no_se_mide_se_deteriora"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/savings.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              Reingeniería de programas sociales: Hacia el Ingreso Básico
              Universal (IBU)
            </h5>
            <p class="crop-text-4 general-text">
              El Estado de Alaska fue la experiencia pionera en el mundo al
              reconocer el IBU como un derecho social. En 1976 se instituyó un
              fondo (el Alaska Permanent Fund) con 50% de los impuestos de la
              explotación del petróleo y de las riquezas nacionales de Alaska.
              En América Latina, Brasil en 2005 promulgó la Ley No. 10835, que
              crea el Ingreso Básico Ciudadano para todos los brasileños y
              residentes legales de más de cinco años en el país.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/Reingenier%C3%ADa_de_programas_sociales"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/health.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              Encuesta Nacional de Salud y Nutrición
            </h5>
            <p class="crop-text-4 general-text">
              El que tiene salud, tiene esperanza, el que tiene esperanza, tiene
              vida.
              <br />
              la Encuesta Nacional de Salud y Nutrición (ENSANUT) es una
              herramienta para estudiar la salud y nutrición de los mexicanos,
              así como para medir el desempeño de los sistemas de salud a nivel
              nacional.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/Encuesta_Nacional_de_Salud_y_Nutrici%C3%B3n"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/results2.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              Resultados de la Evaluación del Programa federal “Sembrando Vida”,
              para los años 2019 y 2020
            </h5>
            <p class="crop-text-4 general-text">
              En días pasados CONEVAL dio a conocer los resultados de la
              evaluación de uno de los programas insignia del gobierno federal
              bajo la responsabilidad de la Secretaría del Bienestar, y que
              tiene por objetivo Lograr que los campesinos de zonas rurales
              mejoren sus ingresos para hacer productiva la tierra, generando
              empleos, autosuficiencia alimentaria, mejora en los ingresos de la
              población y recuperación de la cobertura forestal. La población
              objetivo es de campesinos mayores de edad, que habitan en
              localidades rurales en municipios con niveles de rezago social y
              que son propietarios o poseedores de 2.5 hectáreas disponibles
              para proyectos agroforestales.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/Resultados_de_la_Evaluaci%C3%B3n_del_Programa_federal_Sembrando_Vida"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/mistake.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              Problemas públicos mal diagnosticados
            </h5>
            <p class="crop-text-4 general-text">
              “Algunos remedios son peores que la enfermedad”
              <br />
              Mientras las encuestadoras, los medios de comunicación y las áreas
              de comunicación social repiten hasta el cansancio que la
              inseguridad pública es el principal problema del país, muchos
              vemos que se trata de un tema bastante mal diagnosticado, porque
              se etiqueta al igual como inseguridad a las extorsiones en los
              estados de México y Michoacán, a la violencia de cárteles en el
              norte y a los feminicidios en todo el país.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/Problemas_p%C3%BAblicos_mal_diagnosticados"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/money.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              Gastar bien, la meta de los gobiernos municipales del siglo XXI.
            </h5>
            <p class="crop-text-4 general-text">
              <em>
                Para lo limpio, ni jabón se ocupa. Frase popular del norte de
                México.
              </em>
              <br />
              Para gastar mejor, cualquier gobierno tiene que ser capaz de
              realizar un proceso con rigor técnico, normativo y metodológico
              que permita la mejora continua de sus programas presupuestarios
              y/o fondos federales ejercidos. El rigor técnico y metodológico se
              cumple cuando se acatan las disposiciones emitidas por el Consejo
              Nacional de Evaluación de la Política de Desarrollo Social
              (CONEVAL).
            </p>
            <router-link
              aria-current="page"
              to="/boletines/Gastar_bien_la_meta_de_los_gobiernos_municipales_del_siglo_XXI"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoletinesHome",
};
</script>

<style>
</style>