import React, { useState, useEffect, createContext } from 'react';

export const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState({});

  return <ModalContext.Provider value={{ modalIsOpen, setModalIsOpen, modalProduct, setModalProduct }} >{children}</ModalContext.Provider>
}

export default ModalContextProvider;