import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import ListaContactos from "./components/Lista-contactos";
import AuthComponent from "./components/Auth-component";
import {estilos} from "@/app/css/style.css";


export default function Home() {
  return (
    <main>
      <h2>Lista de contactos</h2>
      <nav>
        <ul>
            <li>
              <Link className="material-symbols-rounded agrega" href="/add">Add</Link>
            </li>
            <li>
              <Link target="_blank" className="github" href="https://github.com/Dansarasix-DML/API-react-contactos"><img src="github.svg"/></Link>
            </li>
            {/* <li>
              <Link target="_blank" className="material-symbols-rounded navLogin" href="/login">Login</Link>
            </li> */}
        </ul>
      </nav>
      <ListaContactos />
    </main>
  );
}
