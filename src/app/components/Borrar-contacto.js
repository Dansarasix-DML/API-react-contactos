'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { redirect } from 'next/dist/server/api-utils';

export default function BorrarContacto({id}) {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [provincia, setProvincia] = useState('');

    useEffect(() => {
        // Lógica para obtener y establecer los datos del contacto con el idContacto
        const obtenerContacto = async () => {
          try {
            const response = await axios.get(`http://contactos.es/contactos/${id}`);
            console.log("Response data:", response.data);
            const { nombre, telefono, email, provincia } = response.data[0];
            setNombre(nombre || ''); // Si el valor es undefined, establecerlo como una cadena vacía
            setTelefono(telefono || '');
            setEmail(email || '');
            setProvincia(provincia || '');
          } catch (error) {
            console.error('Error al obtener el contacto:', error);
          }
        };
    
        obtenerContacto();
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.delete(`http://contactos.es/contactos/${id}`);
            // Lógica adicional después de borrar el contacto
        } catch (error) {
            console.error('Error al borrar el contacto:', error);
        }
    }

    return(
        <div className='datos'>
            <strong>¿Seguro qué deseas eliminar este contacto?</strong>
            <p>Nombre: {nombre}</p>
            <p>Teléfono: {telefono}</p>
            <p>Email: {email}</p>
            <p>Provincia: {provincia}</p>
            <button onClick={handleSubmit}>Borrar</button>
        </div>
    );
}