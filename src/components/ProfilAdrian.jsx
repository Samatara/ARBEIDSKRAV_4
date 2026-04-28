import '../styles/profil-adrian.css'

function ProfilAdrian() {
  const navn = 'Adrian Dabrowski'
  const epost = 'adrian@student.nord.no'
  const studie = 'Bachelor i informasjonssystemer'
  const bilde = '/adrianprofil.jpg'

  return (
    <article className="profil-adrian">
      <figure className="adrian-bilde-wrapper">
        <img 
          src={bilde} 
          alt={`Portrett av ${navn}`} 
          className="adrian-bilde" 
        />
      </figure>

      <section className="adrian-info">
        <h3 className="adrian-navn">{navn}</h3>
        <p className="adrian-studie">{studie}</p>

        <a 
          href={`mailto:${epost}`} 
          className="adrian-epost-knapp"
        >
          adrianda@hiof.no
        </a>
      </section>
    </article>
  )
}

export default ProfilAdrian