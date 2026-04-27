function ProfilAdrian() {
  const navn = 'Adrian'
  const epost = 'adrian@student.nord.no'
  const studie = 'Bachelor i informatikk'
  const bilde = 'https://picsum.photos/seed/adrian/400/400'

  return (
    <article className="profil-adrian">
      <span className="adrian-blob" aria-hidden="true"></span>
      
      <figure className="adrian-bilde-wrapper">
        <img 
          src={bilde} 
          alt={`Portrett av ${navn}`} 
          className="adrian-bilde" 
        />
      </figure>

      <section className="adrian-info">
        <p className="adrian-hilsen">Hei, jeg heter</p>
        <h3 className="adrian-navn">{navn}</h3>
        <p className="adrian-studie">{studie}</p>

        <a 
          href={`mailto:${epost}`} 
          className="adrian-epost-knapp"
        >
          Send meg en e-post →
        </a>
      </section>
    </article>
  )
}

export default ProfilAdrian