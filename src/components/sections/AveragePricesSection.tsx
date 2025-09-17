"use client";

import Section from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { useMemo, useState } from "react";
import { YEAR_LABELS, YearRange, getYearList, sortCounties, type SortKey, HIGHEST_HA_PRICE, PRICE_DATA } from "@/data/averagePrices";
import GrowthRingsRadial from "@/components/visuals/GrowthRingsRadial";
import MetricPill from "@/components/ui/MetricPill";
import { BarChart2, TrendingUp, Maximize2 } from "lucide-react";

export default function AveragePricesSection() {
  const [year, setYear] = useState<YearRange>("2024-2025");
  const [sortBy, setSortBy] = useState<SortKey>("median");

  const counties = useMemo(() => sortCounties(getYearList(year), sortBy, "desc"), [year, sortBy]);

  return (
    <Section className="mt-[60px]">
      <Container>
        

        {/* Controls */}
        <div className="mx-auto mt-6 grid w-full max-w-[1200px] grid-cols-1 items-end gap-4 sm:grid-cols-2">
          {/* Left column: heading copy */}
          <div className="justify-self-start text-left">
            <h3 className="font-adcreative text-2xl text-slate-900 sm:text-3xl">Vaata metsatehingute statistikat</h3>
            <p className="mt-4 text-left text-base leading-7 text-slate-700">
              Vaadake statistikat Eestis tehtud metsatehingute kohta vahemikus 06.2023 - 06.2024 või 06.2024 - 06.2025 ning tutvuge hinnastatistikaga lähemalt.
            </p>
          </div>

          {/* Right column: year toggle + sort */}
          <div className="flex items-center justify-self-end self-end gap-3">
            <div className="inline-flex rounded-full border border-emerald-200 bg-white/80 p-1 shadow-sm">
              {(["2023-2024", "2024-2025"] as YearRange[]).map((y) => (
                <button
                  key={y}
                  onClick={() => setYear(y)}
                  className={`min-w-[140px] rounded-full px-4 py-2 text-sm transition-colors ${
                    year === y ? "bg-emerald-600 text-white" : "text-emerald-800 hover:bg-emerald-50"
                  }`}
                >
                  {YEAR_LABELS[y]}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm">
              <label className="text-emerald-900">Sorteeri:</label>
              <select
                className="rounded-lg border border-emerald-200 bg-white px-3 py-2 text-emerald-900 shadow-sm"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortKey)}
              >
                <option value="median">Mediaanhind</option>
                <option value="max">Maksimaalne hind</option>
                <option value="deals">Tehingute arv</option>
                <option value="hectare">Keskmine ha tehingu kohta</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid with initial visualization */}
        <div className="mx-auto mt-7 grid w-full max-w-[1200px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {counties.map((c) => (
            <div
              key={c.county}
              className="rounded-2xl border border-emerald-100 bg-white/80 p-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md focus-within:shadow-md"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[1.4rem] font-bold text-emerald-900">{c.county}</h3>
                {typeof c.yoyMedianDeltaPct === "number" && (() => {
                  const otherYear: YearRange = year === "2023-2024" ? "2024-2025" : "2023-2024";
                  const prev = PRICE_DATA[otherYear][c.county as any]?.medianPricePerHa ?? 0;
                  const curr = c.medianPricePerHa;
                  const sign = c.yoyMedianDeltaPct >= 0 ? "+" : "";
                  const [start, end] = year.split("-");
                  const trendWord = c.yoyMedianDeltaPct >= 0 ? "tõusnud" : "langenud";
                  return (
                    <div className="relative group inline-block">
                      <span className={`rounded-full px-3 py-1 text-sm ${c.yoyMedianDeltaPct >= 0 ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-900"}`} aria-describedby={`yoy-${c.county}`}>
                        {sign}
                        {c.yoyMedianDeltaPct.toFixed(1)}% {year === "2023-2024" ? "vs 24/25" : "vs 23/24"}
                      </span>
                      <div
                        id={`yoy-${c.county}`}
                        role="tooltip"
                        className="pointer-events-none absolute left-0 top-[calc(100%+8px)] z-10 w-max max-w-[320px] rounded-md border border-emerald-300 bg-white p-2 text-[12px] text-emerald-900 opacity-0 shadow-sm transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100"
                      >
                        <span className="font-medium">{c.county}l</span> tehtud tehingute statistika näitab, et perioodil juuni {start} – juuni {end} on mediaanhind {trendWord} {prev.toLocaleString("et-EE")} €/ha → {curr.toLocaleString("et-EE")} €/ha ({sign}{Math.abs(c.yoyMedianDeltaPct).toFixed(1)}%). Mediaanhind tähendab reaalset keskmist hinda, mida ei mõjuta üksikud suurimad tehingud või kõige odavamad tehingud.
                      </div>
                    </div>
                  );
                })()}
              </div>
              <button className="sr-only">Ava detailid</button>
              <div className="mt-4 flex items-center justify-center">
                <GrowthRingsRadial
                  diameter={220}
                  median={c.medianPricePerHa}
                  max={HIGHEST_HA_PRICE[year]?.[c.county as any] ?? 0}
                  maxDomainMedian={8000}
                  maxDomainMax={35000}
                  deals={c.dealsCount}
                />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-emerald-900/90">
                <MetricPill label="Tehinguid" value={c.dealsCount} Icon={BarChart2} />
                <MetricPill
                  label={year === "2024-2025" ? "Kõrgeim hektari hind" : "Kõrgeim €/ha"}
                  value={HIGHEST_HA_PRICE[year]?.[c.county as any] ?? "–"}
                  suffix={typeof HIGHEST_HA_PRICE[year]?.[c.county as any] === "number" ? " €/ha" : undefined}
                  Icon={TrendingUp}
                />
                <MetricPill label="Mediaan" value={c.medianPricePerHa} suffix=" €/ha" Icon={TrendingUp} />
                <MetricPill label="Maksimum" value={c.maxPricePerHa} suffix=" €" Icon={Maximize2} />
              </div>

              

              
            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
}


