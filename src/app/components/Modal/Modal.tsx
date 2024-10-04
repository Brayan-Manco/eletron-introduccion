import React from 'react';
import Modal from 'react-modal'
import { modalStyle } from './Modal.style';
import { Button } from '../Button';

import './style.css';

interface ModalProps {
    title: string,
    onAfterOpen?: () => void;
    onRequestClose: () => void,
    isOpen: boolean;
    style : {
        top: string,
        left: string,
        right: string,
        bottom: string,
        marginRight: string,
        transform: string,
    },
    children: React.ReactNode,
}

Modal.setAppElement('#modal');

export const ModalUi = ({
    title,
    style = modalStyle, 
    isOpen,
    onAfterOpen,
    onRequestClose,
    children
}: ModalProps) => {

    const customStyles = {
        content: {
            top: style.top,
            left: style.left,
            right: style.right,
            bottom: style.bottom,
            marginRight: style.marginRight,
            transform: style.transform,
        },
    };

    return (
        <Modal
            isOpen={isOpen}
            onAfterOpen={onAfterOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            className='modal'
            
        >
            <div>
                <h1>{title}</h1>
                <Button name='X' onClick={onRequestClose}/>
            </div>
            <div>
                {children}
            </div>
        </Modal>
    )
}
