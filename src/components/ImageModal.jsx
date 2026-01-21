import { useState } from 'react';
import './ImageModal.css';

export default function ImageModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  const openModal = (src) => {
    setImageSrc(src);
    setIsOpen(true);
    setIsClosing(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      document.body.style.overflow = 'unset';
    }, 200);
  };

  return {
    isOpen,
    imageSrc,
    openModal,
    closeModal,
    Modal: () => (
      isOpen && (
        <div className={`image-modal-overlay ${isClosing ? 'closing' : ''}`} onClick={closeModal}>
          <div className={`image-modal-content ${isClosing ? 'closing' : ''}`} onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={closeModal}>
              ✕
            </button>
            <img src={imageSrc} alt="Enlarged view" className={`image-modal-image ${isClosing ? 'closing' : ''}`} />
          </div>
        </div>
      )
    )
  };
}
