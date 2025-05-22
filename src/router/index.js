import { createRouter, createWebHistory } from "vue-router";
import PaginaPrincipal from '../views/PaginaPrincipal.vue';
import PaginaAttraction from "@/views/PaginaAttraction.vue";
import PaginaTipos from '../views/PaginaTipos.vue';
import PaginaNoticias from '../views/PaginaNoticias.vue';
import PaginaEventos from '../views/PaginaEventos.vue';



const routes = [
    { path: '/', redirect: '/paginaprincipal' },  
    { path: '/paginaprincipal', component: PaginaPrincipal },
    { path: '/paginaattraction', component: PaginaAttraction },
    { path: '/paginatipos', component: PaginaTipos },
    { path: '/paginanoticias', component: PaginaNoticias },
    { path: '/paginaeventos', component: PaginaEventos },
    
  
    { path: '/paginareserva/:evento', name: 'PaginaReserva', component: () => import('../views/PaginaReserva.vue'), props: true },
];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
