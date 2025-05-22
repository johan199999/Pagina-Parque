<template>
<div>
  <AttractionComponent></AttractionComponent>
  <FooterComponent class="footer-spacing"></FooterComponent>
</div>
</template>

<script>
import AttractionComponent from '../components/Atracciones/AttractionComponent.vue'
import FooterComponent from '../components/PaginaPrincipal/FooterComponent.vue'

export default {
name: 'PaginaParquesView',
components: {
    AttractionComponent,
    FooterComponent

}
};
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

.header-spacing {
  margin-bottom: 60px;
  min-height: 100px;
}

.footer-spacing {
  margin-top: 60px;
  min-height: 100px;
}

</style>
