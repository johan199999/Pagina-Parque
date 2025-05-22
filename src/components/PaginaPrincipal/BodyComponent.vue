<template>
    <div>
    
    
    <section id="sobre" class="sobre-parque">
        <video autoplay muted loop playsinline class="video-fondo">
          <source src="../assets/parquevideo.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
        <div class="contenido">
          <h2>Sobre el Parque</h2>
          <p>Bienvenido al Parque Park Entertainment, un lugar donde la diversión y la naturaleza se unen para crear momentos inolvidables. Nuestro parque cuenta con amplias áreas verdes, emocionantes atracciones y espacios diseñados para que disfruten tanto grandes como pequeños. Desde zonas de juegos seguras hasta áreas de picnic tranquilas, aquí encontrarás todo lo necesario para disfrutar de un día perfecto al aire libre. Únete a nosotros para explorar un mundo de aventuras y recuerdos que durarán toda la vida. ¡Te esperamos!</p>
        </div>
        
    </section>
    
    <section id="caracteristicas">
        <h2>Características</h2>
        <div class="features">
            <div class="feature">
                Zona de Juegos
                <img src="../assets/Zona juegos.jpg" alt="Zona de Juegos">
            </div>
            <div class="feature">
                Zona Picnic
                <img src="../assets/zona-de-picnic-al-aire.jpg" alt="Zona Picnic">
            </div>
            <div class="feature">
                Zona Niños
                <img src="../assets/zona de niños.jpg" alt="Zona Niños">
            </div>
        </div>
    </section>
    
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
    
    
    <div id="noticias">
        <h2>Noticias</h2>
        <div class="news-container">
            <div class="news-item">
                <div class="news-label">Noticia 1</div>
                <div class="news-content">
                    Nuevas Atracciones en Parques Temáticos
                    Varios parques de diversión han anunciado la apertura de nuevas atracciones para la próxima temporada. Estas incluyen montañas rusas de última generación y experiencias inmersivas basadas en populares películas y series.
                </div>
                <button class="leer-btn">Leer</button>
            </div>
            <div class="news-item">
                <div class="news-label">Noticia 2</div>
                <div class="news-content">
                    Los parques de diversión están organizando eventos especiales para atraer a más visitantes. Desde festivales de comida hasta noches temáticas de Halloween, estas actividades ofrecen experiencias únicas para las familias.
                </div>
                <button class="leer-btn">Leer</button>
            </div>
            <div class="news-item">
                <div class="news-label">Noticia 3</div>
                <div class="news-content">
                    Reapertura Tras Renovaciones
                    Algunos parques han completado importantes renovaciones y están reabriendo con nuevas instalaciones, áreas de descanso y mejoras en la seguridad, para ofrecer una experiencia aún más atractiva.
                </div>
                <button class="leer-btn">Leer</button>
            </div>
        </div>
    </div>
    
    <footer>
        <p>&copy; 2024 Park Entertainment. Todos los derechos reservados.</p>
    </footer>
    
</div>
    </template>

    <div>

    
    </div>
    <style scoped>
    nav a:hover, nav a:active {
        background-color: #333;
        border-radius: 5px;
    }
    
    .sobre-parque {
        position: relative;
        overflow: hidden;
        color: black;
        padding: 40px 20px;
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
        color: #FFF;
        background-color: #000;
        border: 2px solid #FFF;
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
    
    .feature:hover img, .feature:active img {
        opacity: 1; 
    }
    
    .feature:hover {
        background-color: transparent; 
        color: transparent; 
    }
    
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
        display: none;
        padding: 10px;
        border-top: 1px solid #ccc;
        background-color: white;
        color: black;
    }
    
    .service:hover .accordion-content {
        display: block;
    }
    
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
        background-color: #333;
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
    .nav-con-clima {
  display: flex;
  align-items: center;
  gap: 20px;
}






    
    </style>

