import '../styles/profil-ardit.css'
function ProfilArdit() {
    const navn = "Ardit Ramadani"
    const epost = "arditr@hiof.no"
    const studie = "bachelor i informasjonsystemer"
    const bilde = '/uin bilde .png'
  
   return( 

    <article className="profil-ardit">
        <figure className="ardit-bilde-ramme">
            <img src={bilde} alt={`portrett av ${navn}`} className="ardit-bilde"/>
            
        </figure>
        <section className="ardit-info">
            <h3 className="ardit-navn">{navn}</h3>
            <p className="ardit-studie">{studie}</p>
            <a href={`milto:${epost}`} className="ardit-epost">{epost}</a>
        </section>
    </article>
   )
}

export default ProfilArdit