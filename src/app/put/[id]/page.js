import Image from "next/image";
import styles from "../../page.module.css";
import {estilos} from "@/app/css/style.css"
import Link from "next/link";
import EditarContacto from "@/app/components/Editar-contacto";

export default function Put({params}) {
  return (
    <main>
      <h2>Editar Contacto</h2>
      <nav>
        <ul>
            <li>
                <Link className="material-symbols-rounded agrega" href="/">Home</Link>
            </li>
        </ul>
      </nav>
      <EditarContacto id={params.id}/>
    </main>
  );
}