function Footer() {
  return (
    <footer className="side-footer">
      <p>© {new Date().getFullYear()} · Arbeidskrav 4 · Nord universitet</p>
      <p className="footer-liten">Bygget med React, Vite og Sanity</p>
    </footer>
  )
}

export default Footer