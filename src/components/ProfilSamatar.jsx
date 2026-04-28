


function ProfilSamatar(){
    const navn = "Samatar"
    const epost = "samatara@hiof.no"
    const studie= "informasjonssystemeer"
    const bilde= " "
    return(
        <article className="profil-samatar">
        <header className="samtar-topp"/>
        <img src="public" alt="{portrett av ${navn}" className="samatar-bilde" />
        <section>
        <h3 className="samatar-navn">{navn}</h3>
        <dl className="detaljer">
            <dt>Studie</dt>
            <dd>{studie}</dd>
            <dt>Kontakt</dt>
            <dd>
                <a href={`mailto:${epost}`} className="epost">{epost}</a>
            </dd>
        </dl>
        </section>
        </article>
   )

       
}
 export default ProfilSamatar