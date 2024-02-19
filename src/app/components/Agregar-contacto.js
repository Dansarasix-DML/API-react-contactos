// AgregarContacto.js
'use client';
import React, { useState } from 'react';
import axios from 'axios';

function AgregarContacto() {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [provincia, setProvincia] = useState('');
  const [texto, setTexto] = useState('');
  const [clase, setClase] = useState('');
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://contactos.es/contactos/', { nombre, telefono, email, provincia });
      setTexto("El usuario se ha creado con éxito, regresa al Home para ver tu contacto nuevo.");
      setClase("mensaje1");
      setMostrarMensaje(true);
      // Lógica adicional después de agregar el contacto, como redirigir a la lista de contactos
    } catch (error) {
      console.error('Error al agregar el contacto:', error);
      setTexto("Ha habido un error al agregar el usuario.");
      setClase("mensaje2");
      setMostrarMensaje(true);
    }
  }

  return (
    <div className='formBox'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </label>
        </div>
        <div>
          <label>Teléfono:
            <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
          </label>
        </div>
        <div>
          <label>Email:
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div>
        <div>
          <label>Provincia:
            <input type="text" value={provincia} onChange={(e) => setProvincia(e.target.value)} />
          </label>
        </div>
        <button type="submit">Agregar</button>
      </form>
      {mostrarMensaje && (
        <div className={clase}>
         {texto}
        </div>
      )}
    </div>
  );
}

export default AgregarContacto;
