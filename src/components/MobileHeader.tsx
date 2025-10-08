"use client";

import Image from "next/image";
import { Container } from "@/components/primitives/Container";
import { useEffect, useState } from "react";

interface DropdownItem {
  label: string;
  href: string;
}

const metsamaaDropdown: DropdownItem[] = [
  { label: "Metsa ost", href: "/metsa-ost/" },
  { label: "Metsa müük", href: "/metsa-muuk/" },
  { label: "Metsa hind", href: "/" },
  { label: "Metsa istutamine", href: "/metsa-istutamine/" },
  { label: "Metsakava", href: "/metsamajandamiskava/" },
];

const metsaraieDropdown: DropdownItem[] = [
  { label: "Raieõiguse ost", href: "/raieoiguse-ost/" },
  { label: "Raieõiguse müük", href: "/raieoiguse-muuk/" },
  { label: "Raieõiguse hind", href: "/raieoiguse-hind/" },
  { label: "Metsateatis", href: "/metsateatis/" },
  { label: "Hooldusraied", href: "/hooldusraied/" },
];

const pollumaaDropdown: DropdownItem[] = [
  { label: "Põllumaa ost", href: "/pollumaa-ost/" },
  { label: "Põllumaa müük", href: "/pollumaa-muuk/" },
  { label: "Põllumaa hind", href: "/pollumaa-hind/" },
];

export default function MobileHeader() { return null; }


