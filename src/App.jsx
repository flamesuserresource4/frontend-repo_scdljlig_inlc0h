import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import BrandStory from './components/BrandStory';

function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-zinc-900 to-zinc-700 flex items-center justify-center">
              <span className="text-xs font-semibold tracking-widest text-white">LX</span>
            </div>
            <span className="text-sm text-zinc-700">LUXE atelier</span>
          </div>
          <p className="text-xs text-zinc-500">© {new Date().getFullYear()} LUXE atelier — Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-['Inter','Mona Sans','Manrope',system-ui,sans-serif] text-zinc-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <BrandStory />
      </main>
      <Footer />
    </div>
  );
}
