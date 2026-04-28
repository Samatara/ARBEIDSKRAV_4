import { useState } from 'react'
import './App.css'

function App() {
  const [arbeidskrav, setArbeidskrav] = useState([])
  const [laster, setLaster] = useState(true)
  const [feil, setFeil] = useState(null)
  useEffect(() => {
    const query = [_type == "arbeidskrav"] | order(nummer asc) {
        _id,
        tittel,
        beskrivelse,
        nummer
}
    client
      .fetch(query)
      .then((data) => {
        setArbeidskrav(data)
        setLaster(false)
      })
      .catch((err) => {
        console.error('Feil ved henting fra Sanity:', err)
        setFeil('Klarte ikke å hente arbeidskrav fra Sanity.')
        setLaster(false)
      })
  }, [])
  return (
    <>
      <Header gruppenummer="X" />
      <main className="hovedinnhold">
        <section className="profiler" aria-labelledby="profiler-tittel">
          <h2 id="profiler-tittel" className="seksjon-tittel">Gruppemedlemmer</h2>
          <ProfilArdit />
          <ProfilSamatar />
          <ProfilAdrian />
        </section>
        <Arbeidskrav liste={arbeidskrav} laster={laster} feil={feil} />
      </main>
      <Footer />
    </>
  )

    export default App
  
}
