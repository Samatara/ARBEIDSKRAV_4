import'../styles/footer.css'

function Footer() {
  return (
    <footer className="side-footer">
      <p>© {new Date().getFullYear()} · Arbeidskrav 4 </p>
      <p className="footer-liten">Bygget med React, Vite og Sanity</p>
    </footer>
  )
}

export default Footer