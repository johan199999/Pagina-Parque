<template>
  <section id="caracteristicas">
    <h2>Características</h2>
    <div class="features">
      <div class="feature">
        Zona de Juegos
        <img src="../../assets/Zona juegos.jpg" alt="Zona de Juegos" />
      </div>
      <div class="feature">
        Zona Picnic
        <img src="../../assets/zona-de-picnic-al-aire.jpg" alt="Zona Picnic" />
      </div>
      <div class="feature">
        Zona Niños
        <img src="../../assets/zona de niños.jpg" alt="Zona Niños" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CaracteristicasSection',
};
</script>

<style scoped>
#caracteristicas {
  background: linear-gradient(#ccc);
  padding: 40px 20px;
  text-align: center;
}

.features {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.feature {
  font-size: 1.5em;
  width: 30%;
  height: 300px;
  color: #fff;
  background-color: #000;
  border: 2px solid #fff;
  border-radius: 10px;
  margin: 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.feature img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature:hover img,
.feature:active img {
  opacity: 1;
}

.feature:hover {
  background-color: transparent;
  color: transparent;
}
</style>
