import '../styles/arbeidskrav.css'

function Arbeidskrav({ liste, laster, feil }) {
  return (
    <section className="arbeidskrav-seksjon" aria-labelledby="ak-tittel">
      <h2 id="ak-tittel" className="seksjon-tittel">Arbeidskrav</h2>
      <p className="seksjon-intro">
        Oversikt over arbeidskravene i kurset Utvikling av interaktive nettsteder.
      </p>

      {laster && (
        <p className="status-melding">Henter arbeidskrav fra Sanity …</p>
      )}

      {feil && (
        <p className="status-melding feil">{feil}</p>
      )}

      {!laster && !feil && liste.length === 0 && (
        <p className="status-melding">
          Ingen arbeidskrav funnet. Legg til innhold i Sanity Studio.
        </p>
      )}

      {!laster && !feil && liste.length > 0 && (
        <ol className="arbeidskrav-liste">
          {liste.map((krav) => (
            <li key={krav._id} className="arbeidskrav-element">
              <article className="arbeidskrav-kort">
                <header className="ak-kort-topp">
                  <span className="ak-nummer">#{krav.nummer}</span>
                  <h3 className="ak-tittel">{krav.tittel}</h3>
                </header>
                <p className="ak-beskrivelse">{krav.beskrivelse}</p>
              </article>
            </li>
          ))}
        </ol>
      )}
    </section>
  )
}

export default Arbeidskrav
