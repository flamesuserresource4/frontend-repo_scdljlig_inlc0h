export default function BrandStory() {
  return (
    <section id="brand" className="relative overflow-hidden bg-zinc-50 py-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-amber-200/60 to-zinc-200 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-zinc-200 to-amber-200/60 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-zinc-200 bg-white">
              <img
                src="https://images.unsplash.com/photo-1516570161787-2fd917215a3d?q=80&w=1600&auto=format&fit=crop"
                alt="Lifestyle di brand di lusso"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-600">La Nostra Visione</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-zinc-900">Ricerca, materia, identità</h2>
            <p className="mt-4 text-zinc-700 leading-relaxed">
              Crediamo in un'estetica essenziale che esalta la qualità dei materiali. Ogni capo nasce da un processo
              meticoloso: dalla selezione dei tessuti alle finiture artigianali. Il nostro stile parla di modernità
              senza tempo e di dettagli che fanno la differenza.
            </p>
            <p className="mt-4 text-zinc-700 leading-relaxed">
              Il risultato è un guardaroba contemporaneo, versatile e raffinato, pensato per chi cerca equilibrio tra
              comfort ed eleganza. La nostra promessa: capi che durano, emozionano e migliorano con il tempo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
