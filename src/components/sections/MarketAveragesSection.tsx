"use client";
import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

type Band = { label: string; min: number; max: number; trend: number };

const BANDS: Band[] = [
  { label: "Raiesmikud", min: 2500, max: 4200, trend: 12 },
  { label: "Lepikud", min: 3800, max: 5500, trend: 8 },
  { label: "Kaasikud", min: 4200, max: 6800, trend: 15 },
];

function format(n: number) {
  return new Intl.NumberFormat("et-EE").format(n);
}

export default function MarketAveragesSection() {
  return null;
}

