<template>
    <div>
    <NoticiasComponent></NoticiasComponent>
    <FooterComponent></FooterComponent>
 
    </div>
</template>

<script>
import NoticiasComponent from '../components/Noticias/NoticiasComponent.vue';
import FooterComponent from '../components/PaginaPrincipal/FooterComponent.vue';

export default {
  name: 'PaginaNoticias',
  components: {
    NoticiasComponent,
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