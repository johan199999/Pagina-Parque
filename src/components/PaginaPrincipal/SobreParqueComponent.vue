<template>
  <section id="sobre" class="sobre-parque">
    <video autoplay muted loop playsinline class="video-fondo">
      <source :src="videoSrc" type="video/mp4" />
      Tu navegador no soporta el video.
    </video>
    <div class="contenido">
      <h2>Sobre el Parque</h2>
      <p>Bienvenido al Parque Park Entertainment, un lugar donde la diversión y la naturaleza se unen para crear momentos inolvidables. Nuestro parque cuenta con amplias áreas verdes, emocionantes atracciones y espacios diseñados para que disfruten tanto grandes como pequeños. Desde zonas de juegos seguras hasta áreas de picnic tranquilas, aquí encontrarás todo lo necesario para disfrutar de un día perfecto al aire libre. Únete a nosotros para explorar un mundo de aventuras y recuerdos que durarán toda la vida. ¡Te esperamos!</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SobreParque',
  data() {
    return {
      videoSrc: require('@/assets/parquevideo.mp4')
    };
  }
};
</script>

<style scoped>
.sobre-parque {
  position: relative;
  overflow: hidden;
  color: black;
  padding: 40px 20px;
  margin-top: 20px;
  text-align: center;
}

.video-fondo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.contenido {
  position: relative;
  z-index: 2;
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
