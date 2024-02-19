'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { estilos } from "@/app/css/style.css";


const AuthComponent = ({ onLogin }) => {
    const [usuario, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        // Aquí puedes hacer la llamada a tu API para autenticar al usuario
        try {
            console.log({ usuario, password });
            const response = await axios.post('http://contactos.es/login', { usuario, password });
            const data = await response.data;
            // onLogin(data.token); // Llama a la función onLogin con el token recibido
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    return (
        <form className='login' onSubmit={handleLogin}>
            <label>
                Usuario: <input
                    type="text"
                    placeholder="Nombre de usuario"
                    value={usuario}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <label>
                Contraseña: <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button type="submit">Iniciar sesión</button>
        </form>
    );
};

export default AuthComponent;
