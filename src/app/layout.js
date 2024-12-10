
import localFont from "next/font/local";
import "./globals.css";
// import Home from "./boostrap/page";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Pokeapi",
  description: "Generated by create next app",
  icons: { icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuLvq_z6fGcatFZVwO9KBw03rgVetQA-p9Q&s' }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <header>
        <img src="https://i.pinimg.com/originals/36/a9/60/36a960060f36e1c1b1703d2d73a943cc.gif" alt="Imagen cabecera" width="100%" height="300" />
      </header>
      
      
      <nav>
            <Link href="/">- Home</Link>  - 
            <Link href="/pokemon/generacion1">Generacion1</Link>  -
            <Link href="/pokemon/generacion2">Generacion2</Link>  -
            <Link href="/pokemon/generacion3">Generacion3</Link>
      </nav>

      <main>
        {children}
      </main>

      <footer>Esta pagina ha sido creada por Ruben</footer>
      </body>
    </html>
  );
}
