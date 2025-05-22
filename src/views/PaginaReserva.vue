<template>
  
  <ReservasComponent></ReservasComponent>
  <FooterComponent></FooterComponent>
  
</template>

<script>
import FooterComponent from '@/components/PaginaPrincipal/FooterComponent.vue';

import ReservasComponent from '@/components/Reservas/ReservasComponent.vue';

export default {
  name: "PaginaReserva",
   components:{
    
    ReservasComponent,
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



</style>

