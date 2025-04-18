<template>
  <header>
    <div>
        <img src="../../assets/logo.png" alt="Logo" style="height: 50px;">
        <span>Park Entertainment</span>
    </div>
    <nav>
        <a href="">  Parques </a>
        <a href="">  Atracciones </a>
        <a href="">  Eventos </a>
        <a href="">  Contacto </a>
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
