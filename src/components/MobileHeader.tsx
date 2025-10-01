"use client";

import Image from "next/image";
import { Container } from "@/components/primitives/Container";
import { useEffect, useState } from "react";

interface DropdownItem {
  label: string;
  href: string;
}

const metsamaaDropdown: DropdownItem[] = [
  { label: "Metsa ost", href: "https://metsamaahind.ee/metsa-ost/" },
  { label: "Metsa müük", href: "https://metsamaahind.ee/metsa-muuk/" },
  { label: "Metsa hind", href: "https://metsamaahind.ee" },
  { label: "Metsa istutamine", href: "https://metsamaahind.ee/metsa-istutamine/" },
  { label: "Metsakava", href: "https://metsamaahind.ee/metsamajandamiskava/" },
];

const metsaraieDropdown: DropdownItem[] = [
  { label: "Raieõiguse ost", href: "https://metsamaahind.ee/raieoiguse-ost/" },
  { label: "Raieõiguse müük", href: "https://metsamaahind.ee/raieoiguse-muuk/" },
  { label: "Raieõiguse hind", href: "https://metsamaahind.ee/raieoiguse-hind/" },
  { label: "Metsateatis", href: "https://metsamaahind.ee/metsateatis/" },
  { label: "Hooldusraied", href: "https://metsamaahind.ee/hooldusraied/" },
];

const pollumaaDropdown: DropdownItem[] = [
  { label: "Põllumaa ost", href: "https://metsamaahind.ee/pollumaa-ost/" },
  { label: "Põllumaa müük", href: "https://metsamaahind.ee/pollumaa-muuk/" },
  { label: "Põllumaa hind", href: "https://metsamaahind.ee/pollumaa-hind/" },
];

export default function MobileHeader() { return null; }


