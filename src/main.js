import { createApp } from 'vue'
import App from './App.vue'
//vue-router
import { createRouter, createWebHashHistory } from 'vue-router'

// 1. Define route components.
import Inicio from './components/pages/Inicio.vue'
import Contacto from './components/pages/Contacto.vue'
import Nosotros from './components/pages/Nosotros.vue'
import Template from '@/components/pages/Template.vue'
import PAEcalendario from '@/components/pages/pae/Calendario.vue'
import PAEhome from '@/components/pages/pae/PAE-Home.vue'
import AGPRhome from '@/components/pages/agpr/AGPR-Home.vue'
import PBRhome from '@/components/pages/pbr/PBR-Home.vue'

import BoletinesHome from '@/components/pages/boletines/BoletinesHome.vue'
import Administración_Pública_para_Resultados from '@/components/pages/boletines/Administración_Pública_para_Resultados.vue'
import Medición_de_la_calidad_del_gasto_municipal_en_Edomex from '@/components/pages/boletines/Medición_de_la_calidad_del_gasto_municipal_en_Edomex.vue'
import El_valor_público_en_las_organizaciones_gubernamentales_del_siglo_XXI from '@/components/pages/boletines/El_valor_público_en_las_organizaciones_gubernamentales_del_siglo_XXI.vue'
import Evaluar_para_mejorar_la_calidad_del_gasto_público from '@/components/pages/boletines/Evaluar_para_mejorar_la_calidad_del_gasto_público.vue'
import Gobiernos_con_resultados_que_no_son_apreciados_por_los_electores from '@/components/pages/boletines/Gobiernos_con_resultados_que_no_son_apreciados_por_los_electores.vue'
import En_el_trabajo_diario_la_evidencia_hace_la_diferencia from '@/components/pages/boletines/En_el_trabajo_diario_la_evidencia_hace_la_diferencia.vue'
import Encuesta_Nacional_de_Calidad_de_Servicios_Públicos from '@/components/pages/boletines/Encuesta_Nacional_de_Calidad_de_Servicios_Públicos.vue'
import La_comunicación_de_resultados_un_problema_añejo from '@/components/pages/boletines/La_comunicación_de_resultados_un_problema_añejo.vue'
import Medir_la_pobreza_Lo_que_no_se_mide_se_deteriora from '@/components/pages/boletines/Medir_la_pobreza_Lo_que_no_se_mide_se_deteriora.vue'
import Reingeniería_de_programas_sociales from '@/components/pages/boletines/Reingeniería_de_programas_sociales.vue'
import Encuesta_Nacional_de_Salud_y_Nutrición from '@/components/pages/boletines/Encuesta_Nacional_de_Salud_y_Nutrición.vue'
import Resultados_de_la_Evaluación_del_Programa_federal_Sembrando_Vida from '@/components/pages/boletines/Resultados_de_la_Evaluación_del_Programa_federal_Sembrando_Vida.vue'
import Problemas_públicos_mal_diagnosticados from '@/components/pages/boletines/Problemas_públicos_mal_diagnosticados.vue'
import Gastar_bien_la_meta_de_los_gobiernos_municipales_del_siglo_XXI from '@/components/pages/boletines/Gastar_bien_la_meta_de_los_gobiernos_municipales_del_siglo_XXI.vue'

// 2. Define some routes
// Each route should map to a component.
const routes = [
    { path: '/', component: Inicio },
    { path: '/contacto', component: Contacto },
    { path: '/nosotros', component: Nosotros },
    { path: '/template', component: Template },
    { path: '/pae-calendario', component: PAEcalendario },
    { path: '/pae', component: PAEhome },
    { path: '/agpr', component: AGPRhome },
    { path: '/pbr', component: PBRhome },

    { path: '/boletines', component: BoletinesHome },
    { path: '/boletines/Administraci%C3%B3n_P%C3%BAblica_para_Resultados', component: Administración_Pública_para_Resultados },
    { path: '/boletines/Medici%C3%B3n_de_la_calidad_del_gasto_municipal_en_Edomex', component: Medición_de_la_calidad_del_gasto_municipal_en_Edomex },
    { path: '/boletines/El_valor_p%C3%BAblico_en_las_organizaciones_gubernamentales_del_siglo_XXI', component: El_valor_público_en_las_organizaciones_gubernamentales_del_siglo_XXI },
    { path: '/boletines/Evaluar_para_mejorar_la_calidad_del_gasto_p%C3%BAblico', component: Evaluar_para_mejorar_la_calidad_del_gasto_público },
    { path: '/boletines/Gobiernos_con_resultados_que_no_son_apreciados_por_los_electores', component: Gobiernos_con_resultados_que_no_son_apreciados_por_los_electores },
    { path: '/boletines/En_el_trabajo_diario_la_evidencia_hace_la_diferencia', component: En_el_trabajo_diario_la_evidencia_hace_la_diferencia },
    { path: '/boletines/Encuesta_Nacional_de_Calidad_de_Servicios_P%C3%BAblicos', component: Encuesta_Nacional_de_Calidad_de_Servicios_Públicos },
    { path: '/boletines/La_comunicaci%C3%B3n_de_resultados_un_problema_a%C3%B1ejo', component: La_comunicación_de_resultados_un_problema_añejo },
    { path: '/boletines/Medir_la_pobreza_Lo_que_no_se_mide_se_deteriora', component: Medir_la_pobreza_Lo_que_no_se_mide_se_deteriora },
    { path: '/boletines/Reingenier%C3%ADa_de_programas_sociales', component: Reingeniería_de_programas_sociales },
    { path: '/boletines/Encuesta_Nacional_de_Salud_y_Nutrici%C3%B3n', component: Encuesta_Nacional_de_Salud_y_Nutrición },
    { path: '/boletines/Resultados_de_la_Evaluaci%C3%B3n_del_Programa_federal_Sembrando_Vida', component: Resultados_de_la_Evaluación_del_Programa_federal_Sembrando_Vida },
    { path: '/boletines/Problemas_p%C3%BAblicos_mal_diagnosticados', component: Problemas_públicos_mal_diagnosticados },
    { path: '/boletines/Gastar_bien_la_meta_de_los_gobiernos_municipales_del_siglo_XXI', component: Gastar_bien_la_meta_de_los_gobiernos_municipales_del_siglo_XXI },
]

// 3. Create the router instance and pass the `routes` option
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app = createApp(App)
// use the router instance to make the
// whole app router-aware.
app.use(router)
app.mount('#app')