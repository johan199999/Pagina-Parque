<template>
  <div class="container">
     <div class="attraction">
         <img src="../../assets/montaña-rusa.jpg" alt="Montaña rusa">
         <div class="attraction-content">
             <h2 class="attraction-title">Parque de hierro</h2>
             <p class="attraction-description">Siente la adrenalina mientras recorres vertiginosas caídas y vueltas en nuestra montaña rusa más emocionante.</p>
         </div>
     </div>

     <div class="attraction">
         <img src="../../assets/carrusel-clasico.jpg" alt="Carrusel">
         <div class="attraction-content">
             <h2 class="attraction-title">Carrusel Encantado</h2>
             <p class="attraction-description">Perfecto para los más pequeños y quienes buscan una experiencia relajante y mágica.</p>
         </div>
     </div>

     <div class="attraction">
         <img src="../../assets/casa-terror.webp" alt="Casa del Terror">
         <div class="attraction-content">
             <h2 class="attraction-title">Casa del Terror</h2>
             <p class="attraction-description">Atrévete a entrar a nuestra espeluznante casa del terror, donde te enfrentarás a tus mayores miedos.</p>
         </div>
     </div>

     <div class="attraction">
         <img src="../../assets/rueda-fortuna.jpg" alt="Rueda de la Fortuna">
         <div class="attraction-content">
             <h2 class="attraction-title">Rueda de la Fortuna Gigante</h2>
             <p class="attraction-description">Disfruta de una vista espectacular del parque y la ciudad desde la cima de nuestra rueda de la fortuna.</p>
         </div>
     </div>
 </div>
</template>

<script>
export default {
 name: 'AttractionComponent'
};
</script>

<style scoped>



.container {
 display: flex;
 flex-wrap: wrap;
 justify-content: space-around;
 gap: 20px;
}

.attraction {
 width: 250px;
 border: 2px solid #ddd;
 border-radius: 8px;
 overflow: hidden;
 box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
 transition: transform 0.3s ease;
 margin-bottom: 20px;
 text-align: center;
}

.attraction:hover {
 transform: scale(1.05);
}

.attraction img {
 width: 100%;
 height: auto;
 display: block;
}

.attraction-content {
 padding: 10px;
}

.attraction-title {
 font-size: 1.2em;
 margin: 10px 0;
 color: #333;
}

.attraction-description {
 font-size: 1em;
 color: #666;
}
</style>
