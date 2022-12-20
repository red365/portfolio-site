import React, { useContext } from 'react';
import { ModalContext } from '../providers/ModalContextProvider.jsx';

const useModal = () => useContext(ModalContext);

export default useModal;