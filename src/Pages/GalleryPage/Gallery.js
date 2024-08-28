import { useState } from "react";
import "./GalleryStyles.css";

function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
    document.body.style.overflow = "hidden"; // Scroll'u kapat
  };

  const closeModal = () => {
    setSelectedImage("");
    setModalOpen(false);
    document.body.style.overflow = "auto"; // Scroll'u aç
  };

  const images = ["/images/urunler/1.jpg", "/images/urunler/2.jpg", "/images/urunler/3.jpg", "/images/urunler/4.jpg", "/images/urunler/5.jpg", "/images/urunler/6.jpg", "/images/urunler/7.jpg", "/images/urunler/kereste.jpg", "/images/urunler/metalart.jpg", "/images/urunler/prefabrik.jpg"];
  return (
    <>
      <div className="gallery">
        <h1>Galeri</h1>
        <div className="image-container">
          {images.map((image, idx) => (
            <div key={idx} className="image-wrapper">
              <img src={image} alt={`${idx}`} onClick={() => openModal(image)} />
            </div>
          ))}
        </div>
      </div>
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img src={selectedImage} alt="Selected" />
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
