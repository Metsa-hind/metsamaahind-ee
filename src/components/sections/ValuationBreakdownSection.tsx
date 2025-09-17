"use client";

export default function ValuationBreakdownSection() {
  return (
    <section className="relative py-14 sm:py-18">
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <div className="mb-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-3 py-1 text-xs font-medium text-emerald-900">
            Hinnangu kalkulaator
          </p>
          <h2 className="mt-3 font-adcreative text-2xl text-slate-900 sm:text-3xl">
            Metsamaa väärtuse ligikaudne arvestus
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Reguleeri sisendeid ja vaata, kuidas tulem muutub. Vahemikud on näitlikud ja ei asenda eksperthinnangut.
          </p>
        </div>
      </div>
    </section>
  );
}
