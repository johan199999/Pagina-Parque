<template>
  <div>
    <SobreParqueComponent></SobreParqueComponent>
    <CaracteristicasComponent></CaracteristicasComponent>
    <ServiciosComponent></ServiciosComponent>
    <NoticiasComponent></NoticiasComponent>
    <FooterComponent></FooterComponent>
 
  </div>
</template>

<script>
import SobreParqueComponent from '../components/PaginaPrincipal/SobreParqueComponent.vue';
import CaracteristicasComponent from '../components/PaginaPrincipal/CaracteristicasComponent.vue';
import NoticiasComponent from '../components/PaginaPrincipal/NoticiasComponent.vue';
import FooterComponent from '../components/PaginaPrincipal/FooterComponent.vue';
import ServiciosComponent from '../components/PaginaPrincipal/Servicioscomponent.vue';

export default {
  name: 'PaginaPrincipal',
  components: {
    SobreParqueComponent,
    CaracteristicasComponent,
    ServiciosComponent,
    NoticiasComponent,
    FooterComponent,
 
  },
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
