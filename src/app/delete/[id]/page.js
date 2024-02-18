import Image from "next/image";
import styles from "../../page.module.css";
import {estilos} from "@/app/css/style.css"
import Link from "next/link";
import BorrarContacto from "@/app/components/Borrar-contacto";

export default function Delete({params}) {
  return (
    <main>
      <h2>Eliminar Contacto</h2>
      <nav>
        <ul>
            <li>
                <Link className="material-symbols-rounded agrega" href="/">Home</Link>
            </li>
        </ul>
      </nav>
      <BorrarContacto id={params.id}/>
    </main>
  );
}