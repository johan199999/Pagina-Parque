<template>
  <header>
    <div>
        <img src="../assets/logo.jpg" alt="Logo" style="height: 50px;">
        <span>Park Entertainment</span>
    </div>
    <nav>
        <a href="">parques</a>
        <a href="">Atracciones</a>
        <a href="">Eventos</a>
        <a href="">Contacto</a>
    </nav>
</header>
</template>

<script>
export default {
    name: 'HeaderComponente'

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

header div {
    display: flex;
    align-items: center;
}

</style>