<template>
  <section id="servicios">
    <h2>Servicios</h2>
    <div class="service-container">
      <div class="service">
        <div class="accordion-label">Alquiler de Bicicletas</div>
        <div class="accordion-content">
          <p>Ofrecemos un amplio surtido de bicicletas para todas las edades y niveles de habilidad. Desde bicicletas de montaña hasta modelos urbanos, nuestros alquileres incluyen cascos y candados, asegurando una experiencia segura y cómoda. Ideal para explorar la zona y disfrutar del aire libre.</p>
        </div>
      </div>
      <div class="service">
        <div class="accordion-label">Alquiler de Equipos Deportivos</div>
        <div class="accordion-content">
          <p>Disponemos de una variedad de equipos deportivos en alquiler, que incluyen pelotas, raquetas, canchas y material para actividades como el voleibol, fútbol y más. Todo el equipo está en óptimas condiciones y es perfecto para grupos o familias que buscan disfrutar de un día activo.</p>
        </div>
      </div>
      <div class="service">
        <div class="accordion-label">Comidas y Bebidas</div>
        <div class="accordion-content">
          <p>Nuestra zona de comida ofrece una selección de opciones deliciosas y refrescantes, desde snacks ligeros hasta comidas completas. También contamos con una variedad de bebidas, incluyendo refrescos, jugos y opciones saludables. Perfecto para reponer energías después de un día de diversión.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServiciosSection',
};
</script>

<style scoped>
#servicios {
  background-color: #fff;
  padding: 40px 20px;
  text-align: center;
}

.service-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.service {
  width: 95%;
  margin: 10px 0;
  border-radius: 10px;
  background-color: #ADD8E6;
  color: white;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s;
}

.accordion-label {
  font-size: 1.5em;
  display: block;
  background-color: #000;
  border: 2px solid #FFF;
  padding: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  padding: 0 10px;
  border-top: 1px solid #ccc;
  background-color: white;
  color: black;
  transition: max-height 0.6s ease;
}

.service:hover .accordion-content {
  max-height: 500px; /* suficiente para mostrar el contenido */
  padding: 10px;
}
</style>
