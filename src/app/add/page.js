import Image from "next/image";
import styles from "../page.module.css";
import {estilos} from "@/app/css/style.css"
import Link from "next/link";
import AgregarContacto from "../components/Agregar-contacto";

export default function Add() {
  return (
    <main>
      <h2>Agregar Contacto</h2>
      <nav>
        <ul>
            <li>
                <Link className="material-symbols-rounded agrega" href="/">Home</Link>
            </li>
        </ul>
      </nav>
      <AgregarContacto/>
    </main>
  );
}