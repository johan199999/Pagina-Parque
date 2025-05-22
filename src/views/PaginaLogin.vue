<template>
    <div>
        <LoginComponent></LoginComponent>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>

import LoginComponent from '../components/Login/LoginComponent.vue';
import FooterComponent from '../components/PaginaPrincipal/FooterComponent.vue'; 
export default {
    name: 'PaginaLogin',
    components: {
        LoginComponent,
        FooterComponent
    }
};
</script>

