"use client";

import Link from "next/link";
import { absUrl } from "@/lib/routes";

export default function ConsentCheckbox({
  checked,
  onChange,
  id,
  className = "",
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  id?: string;
  className?: string;
}) {
  return (
    <label
      htmlFor={id}
      className={`flex items-start gap-2 text-left text-[12px] leading-5 text-slate-600 ${className}`}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        required
        className="mt-[2px] h-4 w-4 shrink-0 rounded border-slate-300 text-emerald-600 accent-emerald-600 focus:ring-2 focus:ring-emerald-400"
      />
      <span>
        Olen lugenud ja nõustun{" "}
        <Link
          href={absUrl("/isikuandmete-kaitse-kord/")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-700 underline hover:text-emerald-800"
        >
          isikuandmete kaitse korraga
        </Link>
        .
      </span>
    </label>
  );
}
