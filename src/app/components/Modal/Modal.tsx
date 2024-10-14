import React from 'react';
import Modal from 'react-modal'
import { defaultStyles  } from './Modal.style';
import { Button } from '../Button';
import { ModalProps } from './Modal.Props';

Modal.setAppElement('#modal');

export const ModalUi= ({
    style, 
    isOpen,
    onAfterOpen,
    onRequestClose,
    children
}: ModalProps) => {

    const customStyles = {
        content: {
            ...defaultStyles,
            ...style,
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
            <div style={{
                display: "flex",
                alignItems: "rigth",
                padding:  "10px",

            }}>
                <Button name='X' onClick={onRequestClose}/>
            </div>
            <div style={{ padding:  "30px" }}>
                {children}
            </div>
        </Modal>
    )
}
