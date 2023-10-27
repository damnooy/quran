import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quran",
  description: "Baca Quran Online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-grlight ${inter.className}`}>
        <nav className="w-full h-16 bg-grdark text-white flex items-center">
          <div className="mx-auto max-w-5xl w-full flex justify-center md:justify-between px-4">
            <div className="hover:text-neutral-300 hover:scale-125 transition-all duration-300">Quran ID</div>
            <div className="hidden md:flex gap-10">
              <Link className="hover:text-neutral-300 hover:scale-125 transition-all duration-300" href="/">Home</Link>
              <Link className="hover:text-neutral-300 hover:scale-125 transition-all duration-300" href="/surah/36">Yasin</Link>
              <Link className="hover:text-neutral-300 hover:scale-125 transition-all duration-300" href="/surah/67">Al-Mulk</Link>
              <Link className="hover:text-neutral-300 hover:scale-125 transition-all duration-300" href="/surah/18">Al-Kafh</Link>
              <Link className="hover:text-neutral-300 hover:scale-125 transition-all duration-300" href="/surah/56">Al-Waqiah</Link>
            </div>
          </div>
        </nav>
        <div className="mx-auto max-w-5xl w-full px-4">
        {children}
        </div>
      </body>
    </html>
  );
}
