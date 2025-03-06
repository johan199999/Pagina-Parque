<template>
    <div>
    <HeaderComponente></HeaderComponente>
    <BodyComponente></BodyComponente>
    <FooterComponente></FooterComponente>
    </div>
</template>

<script>
//import HeaderComponente from '@/components/BodyComponente.vue';
import BodyComponente from '@/components/BodyComponente.vue';
//import FooterComponente from '@/components/FooterComponente.vue';

export default {

    name: 'PaginaPrincipal',

  components: {
    //HeaderComponente,
    BodyComponente,
    //FooterComponente,
  },
};
</script>

<style>

</style>