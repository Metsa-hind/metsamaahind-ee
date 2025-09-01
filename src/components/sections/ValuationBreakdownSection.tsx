"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

function format(n: number) {
  return new Intl.NumberFormat("et-EE").format(n);
}

export default function ValuationBreakdownSection() {
  // Defaults inspired by the narrative, slightly adjusted.
  const [stock, setStock] = useState(400); // tihumeetreid/ha
  const [usable, setUsable] = useState(350); // tm müügikõlblik
  const [sawlog, setSawlog] = useState(95); // €/tm
  const [pulp, setPulp] = useState(53); // €/tm
  const [pulpShare, setPulpShare] = useState(0.25); // 0..1
  const [harvest, setHarvest] = useState(20); // €/tm
  const [transport, setTransport] = useState(10); // €/tm
  const [land, setLand] = useState(2400); // €/ha

  const result = useMemo(() => {
    const sawPart = (1 - pulpShare) * usable;
    const pulpPart = pulpShare * usable;
    const revenue = sawPart * sawlog + pulpPart * pulp; // €
    const costs = usable * (harvest + transport);
    const gross = revenue + land;
    const net = gross - costs;
    const avgPerTm = usable ? revenue / usable : 0;
    return { revenue, costs, gross, net, avgPerTm, sawPart, pulpPart };
  }, [usable, sawlog, pulp, pulpShare, harvest, transport, land]);

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
            Reguleeri sisendeid ja vaata, kuidas tulem muutub. Vahemikud on näitlikud ja ei
            asenda eksperthinnangut.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Controls + Chart */}
          <div className="rounded-2xl border border-emerald-100 bg-white/80 p-5 backdrop-blur">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label={`Metsa tagavara (tm/ha): ${stock}`}>
                <input className="accent-emerald-600 w-full" type="range" min={280} max={450} value={stock} onChange={(e) => setStock(+e.target.value)} />
              </Field>
              <Field label={`Müügikõlblik (tm): ${usable}`}>
                <input className="accent-emerald-600 w-full" type="range" min={240} max={stock} value={usable} onChange={(e) => setUsable(+e.target.value)} />
              </Field>
              <Field label={`Palgi hind (€/tm): ${sawlog}`}>
                <input className="accent-emerald-600 w-full" type="range" min={80} max={110} value={sawlog} onChange={(e) => setSawlog(+e.target.value)} />
              </Field>
              <Field label={`Paberipuu hind (€/tm): ${pulp}`}>
                <input className="accent-emerald-600 w-full" type="range" min={40} max={65} value={pulp} onChange={(e) => setPulp(+e.target.value)} />
              </Field>
              <Field label={`Paberipuu osakaal: ${(pulpShare * 100).toFixed(0)}%`}>
                <input className="accent-emerald-600 w-full" type="range" min={0} max={0.4} step={0.05} value={pulpShare} onChange={(e) => setPulpShare(+e.target.value)} />
              </Field>
              <Field label={`Ülestöötamine (€/tm): ${harvest}`}>
                <input className="accent-emerald-600 w-full" type="range" min={14} max={26} value={harvest} onChange={(e) => setHarvest(+e.target.value)} />
              </Field>
              <Field label={`Metsavedu (€/tm): ${transport}`}>
                <input className="accent-emerald-600 w-full" type="range" min={6} max={14} value={transport} onChange={(e) => setTransport(+e.target.value)} />
              </Field>
              <Field label={`Maa väärtus (€/ha): ${format(land)}`}>
                <input className="accent-emerald-600 w-full" type="range" min={1800} max={2600} step={100} value={land} onChange={(e) => setLand(+e.target.value)} />
              </Field>
            </div>

            {/* Visual breakdown (stacked bar + annotations) */}
            <div className="mt-6 rounded-xl border border-emerald-100 bg-emerald-50/40 p-4">
              <div className="mb-3 text-sm font-medium text-emerald-900">Jaotus: tulud vs kulud vs maa</div>
              {(() => {
                const rev = result.revenue;
                const cost = result.costs;
                const landV = land;
                const total = Math.max(rev + landV, 1);
                const revPct = Math.max(2, Math.round((rev / total) * 100));
                const landPct = Math.max(2, Math.round((landV / total) * 100));
                let costPct = Math.round((cost / total) * 100);
                // Normalize to 100
                let norm = revPct + landPct + costPct;
                if (norm !== 100) costPct += 100 - norm;
                return (
                  <div className="space-y-3">
                    <div className="h-6 w-full overflow-hidden rounded-lg bg-white/70 shadow-inner">
                      <div className="h-full bg-emerald-600/80" style={{ width: `${revPct}%` }} />
                      <div className="-mt-6 h-6 bg-emerald-400/80" style={{ width: `${landPct}%`, marginLeft: `${revPct}%` }} />
                      <div className="-mt-6 h-6 bg-rose-400/80" style={{ width: `${costPct}%`, marginLeft: `${revPct + landPct}%` }} />
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="rounded-md bg-white/80 p-2 text-emerald-900">Tulud: {format(Math.round(rev))} €</div>
                      <div className="rounded-md bg-white/80 p-2 text-emerald-900">Maa: {format(Math.round(landV))} €</div>
                      <div className="rounded-md bg-white/80 p-2 text-rose-700">Kulud: {format(Math.round(cost))} €</div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* Results */}
          <div className="grid gap-4">
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-emerald-100 bg-white/80 p-6 shadow-sm backdrop-blur">
              <h3 className="text-lg font-semibold text-slate-900">Tulud</h3>
              <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl bg-emerald-50 p-4">
                  <div className="text-slate-600">Saepalk</div>
                  <div className="mt-1 text-emerald-800">{format(result.sawPart)} tm × {sawlog} €/tm</div>
                </div>
                <div className="rounded-xl bg-emerald-50 p-4">
                  <div className="text-slate-600">Paberipuu</div>
                  <div className="mt-1 text-emerald-800">{format(result.pulpPart)} tm × {pulp} €/tm</div>
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <div className="text-sm text-slate-600">Keskmine hind (€/tm)</div>
                <div className="text-xl font-semibold text-emerald-800">{format(Math.round(result.avgPerTm))}</div>
              </div>
              <div className="mt-2 flex items-baseline justify-between">
                <div className="text-sm text-slate-600">Tulud kokku</div>
                <div className="text-2xl font-semibold text-emerald-900">{format(Math.round(result.revenue))} €</div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-emerald-100 bg-white/80 p-6 shadow-sm backdrop-blur">
              <h3 className="text-lg font-semibold text-slate-900">Kulud</h3>
              <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl bg-slate-50 p-4">
                  <div className="text-slate-600">Ülestöötamine</div>
                  <div className="mt-1 text-slate-800">{format(usable)} tm × {harvest} €/tm</div>
                </div>
                <div className="rounded-xl bg-slate-50 p-4">
                  <div className="text-slate-600">Metsavedu</div>
                  <div className="mt-1 text-slate-800">{format(usable)} tm × {transport} €/tm</div>
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <div className="text-sm text-slate-600">Kulud kokku</div>
                <div className="text-2xl font-semibold text-slate-900">{format(Math.round(result.costs))} €</div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-emerald-100 bg-white/90 p-6 shadow-sm backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-600">Lisatud maa väärtus</div>
                  <div className="text-emerald-800">{format(land)} €</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-600">Arvestuslik väärtus (€/ha)</div>
                  <div className="text-3xl font-semibold text-emerald-700">{format(Math.max(0, Math.round(result.net)))} €</div>
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-500">
                Näitlik kalkulatsioon, mitte pakkumine. Tegelik väärtus sõltub ligipääsust, kvaliteedist,
                asukohast ja turuhindadest.
              </p>
            </motion.div>
              </div>
            </div>

            {/* Donut for mahu jaotus (fills whitespace) */}
            {(() => {
              const total = Math.max(stock, 1);
              const saw = Math.max(0, (1 - pulpShare) * usable);
              const pul = Math.max(0, pulpShare * usable);
              const rest = Math.max(0, total - usable);
              const pieces = [
                { v: saw, color: "#059669" }, // emerald-600
                { v: pul, color: "#34d399" }, // emerald-400
                { v: rest, color: "#a7f3d0" }, // emerald-200
              ];
              const sum = pieces.reduce((a, b) => a + b.v, 0) || 1;
              let start = -Math.PI / 2;
              const arcs = pieces.map((p) => {
                const angle = (p.v / sum) * Math.PI * 2;
                const s = start;
                start += angle;
                return { s, e: start, color: p.color };
              });
              const R = 44;
              const C = 56;
              const arc = (cx: number, cy: number, r: number, a0: number, a1: number) => {
                const x0 = cx + r * Math.cos(a0);
                const y0 = cy + r * Math.sin(a0);
                const x1 = cx + r * Math.cos(a1);
                const y1 = cy + r * Math.sin(a1);
                const large = a1 - a0 > Math.PI ? 1 : 0;
                return `M ${x0} ${y0} A ${r} ${r} 0 ${large} 1 ${x1} ${y1}`;
              };
              return (
                <div className="mt-6 grid grid-cols-[120px_1fr] items-center gap-4 rounded-xl border border-emerald-100 bg-white/70 p-4">
                  <svg viewBox="0 0 112 112" className="h-24 w-24">
                    <circle cx={C} cy={C} r={R} fill="none" stroke="#e5e7eb" strokeWidth={12} />
                    {arcs.map((a, idx) => (
                      <path key={idx} d={arc(C, C, R, a.s, a.e)} stroke={a.color} strokeWidth={12} fill="none" />
                    ))}
                  </svg>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="rounded-md bg-emerald-50 p-2 text-emerald-900">Saepalk<br />{format(Math.round(saw))} tm</div>
                    <div className="rounded-md bg-emerald-50 p-2 text-emerald-900">Paberipuu<br />{format(Math.round(pul))} tm</div>
                    <div className="rounded-md bg-emerald-50 p-2 text-emerald-900">Ülejääk<br />{format(Math.round(rest))} tm</div>
                  </div>
                </div>
              );
            })()}
          </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block text-sm">
      <div className="text-slate-700">{label}</div>
      <div className="mt-1 rounded-lg border border-slate-200 bg-white px-3 py-2">{children}</div>
    </label>
  );
}
