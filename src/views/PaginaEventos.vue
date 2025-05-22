<template>
    <div>
    <EventoComponent></EventoComponent>
    <FooterComponent></FooterComponent>
    </div>
</template>

<script>
import EventoComponent from '../components/Eventos/EventoComponent.vue';
import FooterComponent from '../components/PaginaPrincipal/FooterComponent.vue';
export default {
    name: 'PaginaEventos',
    components:{
        EventoComponent,
        FooterComponent
    }

};
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

</style>