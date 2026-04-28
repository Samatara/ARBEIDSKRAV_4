


function Header({gruppenummer}){ 
    return (
        <header className="side-header">
            <p className="kurs-merkelapp">UIN - Utvikling av intraktive nettsteder</p>
            <h1 className="gruppe-tittel">
                gruppe <span className="gruppw-nummer">{gruppenummer}</span>
            </h1>
            <p className="undertittel"> arbeidskarv 4</p>
        </header>
    )
}
export default Header