"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const params = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`http://api.alquran.cloud/v1/surah/${params.number}`)
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, []);

  return (
    <>
      <h1 className=" font-bold text-3xl mt-8 mb-2">
        {data?.englishName} {data?.numberOfAyahs}
      </h1>
      <p>{data?.englishNameTranslation}</p>
      <div className="divide-y divide-grdark/50">
        {data?.ayahs.map((a) => (
          <div key={a.number} className="py-4 flex justify-end items-center just gap-3">
            <p className="text-right text-2xl font-quran">{a.text}</p>
            <div className="w-8 h-8 shrink-0 bg-grdark text-white text-sm font-bold rounded-full flex items-center justify-center">
              {a.numberInSurah}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
