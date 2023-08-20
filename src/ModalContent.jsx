import React from 'react'

import { useModal } from './ModalContext'

const ModalContent = () => {
    const { openModal } = useModal();
    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
        </div>
    )
}

export default ModalContent