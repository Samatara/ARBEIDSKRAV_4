
import '../styles/profil-samatar.css'

function ProfilSamatar(){
    const navn = "Samatar"
    const epost = "samatara@hiof.no"
    const studie= "informasjonssystemeer"
    const bilde= "/sama.png "
    return(
        <article className="profil-samatar">
        <img src={bilde} alt={`portrett av ${navn}`} className="samatar-bilde"/>
        <section className='samatar-info '>
        <h3 className="samatar-navn ">{navn}</h3>
        <dl className="samatar-detaljer">
            <dt>Studie</dt>
            <dd>{studie}</dd>
            <dt>Kontakt</dt>
            <dd>
                <a href={`mailto:${epost}`} className="samatar-epost">{epost}</a>
            </dd>
        </dl>
        </section>
        </article>
   )

       
}
 export default ProfilSamatar