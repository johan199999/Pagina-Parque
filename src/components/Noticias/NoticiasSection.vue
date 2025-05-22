<template>
    <section id="noticias-section">
      <h2>Noticias Destacadas de Parques de Diversión</h2>
      <div class="news-list">
        <article class="news-article">
          <h3>Nuevas Atracciones en Parques Temáticos</h3>
          <p>
            Varios parques de diversión han anunciado la apertura de nuevas atracciones para la próxima temporada. Estas incluyen montañas rusas de última generación y experiencias inmersivas basadas en populares películas y series. Además, se están implementando tecnologías de realidad aumentada para mejorar la experiencia del visitante.
          </p>
          
        </article>
        <article class="news-article">
          <h3>Eventos Especiales para Toda la Familia</h3>
          <p>
            Los parques de diversión están organizando eventos especiales para atraer a más visitantes. Desde festivales de comida hasta noches temáticas de Halloween, estas actividades ofrecen experiencias únicas para las familias. Se espera que estos eventos incrementen la afluencia y mejoren la satisfacción de los visitantes.
          </p>
         
        </article>
        <article class="news-article">
          <h3>Reapertura Tras Renovaciones</h3>
          <p>
            Algunos parques han completado importantes renovaciones y están reabriendo con nuevas instalaciones, áreas de descanso y mejoras en la seguridad, para ofrecer una experiencia aún más atractiva. Estas mejoras incluyen accesibilidad para personas con discapacidad y nuevas zonas de entretenimiento.
          </p>
         
        </article>
        <article class="news-article">
          <h3>Innovaciones en Seguridad y Tecnología</h3>
          <p>
            La seguridad es una prioridad en los parques de diversión. Nuevas tecnologías como sistemas de monitoreo en tiempo real y protocolos mejorados están siendo implementados para garantizar la protección de todos los visitantes.
          </p>
         
        </article>
        <article class="news-article">
          <h3>Expansión de Zonas Temáticas</h3>
          <p>
            Algunos parques están expandiendo sus zonas temáticas para incluir nuevas áreas inspiradas en culturas y épocas históricas, ofreciendo a los visitantes una experiencia más diversa y educativa.
          </p>
          
        </article>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'NoticiasSection',
  };
  </script>
  
  <style scoped>
  #noticias-section {
    background: linear-gradient(135deg, #444242 0%, #c5c2c1 100%);
    padding: 50px 20px;
    color: #333;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
  }
  
  #noticias-section h2 {
    font-size: 2.5em;
    margin-bottom: 40px;
    color: #fff;
    text-shadow: 2px 2px 4px #000;
  }
  
  .news-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }
  
  .news-article {
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.25);
    padding: 25px;
    width: 300px;
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
  }
  
  .news-article:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.35);
  }
  
  .news-article h3 {
    font-size: 1.5em;
    margin-bottom: 15px;
    color: #181818;
  }
  
  .news-article p {
    font-size: 1em;
    line-height: 1.5;
    margin-bottom: 25px;
    color: #000000;
  }
  
  
  </style>
  