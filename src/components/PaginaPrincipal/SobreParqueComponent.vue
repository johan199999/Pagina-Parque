<template>
  <section id="sobre" class="sobre-parque">
    <h2>Sobre el Parque</h2>
    <p>Bienvenido al Parque Park Entertainment, un lugar donde la diversión y la naturaleza se unen para crear momentos inolvidables. Nuestro parque cuenta con amplias áreas verdes, emocionantes atracciones y espacios diseñados para que disfruten tanto grandes como pequeños. Desde zonas de juegos seguras hasta áreas de picnic tranquilas, aquí encontrarás todo lo necesario para disfrutar de un día perfecto al aire libre. Únete a nosotros para explorar un mundo de aventuras y recuerdos que durarán toda la vida. ¡Te esperamos!</p>
  </section>
</template>

<script>
export default {
  name: 'SobreParque',
};
</script>

<style scoped>
.sobre-parque {
  background-image: url('../../assets/sobre-parque.jpg');
  background-size: cover;
  background-position: center;
  color: black;
padding: 40px 20px;
margin-top: 20px; /* Agregar margen superior */
  text-align: center;
  position: relative;
}

.sobre-parque h2 {
  color: #fff;
  text-shadow: 1px 1px 5px rgba(3, 3, 3, 0.9);
  font-size: 2.5em;
}

.sobre-parque p {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 8px;
  font-size: 1.1em;
}
</style>
