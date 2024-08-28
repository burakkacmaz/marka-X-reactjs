import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { NavbarItems } from "./NavbarItems";

function Navbar(a) {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const handleButtonClick = () => {
    setShowContactInfo(true);
    // document.body.style.overflow = "hidden";
    document.body.classList.add("overlay-open");
  };

  const handleCloseButtonClick = () => {
    setShowContactInfo(false);
    // document.body.style.overflow = "auto";
    document.body.classList.remove("overlay-open");
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      setShowContactInfo(false);
      // document.body.style.overflow = "auto";
      document.body.classList.remove("overlay-open");
    }
  };

  return (
    <>
      <div className="navbar">
        <nav className="navbar-items">
          <h1 className="navbar-logo">MarkaX</h1>
          <ul className="nav-menu">
            {NavbarItems.map((item, index) => {
              if (item.button === "iletisim") {
                return (
                  <li key={index} onClick={handleButtonClick}>
                    <Link className={item.cName} to={item.url}>
                      <i className={item.icon}></i>
                      {item.baslik}
                    </Link>
                  </li>
                );
              } else {
                return (
                  <li key={index}>
                    <Link className={item.cName} to={item.url}>
                      <i className={item.icon}></i>
                      {item.baslik}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
      </div>
      {showContactInfo && (
        <div className="overlay" onClick={handleOverlayClick}>
          <div className="contact-info">
            <h2>İletişim Bilgileri</h2>
            <p>
              <i class="fas fa-phone"></i> Telefon: 555-555-5555
            </p>
            <p>
              <i class="fas fa-envelope"></i> Email: info@gmail.com
            </p>
            <button className="close-button" onClick={handleCloseButtonClick}>
              Kapat
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

export function handleButtonClick() {
  console.log("fawfwa");
}
