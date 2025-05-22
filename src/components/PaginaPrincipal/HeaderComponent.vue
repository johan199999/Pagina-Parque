<template>
  <header>
    <div class="logo-nombre">
      <router-link to="/paginaprincipal">
        <img src="../../assets/logo.png" alt="Logo" style="height: 50px;">
      </router-link>
      <span>Park Entertainment</span>
    </div>
    <nav class="nav-con-clima">
      <router-link to="/paginaTipos">Parques</router-link>
      <router-link to="/paginaattraction">Atracciones</router-link>
      <router-link to="/paginaeventos">Eventos</router-link>
      <router-link to="/paginanoticias">Noticias</router-link>
      
      <ClimaParque />
    </nav>
  </header>
</template>

<script>
import ClimaParque from './ClimaParque.vue';

export default {
  name: 'HeaderComponente',
  components: {
    ClimaParque
  }
};
</script>

<style scoped>
header {
  background-color: #000; 
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.logo-nombre {
  display: flex;
  align-items: center;
}

nav.nav-con-clima {
  display: flex;
  align-items: center;
  gap: 20px;
}

nav a {
  margin-left: 20px;
  text-decoration: none;
  color: white;
  position: relative;
  transition: color 0.3s ease;
}

nav a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: white;
  transition: width 0.3s ease;
}

nav a:hover {
  color: #ddd;
}

nav a:hover::after {
  width: 100%;
}

nav a:first-child {
  margin-left: 0;
}
</style>