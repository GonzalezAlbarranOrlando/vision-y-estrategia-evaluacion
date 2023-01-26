import { createApp } from 'vue'
import App from './App.vue'
//vue-router
import { createRouter, createWebHistory } from 'vue-router'

// 1. Define route components.
import Inicio from './components/pages/Inicio.vue'
import Contacto from './components/pages/Contacto.vue'
import Nosotros from './components/pages/Nosotros.vue'
import Boletines from './components/pages/Boletines.vue'
import Template from '@/components/pages/Template.vue'
import PAEcalendario from '@/components/pages/pae/Calendario.vue'
import PAEhome from '@/components/pages/pae/PAE-Home.vue'
import AGPRhome from '@/components/pages/agpr/AGPR-Home.vue'
import PBRhome from '@/components/pages/pbr/PBR-Home.vue'

// 2. Define some routes
// Each route should map to a component.
const routes = [
    { path: '/', component: Inicio },
    { path: '/contacto', component: Contacto },
    { path: '/nosotros', component: Nosotros },
    { path: '/boletines', component: Boletines },
    { path: '/template', component: Template },
    { path: '/pae-calendario', component: PAEcalendario },
    { path: '/pae', component: PAEhome },
    { path: '/agpr', component: AGPRhome },
    { path: '/pbr', component: PBRhome },
]

// 3. Create the router instance and pass the `routes` option
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app = createApp(App)
// use the router instance to make the
// whole app router-aware.
app.use(router)
app.mount('#app')