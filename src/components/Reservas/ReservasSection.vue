<template>
  <section class="reserva">
    <div class="contenedor">
      <!-- Formulario de reserva -->
      <div class="formulario-reserva">
        <h1>Reserva tu lugar</h1>
        <p>Completa el formulario para asistir al evento.</p>
        <form @submit.prevent="submitReservation">
          <div>
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" v-model="nombre" required />
          </div>
          <div>
            <label for="email">Correo electrónico:</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div>
            <label for="evento">Evento:</label>
            <input type="text" id="evento" v-model="evento" readonly />
          </div>
          <div>
            <label for="fecha">Fecha:</label>
            <input type="date" id="fecha" v-model="fecha" required />
          </div>
          <div>
            <label for="hora">Hora:</label>
            <input type="time" id="hora" v-model="hora" required />
          </div>
          <div>
            <label for="cantidadPersonas">Cantidad de personas:</label>
            <input
              type="number"
              id="cantidadPersonas"
              v-model.number="cantidadPersonas"
              required
              min="1"
              max="10"
            />
          </div>
          <div class="botones">
            <button type="submit" class="btn-reservar">{{ isEditing ? 'Actualizar' : 'Reservar' }}</button>
            <button @click="regresar" class="btn-regresar" type="button">Regresar</button>
            <button v-if="editIndex !== -1" @click="eliminarReserva" class="btn-eliminar" type="button">Eliminar</button>
            <button v-if="editIndex !== -1" @click="cancelarEdicion" class="btn-cancelar" type="button">Cancelar</button>
          </div>
        </form>

        <p v-if="mensaje" class="mensaje">{{ mensaje }}</p>
      </div>

      <!-- Lista de reservas -->
      <div class="lista-reservas">
        <h2>Reservas hechas</h2>
        <table v-if="reservas.length">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Evento</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Personas</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(reserva, index) in reservas" :key="index">
              <td>{{ reserva.nombre }}</td>
              <td>{{ reserva.email }}</td>
              <td>{{ reserva.evento }}</td>
              <td>{{ reserva.fecha }}</td>
              <td>{{ reserva.hora }}</td>
              <td>{{ reserva.cantidadPersonas }}</td>
              <td class="acciones">
                <button @click="editarReserva(index)" class="btn-editar">Editar</button>
                <button @click="eliminarReserva(index)" class="btn-eliminar">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
        <p v-else>No hay reservas registradas.</p>
      </div>
    </div>

    <!-- Modal de confirmación -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <h2>Confirma tu reserva</h2>
        <p><strong>Evento:</strong> {{ evento }}</p>
        <p><strong>Fecha:</strong> {{ fecha }} {{ hora }}</p>
        <p><strong>Personas:</strong> {{ cantidadPersonas }}</p>
        <div class="modal-buttons">
          <button @click="confirmReservation" class="btn-confirmar">Confirmar</button>
          <button @click="cancelReservation" class="btn-cancelar">Cancelar</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ReservasSection",
  data() {
    return {
      nombre: "",
      email: "",
      evento: this.$route.params.evento || "",
      hora: "",
      fecha: "",
      cantidadPersonas: 1,
      mensaje: "",
      showModal: false,
      reservas: [],
      editIndex: -1,
      isEditing: false,
    };
  },
  methods: {
    submitReservation() {
      this.showModal = true;
    },
    confirmReservation() {
      const nuevaReserva = {
        nombre: this.nombre,
        email: this.email,
        evento: this.evento,
        fecha: this.fecha,
        hora: this.hora,
        cantidadPersonas: this.cantidadPersonas,
      };

      if (!this.isEditing) {
        this.reservas.push(nuevaReserva);
        this.mensaje = `Reserva agregada correctamente.`;
      } else {
        this.reservas.splice(this.editIndex, 1, nuevaReserva);
        this.mensaje = `Reserva actualizada correctamente.`;
      }

      this.limpiarFormulario();
      this.showModal = false;
    },
    editarReserva(index) {
      const reserva = this.reservas[index];
      this.nombre = reserva.nombre;
      this.email = reserva.email;
      this.evento = reserva.evento;
      this.fecha = reserva.fecha;
      this.hora = reserva.hora;
      this.cantidadPersonas = reserva.cantidadPersonas;
      this.editIndex = index;
      this.isEditing = true;
    },
    eliminarReserva(index) {
      if (index !== undefined) {
        this.reservas.splice(index, 1);
        this.mensaje = "Reserva eliminada correctamente.";
        if (this.editIndex === index) this.limpiarFormulario();
      } else if (this.editIndex !== -1) {
        this.reservas.splice(this.editIndex, 1);
        this.mensaje = "Reserva eliminada correctamente.";
        this.limpiarFormulario();
      }
    },
    cancelarEdicion() {
      this.limpiarFormulario();
    },
    limpiarFormulario() {
      this.nombre = "";
      this.email = "";
      this.hora = "";
      this.fecha = "";
      this.cantidadPersonas = 1;
      this.isEditing = false;
      this.editIndex = -1;
    },
    cancelReservation() {
      this.showModal = false;
    },
    regresar() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.reserva {
  padding: 2rem;
  background-color: #f9f9f9;
}

.contenedor {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

/* Formulario de reserva */
.formulario-reserva {
  flex: 1 1 400px;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(103, 6, 230, 0.2);
}

.formulario-reserva h1 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 0.25rem;
  color: #333;
}

.formulario-reserva p {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  color: #555;
}

.formulario-reserva form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.formulario-reserva label {
  font-weight: bold;
  margin-bottom: 0.25rem;
  color: #444;
  display: block;
}

.formulario-reserva input {
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 0.95rem;
  width: 100%;
  transition: border-color 0.3s;
}

.formulario-reserva input:focus {
  border-color: #673ab7;
  outline: none;
  box-shadow: 0 0 3px rgba(103, 58, 183, 0.5);
}

.botones {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

button {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  transition: 0.3s;
  font-size: 0.9rem;
}

.btn-reservar {
  background-color: #28a745;
  color: white;
}

.btn-reservar:hover {
  background-color: #218838;
}

.btn-regresar {
  background-color: #dc3545;
  color: white;
}

.btn-regresar:hover {
  background-color: #c82333;
}

.btn-cancelar {
  background-color: #6c757d;
  color: white;
}

.btn-cancelar:hover {
  background-color: #5a6268;
}

.btn-eliminar {
  background-color: #dc3545;
  color: white;
}

.btn-eliminar:hover {
  background-color: #c82333;
}

/* Lista de reservas */
.lista-reservas {
  flex: 1 1 500px;
  background-color: white;
  border-radius: 8px;
  padding: 1rem 2rem;
  box-shadow: 0 4px 8px rgba(103, 6, 230, 0.2);
}

.lista-reservas h2 {
  text-align: center;
  margin-bottom: 1rem;
  font-family: "Arial Black", Arial, sans-serif;
  color: #333;
}

.lista-reservas table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.lista-reservas th,
.lista-reservas td {
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: center;
}

.lista-reservas th {
  background-color: #f0f0f0;
  font-weight: bold;
}

.acciones {
  white-space: nowrap;
}

.btn-editar {
  background-color: #007bff;
  color: white;
  margin-right: 0.25rem;
}

.btn-editar:hover {
  background-color: #0056b3;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  text-align: center;
}

.modal-buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 1.5rem;
}

.btn-confirmar {
  background-color: #28a745;
  color: white;
}

.btn-confirmar:hover {
  background-color: #218838;
}

.mensaje {
  margin-top: 1rem;
  text-align: center;
  background-color: #e1f7e4;
  padding: 1rem;
  border-radius: 5px;
  color: #2e7d32;
  font-weight: bold;
}
</style>

