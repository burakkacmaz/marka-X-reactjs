import { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const [index, setIndex] = useState(0);
  const images = ["/images/sldr.jpg", "/images/metalart.jpg"];
  const intervalTime = 10000; // 10 saniye

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [images.length, intervalTime]);

  return (
    <>
      <div className="menu-info">
        <div>
          {images.map((image, idx) => (
            <img key={idx} className={`background-image ${index === idx ? "active" : ""}`} src={image} alt="MetalArtResim" />
          ))}
        </div>

        <div className="menu-yazi-container">
          <div className={`menu-yazi`}>
            <h1>
              <span className="logoyazi1">MA</span>
              <span className="logoyazi2">RKA</span>
              <span className="logoyazi3">ADI</span>
            </h1>
            <p>
              Metal Art, Kereste ve Prefabrik üzerine çalışmalar yapıyoruz.
              <br />
              <br />
              Aliquip do id minim quis deserunt velit aliquip enim dolore non. Eu aliquip duis excepteur ullamco quis est pariatur pariatur enim. Reprehenderit magna deserunt culpa aute qui tempor irure Lorem et reprehenderit. Consectetur ullamco laboris et magna nostrud esse adipisicing.
            </p>
            <a href="#urunler" className="urunler-button" id="urunler">
              Ürünlerimiz
            </a>
          </div>
        </div>
      </div>

      <div className="urun-container">
        <h1>Ürünlerimiz</h1>
        <div className="urun metalart">
          <img className="urun-img" src="/images/urunler/metalart.jpg" alt="metalart" />
          <div className="urun-bilgi">
            <h2>
              Metal <span>Art</span>
            </h2>
            <p>Bu ürün metal malzemeden yapılmıştır. Incididunt adipisicing deserunt amet occaecat magna ex pariatur excepteur ad. Tempor Lorem aute proident deserunt culpa nulla non velit mollit.</p>
          </div>
        </div>
        <div className="urun kereste">
          <div className="urun-bilgi">
            <h2>
              Ker<span>este</span>
            </h2>
            <p>Bu ürün doğal ahşap malzemeden yapılmıştır. Nostrud incididunt incididunt cillum commodo magna commodo nisi ad adipisicing nostrud veniam aliquip cillum. Incididunt nulla in et anim ea nostrud laboris deserunt reprehenderit deserunt do. Non excepteur mollit est non qui. Sunt nostrud duis sint dolor cillum aliqua. Mollit mollit culpa dolor officia consequat veniam consectetur ex. Minim mollit laborum consectetur incididunt exercitation sint aliqua fugiat do ipsum elit et anim. Tempor pariatur fugiat qui officia magna dolor laborum aute et.</p>
          </div>
          <img className="urun-img" src="/images/urunler/kereste.jpg" alt="kereste" />
        </div>
        <div className="urun prefabrik">
          <img className="urun-img" src="/images/urunler/prefabrik.jpg" alt="prefabrik" />
          <div className="urun-bilgi">
            <h2>
              Pre<span>fabrik</span>
            </h2>
            <p>Bu ürün fabrikada hazırlanmıştır ve montajı kolaydır. Ex velit quis reprehenderit ex tempor dolor et ut mollit.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
