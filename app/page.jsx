"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [surah, setSurah] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://api.alquran.cloud/v1/surah`)
      .then((res) => res.json())
      .then((res) => setSurah(res.data));
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-8 px-5 py-3 rounded-3xl border-2 border-grdark hover:scale-105 transition-all duration-300"
          type="text"
          placeholder="Cari Surah"
        />
      </div>
      {surah.filter((o) => {
        return (
          o.englishName.toLowerCase().includes(search.toLowerCase()) ||
          o.englishNameTranslation
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          o.numberOfAyahs.toString().includes(search.toLowerCase())
        );
      }).length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-8">
          {surah
            .filter((o) => {
              return (
                o.englishName.toLowerCase().includes(search.toLowerCase()) ||
                o.englishNameTranslation
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                o.numberOfAyahs.toString().includes(search.toLowerCase())
              );
            })
            .map((s) => (
              <Link
                href={`/surah/${s.number}`}
                key={s.number}
                className="bg-grdark/100 p-4 sm:bg-grdark/95 md:bg-grdark/90 rounded-md border hover:bg-grdark/10 hover:shadow-xl hover:scale-105 transition-all duration-300 group border-grdark"
              >
                <h6 className="font-bold text-stone-300 group-hover:text-stone-500">{s.englishName}</h6>
                <div className="flex justify-between text-sm text-neutral-300 group-hover:text-neutral-500">
                  <p>{s.englishNameTranslation}</p>
                  <p>{s.numberOfAyahs} Ayat</p>
                </div>
              </Link>
            ))}
        </div>
      ) : (
        <div className="text-center mt-8 text-gray-300 uppercase text-lg">
          <p>Data Tidak Ditemukan</p>
        </div>
      )}
    </>
  );
}
