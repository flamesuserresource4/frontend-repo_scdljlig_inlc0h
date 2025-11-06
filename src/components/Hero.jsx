import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24">
      {/* Background 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4jRbi3J9s67xKp0a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white pointer-events-none" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-24">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900">
              Eleganza Contemporanea
            </h1>
            <p className="mt-6 text-lg text-zinc-700 max-w-xl">
              Abbigliamento, scarpe e accessori curati nei dettagli. Minimalismo sofisticato,
              qualità impeccabile e design senza tempo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#catalogo" className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-white text-sm tracking-wide hover:bg-zinc-800 transition">
                Scopri la Collezione
              </a>
              <a href="#brand" className="inline-flex items-center justify-center rounded-full ring-1 ring-zinc-300 px-6 py-3 text-sm text-zinc-900 hover:bg-zinc-50 transition">
                La Nostra Storia
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-3xl bg-zinc-100">
              <img
                src="https://images.unsplash.com/photo-1520975922284-8b456906c813?q=80&w=1600&auto=format&fit=crop"
                alt="Scatto editoriale di moda"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block">
              <div className="rounded-2xl bg-white/70 backdrop-blur ring-1 ring-zinc-200 p-4">
                <img
                  src="https://images.unsplash.com/photo-1538443523107-6272c97d6f61?q=80&w=1200&auto=format&fit=crop"
                  alt="Dettaglio di tessuto"
                  className="h-24 w-24 rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
