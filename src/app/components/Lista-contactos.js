'use client';
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import axios from 'axios';
import {estilos} from "@/app/css/style.css"

function ListaContactos() {
  const [data, setData] = useState([]);
  const [id, setId] = useState('');
  const [contacto, setContacto] = useState(null);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await axios.get('http://contactos.es/contactos/');
      setData(response.data);
    }

    fetchAPI();
  }, []);

  useEffect(() => {
    const fetchContacto = async () => {
      if (id) {
        try {
          const response = await axios.get(`http://contactos.es/contactos/${id}`);
          console.log("Response data:", response.data);
          let resp = (Array.isArray(response.data) && response.data.length > 0) ?
          // Si la respuesta es un array, tomamos el primer elemento
          // Si la respuesta no es un array o está vacía, establecemos contacto en null
          response.data[0] : null;
          setContacto(resp);
        } catch (error) {
          console.error("Error al obtener el contacto:", error);
          setContacto(null); // Reinicia el estado de contacto si hay un error
        }
      } else {
        setContacto(null);
      }
    }

    fetchContacto();
  }, [id]);

  const handleIdChange = (event) => {
    setId(event.target.value);
  }

  return (
    <>
      <input className='inputID' type="text" value={id} onChange={handleIdChange} placeholder="Introduce el ID del contacto" />
      <ul className='lista'>
        {contacto ? (
          <li key={contacto.id}>
            <ul>
              <li>{contacto.nombre}</li>
              <li>{contacto.telefono}</li>
              <li>{contacto.email}</li>
              <li>{contacto.provincia}</li>
              <li><Link className='material-symbols-rounded boton' href={"/put/" + contacto.id}>Edit</Link></li>
              <li><Link className='material-symbols-rounded boton borrar' href={"/delete/" + contacto.id}>Delete</Link></li>
            </ul>
          </li>
        ) : (
          data.map((contacto) => (
            <li key={contacto.id}>
              <ul>
                <li>{contacto.nombre}</li>
                <li>{contacto.telefono}</li>
                <li>{contacto.email}</li>
                <li>{contacto.provincia}</li>
                <li><Link className='material-symbols-rounded boton' href={"/put/" + contacto.id}>Edit</Link></li>
                <li><Link className='material-symbols-rounded boton borrar' href={"/delete/" + contacto.id}>Delete</Link></li>
              </ul>
            </li>
          ))
        )}
      </ul>
    </>
  );
}

export default ListaContactos;