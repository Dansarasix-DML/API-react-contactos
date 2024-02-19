'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function EditarContacto({ id }) {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [provincia, setProvincia] = useState('');
    const [texto, setTexto] = useState('');
    const [clase, setClase] = useState('');
    const [mostrarMensaje, setMostrarMensaje] = useState(false);

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
            await axios.put(`http://contactos.es/contactos/${id}`, { nombre, telefono, email, provincia });
            setTexto("El usuario se ha editado con éxito, regresa al Home para ver tu contacto editado.");
            setClase("mensaje1");
            setMostrarMensaje(true);
            // Lógica adicional después de editar el contacto
        } catch (error) {
            console.error('Error al editar el contacto:', error);
            setTexto("Ha habido un problema al editar el usuario.");
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
                <button type="submit">Editar</button>
            </form>
            {mostrarMensaje && (
                <div className={clase}>
                {texto}
                </div>
            )}
        </div>
    );

}