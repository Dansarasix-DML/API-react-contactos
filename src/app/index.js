import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import ListaContactos from "./components/Lista-contactos";

export default function Home() {
  return (
    <main>
      <h2>Lista de contactos</h2>
      <Link href="/Add">Agregar contacto</Link>
      <br/><br/>
      <ListaContactos />
    </main>
  );
}
