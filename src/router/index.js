//NT2 - PARCIAL - AQUINO PABLO HERNAN
import { createWebHistory, createRouter } from 'vue-router'

import Formulario from '../components/Formulario.vue'
import Tabla from '../components/Tabla.vue'
import Resultado from '../components/Resultado.vue'

const routes = [
    { path: '/', name: 'Home', component: Formulario },
    { path: '/formulario', name: 'Formulario', component: Formulario },
    { path: '/tabla', name: 'Tabla', component: Tabla },
    { path: '/resultado', name: 'Resultado', component: Resultado }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
