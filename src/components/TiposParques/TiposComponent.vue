<template>
    <section class="section">
        <div class="card-container">

            
            <div class="card">
                <img src="../../assets/parque hierro.jpg" alt="imagen 1">
                <h3>Parque de Hierro</h3>
                <p>¡La emoción al máximo con nuestras montañas rusas llenas de giros y vueltas!</p>
            </div>

            
            <div class="card">
                <img src="../../assets/atracciones-acuaticas.jpg" alt="imagen 2">
                <h3>Parque del Agua</h3>
                <p>Refresca tu aventura con nuestras emocionantes atracciones acuáticas.</p>
            </div>

            
            <div class="card">
                <img src="../../assets/universal.jpeg" alt="imagen 3">
                <h3>Parque Universal </h3>
                <p>Disfruta de la magia y nostalgia de nuestros clásicao parque de atracion.</p>
            </div>

            
            <div class="card">
                <img src="../../assets/parque extremo.jpg" alt="imagen 4">
                <h3>Parque Extremo</h3>
                <p>Para los valientes: ¡vive experiencias llenas de adrenalina!</p>
            </div>

            
            <div class="card">
                <img src="../../assets/niños.jpg" alt="imagen 5">
                <h3>Parque para Niños</h3>
                <p>Diversión segura para los más pequeños de la familia.</p>
            </div>

            
            <div class="card">
                <img src="../../assets/juegos-habilidad.jpeg" alt="imagen 6">
                <h3>Parque de Habilidad</h3>
                <p>¡Pon a prueba tus habilidades y gana grandes premios!</p>
            </div>

        </div>
    </section>

 </template>
 
 <script>
 export default {
  name:  'TiposComponent',
 };
 </script>
 
 <style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  color: #333;
  margin: 0;
  padding: 0;
}


.section {
  padding: 50px 20px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 300px;
  margin: 20px;
  text-align: center;
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-10px);
}

.card img {
  border-radius: 10px 10px 0 0;
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card h3 {
  margin-top: 15px;
  color: #333;
}

.card p {
  padding: 0 15px 15px 15px;
  color: #555;
}
 
 </style>
