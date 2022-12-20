import React, { useEffect, useState } from 'react';
import products from '../content/products.js';
import useModal from '../hooks/useModal.jsx';

const getNextIndex = currentIndex => {
  const incrementIndex = currentIndex + 1;
  return incrementIndex % products.length;
}

const Carousel = ({ displayBrowser, carouselImageDuration, imageDuration }) => {
  const { setModalIsOpen, setModalProduct } = useModal();
  const [image, setImage] = useState(`/static/assets/products/${products[0].image}`);
  const [productIndex, setProductIndex] = useState(0);

  function openModal() {
    setModalIsOpen(true);
    setModalProduct(productIndex);
  }

  setTimeout(() => {
    if (displayBrowser) {
      setImage(`/static/assets/products/${products[getNextIndex(productIndex)].image}`);
      setProductIndex(getNextIndex(productIndex));
    }
  }, carouselImageDuration);

  useEffect(() => {
    displayBrowser ? setTimeout(() => {
      document.getElementById(`hero-image`).className = "hero-image animate__animated animate__fadeOut";
    }, imageDuration - 1000) : null
  }, [image]);

  useEffect(() => {
    document.getElementById(`hero-image`).className = "hero-image animate__animated animate__fadeIn"
  }, [image])



  return <img id="hero-image" onClick={() => openModal()} src={image} className="hero-image animate__animated animate__fadeIn" />
}

export default Carousel;