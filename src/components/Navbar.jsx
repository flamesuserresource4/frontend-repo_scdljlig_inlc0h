import { ShoppingBag, Search, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Uomo", href: "#catalogo" },
    { label: "Donna", href: "#catalogo" },
    { label: "Accessori", href: "#catalogo" },
    { label: "Nuove Collezioni", href: "#catalogo" },
    { label: "Saldi", href: "#catalogo" },
    { label: "Brand Story", href: "#brand" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-zinc-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-zinc-900 to-zinc-700 flex items-center justify-center">
              <span className="text-xs font-semibold tracking-widest text-white">LX</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-semibold tracking-wider text-zinc-900">LUXE</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-amber-500">atelier</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.slice(0, 6).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-zinc-700 hover:text-zinc-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              className="hidden sm:flex items-center gap-2 text-zinc-700 hover:text-zinc-900"
              aria-label="Cerca"
            >
              <Search className="h-5 w-5" />
            </button>
            <button className="relative text-zinc-700 hover:text-zinc-900" aria-label="Carrello">
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 h-4 min-w-[16px] px-1 rounded-full bg-amber-500 text-white text-[10px] leading-4 text-center">2</span>
            </button>
            <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm text-zinc-700 hover:text-zinc-900"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
