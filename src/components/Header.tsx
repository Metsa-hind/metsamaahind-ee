"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Mail, TreePine, Settings, Info, FileText, Calculator, ShoppingCart, Tractor, Axe } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { Button } from "@/components/ui/button";

interface DropdownItem {
  label: string;
  href: string;
  icon: any;
}

const servicesDropdown: DropdownItem[] = [
  { label: "Metsa müük", href: "/metsa-myuk", icon: ShoppingCart },
  { label: "Metsa ost", href: "/metsa-ost", icon: ShoppingCart },
  { label: "Põllumaa müük", href: "/pollumaa-myuk", icon: Tractor },
  { label: "Põllumaa ost", href: "/pollumaa-ost", icon: Tractor },
  { label: "Metsa istutamine", href: "/metsa-istutamine", icon: Settings },
  { label: "Raieõiguse ost", href: "/raieoiguse-ost", icon: Axe },
  { label: "Raieõiguse müük", href: "/raieoiguse-myuk", icon: Axe },
];

const infoDropdown: DropdownItem[] = [
  { label: "Metsa hind", href: "/metsa-hind", icon: Calculator },
  { label: "Metsateatis", href: "/metsateatis", icon: FileText },
  { label: "Metsakava", href: "/metsakava", icon: FileText },
];

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100/50 shadow-sm">
      <Container className="py-4 pl-4 lg:pl-6">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-6">
            {/* Logo Placeholder */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-lg flex items-center justify-center shadow-lg">
                <TreePine className="w-6 h-6 text-white" />
              </div>
              <div className="font-adcreative font-bold text-xl text-emerald-900">
                MetsaPartner
              </div>
            </motion.div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Avaleht */}
              <motion.a
                href="/"
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-emerald-700 transition-colors duration-200 rounded-lg hover:bg-emerald-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Avaleht
              </motion.a>

              {/* Teenused Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.button
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 hover:text-emerald-700 transition-colors duration-200 rounded-lg hover:bg-emerald-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Teenused
                  <motion.div
                    animate={{ rotate: activeDropdown === 'services' ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-emerald-100/50 overflow-hidden"
                    >
                      {servicesDropdown.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                          <motion.a
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors duration-200 border-b border-emerald-50/50 last:border-b-0"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <IconComponent className="w-4 h-4 text-emerald-600" />
                            {item.label}
                          </motion.a>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Info Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('info')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.button
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 hover:text-emerald-700 transition-colors duration-200 rounded-lg hover:bg-emerald-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Info
                  <motion.div
                    animate={{ rotate: activeDropdown === 'info' ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {activeDropdown === 'info' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-emerald-100/50 overflow-hidden"
                    >
                      {infoDropdown.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                          <motion.a
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors duration-200 border-b border-emerald-50/50 last:border-b-0"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <IconComponent className="w-4 h-4 text-emerald-600" />
                            {item.label}
                          </motion.a>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Kontakt */}
              <motion.a
                href="/kontakt"
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-emerald-700 transition-colors duration-200 rounded-lg hover:bg-emerald-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Kontakt
              </motion.a>
            </nav>
          </div>

          {/* Right Side - CTA */}
          <div className="flex items-center gap-4">
            {/* Quick Contact Button */}
            <motion.a
              href="mailto:info@metsapartner.ee"
              className="hidden md:flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 hover:text-emerald-700 transition-colors duration-200 rounded-lg hover:bg-emerald-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4" />
              <span className="hidden xl:inline">info@metsapartner.ee</span>
            </motion.a>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Küsi hinnangut
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.div>
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 text-slate-700 hover:text-emerald-700 transition-colors duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </Container>


    </header>
  );
}
