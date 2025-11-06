import { useMemo, useState } from 'react';

const productsData = [
  {
    id: 1,
    name: 'Blazer in Lana',
    category: 'Uomo',
    price: 320,
    image: 'https://images.unsplash.com/photo-1532526674046-5b3f6d7d2ab1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCbGF6ZXIlMjBpbiUyMExhbmF8ZW58MHwwfHx8MTc2MjQ1NDEzMHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Abito Satin',
    category: 'Donna',
    price: 450,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Brogue Pelle',
    category: 'Accessori',
    price: 220,
    image: 'https://images.unsplash.com/photo-1712145176765-cc1a308331e4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCcm9ndWUlMjBQZWxsZXxlbnwwfDB8fHwxNzYyNDU0MTMwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'Cappotto Cashmere',
    category: 'Uomo',
    price: 680,
    image: 'https://images.unsplash.com/photo-1700168077358-692db90c8b7f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYXBwb3R0byUyMENhc2htZXJlfGVufDB8MHx8fDE3NjI0NTQxMzF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    name: 'Borsa a Tracolla',
    category: 'Accessori',
    price: 390,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Stivaletti Tacco',
    category: 'Donna',
    price: 280,
    image: 'https://images.unsplash.com/photo-1504093376055-b3094b674dcb?q=80&w=1200&auto=format&fit=crop',
  },
];

const categories = ['Tutti', 'Uomo', 'Donna', 'Accessori', 'Nuove Collezioni', 'Saldi'];

export default function ProductGrid() {
  const [active, setActive] = useState('Tutti');
  const filtered = useMemo(() => {
    if (active === 'Tutti' || active === 'Nuove Collezioni' || active === 'Saldi') return productsData;
    return productsData.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="catalogo" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900">Collezioni</h2>
            <p className="mt-2 text-zinc-600 max-w-2xl">Galleria prodotti dal layout essenziale. Usa i filtri per navigare tra categorie e trend.</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm transition ring-1 ${active === c ? 'bg-zinc-900 text-white ring-zinc-900' : 'bg-white text-zinc-800 ring-zinc-300 hover:bg-zinc-50'}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <article key={p.id} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-100">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <button className="absolute bottom-3 right-3 rounded-full bg-zinc-900/90 text-white text-xs px-4 py-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition">
                  Aggiungi al carrello
                </button>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-zinc-900">{p.name}</h3>
                  <p className="text-xs text-zinc-500">{p.category}</p>
                </div>
                <span className="text-sm font-semibold text-zinc-900">€ {p.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
