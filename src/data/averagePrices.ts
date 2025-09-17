export type YearRange = "2023-2024" | "2024-2025";

export type CountyKey =
  | "Pärnumaa"
  | "Harjumaa"
  | "Tartumaa"
  | "Raplamaa"
  | "Ida-Virumaa"
  | "Saaremaa";

export interface CountyStats {
  county: CountyKey;
  dealsCount: number; // Tehingute arv
  avgHectarePerDeal: number; // Keskmine hektarite arv (ha)
  medianPricePerHa: number; // €/ha
  maxPricePerHa: number; // € total max price
  averageEurPerHa?: number; // Optional: keskmine €/ha (if available)
}

export type YearData = Record<CountyKey, CountyStats>;

export const COUNTY_ORDER: CountyKey[] = [
  "Pärnumaa",
  "Harjumaa",
  "Tartumaa",
  "Raplamaa",
  "Ida-Virumaa",
  "Saaremaa",
];

export const YEAR_LABELS: Record<YearRange, string> = {
  "2023-2024": "2023/2024",
  "2024-2025": "2024/2025",
};

export const PRICE_DATA: Record<YearRange, YearData> = {
  "2023-2024": {
    Pärnumaa: {
      county: "Pärnumaa",
      dealsCount: 156,
      avgHectarePerDeal: 8,
      medianPricePerHa: 6097,
      maxPricePerHa: 555272,
    },
    Harjumaa: {
      county: "Harjumaa",
      dealsCount: 147,
      avgHectarePerDeal: 8,
      medianPricePerHa: 5205,
      maxPricePerHa: 351200,
    },
    Tartumaa: {
      county: "Tartumaa",
      dealsCount: 84,
      avgHectarePerDeal: 7,
      medianPricePerHa: 6470,
      maxPricePerHa: 500000,
    },
    Raplamaa: {
      county: "Raplamaa",
      dealsCount: 129,
      avgHectarePerDeal: 7,
      medianPricePerHa: 5115,
      maxPricePerHa: 419055,
    },
    "Ida-Virumaa": {
      county: "Ida-Virumaa",
      dealsCount: 91,
      avgHectarePerDeal: 7,
      medianPricePerHa: 6251,
      maxPricePerHa: 712486,
    },
    Saaremaa: {
      county: "Saaremaa",
      dealsCount: 249,
      avgHectarePerDeal: 8,
      medianPricePerHa: 5816,
      maxPricePerHa: 447512,
    },
  },
  "2024-2025": {
    Pärnumaa: {
      county: "Pärnumaa",
      dealsCount: 191,
      avgHectarePerDeal: 9,
      medianPricePerHa: 5201,
      maxPricePerHa: 402000,
      averageEurPerHa: 21189,
    },
    Harjumaa: {
      county: "Harjumaa",
      dealsCount: 130,
      avgHectarePerDeal: 7,
      medianPricePerHa: 4051,
      maxPricePerHa: 943558,
      averageEurPerHa: 25270,
    },
    Tartumaa: {
      county: "Tartumaa",
      dealsCount: 78,
      avgHectarePerDeal: 7,
      medianPricePerHa: 6654,
      maxPricePerHa: 330000,
      averageEurPerHa: 24969,
    },
    Raplamaa: {
      county: "Raplamaa",
      dealsCount: 144,
      avgHectarePerDeal: 9,
      medianPricePerHa: 4331,
      maxPricePerHa: 335000,
      averageEurPerHa: 16228,
    },
    "Ida-Virumaa": {
      county: "Ida-Virumaa",
      dealsCount: 83,
      avgHectarePerDeal: 11,
      medianPricePerHa: 5597,
      maxPricePerHa: 1518032,
      averageEurPerHa: 21825,
    },
    Saaremaa: {
      county: "Saaremaa",
      dealsCount: 179,
      avgHectarePerDeal: 8,
      medianPricePerHa: 6756,
      maxPricePerHa: 447512,
      averageEurPerHa: 20694,
    },
  },
};

export type DerivedCountyStats = CountyStats & {
  yoyMedianDeltaPct?: number; // relative change vs other year
};

// Highest price per hectare (€/ha) when available
export const HIGHEST_HA_PRICE: Record<YearRange, Partial<Record<CountyKey, number>>> = {
  "2023-2024": {
    Pärnumaa: 30743,
    Harjumaa: 29925,
    Tartumaa: 27778,
    Raplamaa: 26502,
    "Ida-Virumaa": 27626,
    Saaremaa: 19704,
  },
  "2024-2025": {
    Pärnumaa: 21189,
    Harjumaa: 25270,
    Tartumaa: 24969,
    Raplamaa: 16228,
    "Ida-Virumaa": 21825,
    Saaremaa: 20694,
  },
};

export function getYearList(
  year: YearRange
): DerivedCountyStats[] {
  const current = PRICE_DATA[year];
  const other: YearData =
    year === "2023-2024" ? PRICE_DATA["2024-2025"] : PRICE_DATA["2023-2024"];

  return COUNTY_ORDER.map((key) => {
    const a = current[key];
    const b = other[key];
    const yoy = b && a ? ((a.medianPricePerHa - b.medianPricePerHa) / b.medianPricePerHa) * 100 : undefined;
    return { ...a, yoyMedianDeltaPct: Number.isFinite(yoy!) ? yoy : undefined };
  });
}

export function getNationalBaselines(year: YearRange) {
  const list = Object.values(PRICE_DATA[year]);
  const totalDeals = list.reduce((s, c) => s + c.dealsCount, 0);
  const weightedAvgHectare =
    list.reduce((s, c) => s + c.avgHectarePerDeal * c.dealsCount, 0) /
    Math.max(1, totalDeals);
  const medianAverage =
    list.reduce((s, c) => s + c.medianPricePerHa, 0) / Math.max(1, list.length);
  const maxOfMax = Math.max(...list.map((c) => c.maxPricePerHa));
  return {
    totalDeals,
    weightedAvgHectare,
    medianAverage,
    maxOfMax,
  };
}

export type SortKey = "median" | "max" | "deals" | "hectare";

export function sortCounties(
  items: DerivedCountyStats[],
  by: SortKey = "median",
  direction: "desc" | "asc" = "desc"
) {
  const factor = direction === "asc" ? 1 : -1;
  return [...items].sort((a, b) => {
    const av = by === "median" ? a.medianPricePerHa : by === "max" ? a.maxPricePerHa : by === "deals" ? a.dealsCount : a.avgHectarePerDeal;
    const bv = by === "median" ? b.medianPricePerHa : by === "max" ? b.maxPricePerHa : by === "deals" ? b.dealsCount : b.avgHectarePerDeal;
    return (av - bv) * factor;
  });
}


