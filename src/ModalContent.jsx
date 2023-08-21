import React from 'react'
import { useDispatch } from "react-redux"
import { openModal } from './modalSlice'

const ModalContent = () => {

    const dispatch = useDispatch()

    return (
        <button onClick={() => dispatch(openModal())}>Open Modal</button>
    )
}

export default ModalContent
