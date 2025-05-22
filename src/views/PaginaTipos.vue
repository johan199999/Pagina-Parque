<template>
    <div>
        
        <TiposComponent></TiposComponent>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>

import TiposComponent from '../components/TiposParques/TiposComponent.vue';
import FooterComponent from '../components/PaginaPrincipal/FooterComponent.vue';


export default {
name: 'PaginaTiposView',
    components: {
        
        TiposComponent,
        FooterComponent,
        
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
