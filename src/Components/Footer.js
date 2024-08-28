import "./FooterStyles.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>İletişim Bilgileri</h2>
          <p>Adres: 1234 Sokak, Simav/KUTAHYA</p>
          <p>Telefon: 555-555-5555</p>
          <p>E-posta: info@gmail.com</p>
        </div>
        <div className="footer-section">
          <h2>Hızlı Linkler</h2>
          <ul>
            <li>
              <a href="/">Anasayfa</a>
            </li>
            <li>
              <a href="/hakkimizda">Hakkımızda</a>
            </li>
            <li>
              <a href="/urunler">Ürünler</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Sosyal Medya</h2>
          <ul className="social-media-links">
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="son">2024 X Tüm hakları saklıdır.</p>
    </footer>
  );
}

export default Footer;
