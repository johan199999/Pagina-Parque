import { createRouter, createWebHistory } from "vue-router";
import PaginaPrincipal from "@/views/PaginaPrincipal.vue";

const routes = [
    { path: '/Paginaprincipal', component: PaginaPrincipal }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;