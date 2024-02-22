'use client';
import React, { useState } from 'react';
import { estilos } from "@/app/css/style.css";


const AuthComponent = () => {
    const [usuario, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        try {
            const response = await fetch("http://contactos.es/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    usuario: usuario,
                    password: password,
                }),
            });
            const data = await response.json();
            if (data.jwt) {
                console.log("Inicio de sesión exitoso");
                console.log(data.jwt);
                
            } else {
                console.error("Error de inicio de sesión");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        login();
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
