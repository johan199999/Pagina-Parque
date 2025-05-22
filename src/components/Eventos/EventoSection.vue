<template>
  <section class="eventos">
<article class="evento" v-for="evento in eventos" :key="evento.titulo">
      <img :src="evento.imagen" :alt="evento.titulo" />
      <div class="contenido">
        <h2>{{ evento.titulo }}</h2>
        <p>{{ evento.descripcion }}</p>
        <p><strong>Fecha:</strong> {{ evento.fecha }}</p>
        <button @click="irAReserva(evento.titulo)">Más información</button>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "EventoSection",
  methods: {
    irAReserva(tituloEvento) {
      this.$router.push({ name: 'PaginaReserva', params: { evento: tituloEvento } });
    }
  },
  data() {
    return {
      eventos: [
        {
          imagen: require('../../assets/evento-hallowen.jpg'),
          titulo: 'Noche de Terror - Especial de Halloween',
          descripcion: 'Vive una noche espeluznante llena de sorpresas y sustos. ¡Disfruta nuestras atracciones embrujadas!',
          fecha: '31 de octubre'
        },
        {
          imagen: require('../../assets/evento-navideño.webp'),
          titulo: 'Fiesta de Navidad',
          descripcion: 'Únete a la magia de la Navidad con desfiles, luces y entretenimiento para toda la familia.',
          fecha: '24 de diciembre - 6 de enero'
        },
        {
          imagen: require('../../assets/festival-verano.jpeg'),
          titulo: 'Festival de Verano',
          descripcion: 'Diviértete con nuestras actividades acuáticas, música en vivo y muchas sorpresas para disfrutar el verano al máximo.',
          fecha: '15 de junio - 31 de agosto'
        },
        {
          imagen: require('../../assets/atraccion agua.jpg'),
          titulo: 'Festival del Agua',
          descripcion: 'Ven y disfruta de la nueva atraccion acuatica, con la que quedaras totalmente bañado de diversion y alegria',
          fecha: '13 de abril- 31 de agosto'
        },
        {
          imagen: require('../../assets/DINOSAUR.jpeg'),
          titulo: 'Dino Aventuras',
          descripcion: 'Disfruta y experimenta la experimenta de tener conctato con los dinosaurios, si eres un amante y fan de los dinosaurios, no te pierdas esta oportunidad de conocerlos de cerca.',
          fecha: '15 de octubre - 1 de diciembre'
        },
        {
          imagen: require('../../assets/Festivales al parque.jpg'),
          titulo: 'Cine al Parque',
          descripcion: 'Lo tan esperado por nuestro publico, el cine llego a nuestro parque, con una gran variedad de películas para todos los gustos, no te pierdas',
          fecha: '2 de enero - 31 de agosto'
        }
      ]
    }
  }
};
</script>

<style scoped>
.eventos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
}

.evento {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  overflow: hidden;
  transition: transform 0.3s;
}

.evento:hover {
  transform: scale(1.05);
}

.evento img {
  width: 100%;
  height: auto;
}

.contenido {
  padding: 1.5rem;
}

.contenido h2 {
  margin-top: 0;
  color: #333;
}

.contenido p {
  margin-bottom: 1rem;
}

button {
  background-color: #333;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #e55b50;
}
</style>
