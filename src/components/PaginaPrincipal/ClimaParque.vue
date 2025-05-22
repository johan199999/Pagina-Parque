<template>
    <div v-if="error" class="clima-parque">
      Error al cargar el clima.
    </div>
    <div v-else-if="temperatura !== null" class="clima-parque">
      <img :src="`https://openweathermap.org/img/wn/${icono}@2x.png`" alt="icono clima" />
      <span>{{ temperatura }}°C - {{ estado }}</span>
    </div>
    <div v-else class="clima-parque">
      Cargando clima...
    </div>
  </template>
  
  <script>
  export default {
    name: 'ClimaParque',
    data() {
      return {
        temperatura: null,
        estado: '',
        icono: '',
        error: false
      };
    },
    mounted() {
      fetch('https://api.openweathermap.org/data/2.5/weather?q=Bogota&appid=eadeb06091d13a1e51f2c6b24a02cd57&units=metric&lang=es')
        .then(res => res.json())
        .then(data => {
          if (data.cod !== 200) {
            this.error = true;
            return;
          }
          this.temperatura = Math.round(data.main.temp);
          this.estado = data.weather[0].description;
          this.icono = data.weather[0].icon;
        })
        .catch(() => {
          this.error = true;
        });
    }
  };
  </script>
  
  <style scoped>
  .clima-parque {
    display: flex;
    align-items: center;
    gap: 10px;
    background: #e3f2fd;
    color: #222;
    padding: 6px 14px;
    border-radius: 8px;
    font-size: 1em;
    margin-left: 20px;
  }
  .clima-parque img {
    width: 32px;
    height: 32px;
  }
  </style>