import { createApp } from 'vue'
import App from './App.vue'
//vue-router
import { createRouter, createWebHashHistory } from 'vue-router'

// 1. Define route components.
import Home from '../src/components/pages/Home.vue'
import Contact from '../src/components/pages/Contact.vue'
import EnQueConsiste from '@/components/pages/pae/EnQueConsiste.vue'
import PreguntasFrecuentes from '@/components/pages/pae/PreguntasFrecuentes.vue'
import Consultoria from '@/components/pages/pae/Consultoria.vue'
import Capacitacion from '@/components/pages/pae/Capacitacion.vue'
import Template from '@/components/pages/Template.vue'
import PAEhome from '@/components/pages/pae/PAE-Home.vue'
import AGPRhome from '@/components/pages/agpr/AGPR-Home.vue'
import PBRhome from '@/components/pages/pbr/PBR-Home.vue'

// 2. Define some routes
// Each route should map to a component.
const routes = [
    { path: '/', component: Home },
    { path: '/contact', component: Contact },
    { path: '/en-que-consiste', component: EnQueConsiste },
    { path: '/preguntas-frecuentes', component: PreguntasFrecuentes },
    { path: '/consultoria', component: Consultoria },
    { path: '/capacitacion', component: Capacitacion },
    { path: '/template', component: Template },
    { path: '/pae', component: PAEhome },
    { path: '/agpr', component: AGPRhome },
    { path: '/pbr', component: PBRhome },
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