"use client";

import { Container } from "@/components/primitives/Container";
import { UploadCloud } from "lucide-react";
import { useRef, useState } from "react";

export default function MarketNarrativeSection() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  function onBrowseClick() {
    inputRef.current?.click();
  }

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (f) setFileName(f.name);
  }

  function onDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) setIsDragging(true);
  }

  function onDragLeave(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }

  function onDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const f = e.dataTransfer.files?.[0];
    if (f) setFileName(f.name);
  }
  return (
    <section className="!mt-[75px] !mb-[75px] py-[75px]">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-emerald-950 sm:text-4xl">
            Mis on metsa hinna peamised mõjutajad
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">
            Kogenud metsaomanikud teavad, et õige müügiaeg võib tuua märkimisväärselt rohkem tulu. Samas on oluline mõista, et ükski mets ei kasva väärtuses igavesti - vanemad puistud muutuvad haiguste ja kahjurite suhtes haavatavamaks, mistõttu õigeaegne raie on mõistlik. Metsamajandamiskava annab hea ülevaate puistu tagavarast ja aitab arvutada iga hektari hinnangulise väärtuse, samuti planeerida metsamajanduslikke töid.
          </p>
        </div>

        {/* Card row removed per request */}
      </Container>
    </section>
  );
}


