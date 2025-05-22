<template>
  <div id="noticias">
    <h2>Noticias</h2>
    <div class="news-container">
      <div class="news-item">
        <div class="news-label">Noticia 1</div>
        <div class="news-content">
          Nuevas Atracciones en Parques Temáticos
          Varios parques de diversión han anunciado la apertura de nuevas atracciones para la próxima temporada. Estas incluyen montañas rusas de última generación y experiencias inmersivas basadas en populares películas y series.
        </div>
    
      </div>
      <div class="news-item">
        <div class="news-label">Noticia 2</div>
        <div class="news-content">
          Los parques de diversión están organizando eventos especiales para atraer a más visitantes. Desde festivales de comida hasta noches temáticas de Halloween, estas actividades ofrecen experiencias únicas para las familias.
        </div>
       
      </div>
      <div class="news-item">
        <div class="news-label">Noticia 3</div>
        <div class="news-content">
          Reapertura Tras Renovaciones
          Algunos parques han completado importantes renovaciones y están reabriendo con nuevas instalaciones, áreas de descanso y mejoras en la seguridad, para ofrecer una experiencia aún más atractiva.
        </div>
        
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoticiasComponent',
};
</script>

<style scoped>
#noticias {
  background-color: #ccc;
  padding: 40px 20px;
  text-align: center;
}

.news-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.news-item {
  margin: 10px auto;
  width: 80%;
  border: 2px solid #FF6F61;
  border-radius: 10px;
  background-color: #FFF176;
  color: black;
  padding: 20px;
  position: relative;
}

.news-label {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.news-content {
  font-size: 1.1em;
  margin-bottom: 20px;
}

.news-item {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 15px;
  margin: 10px 0;
  transition: background-color 0.3s;
  position: relative;
}

.news-item:hover {
  background-color: #d0d0d0;
}

.leer-btn {
  background-color: #050505;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.leer-btn:hover {
  background-color: #007BFF;
}
</style>
