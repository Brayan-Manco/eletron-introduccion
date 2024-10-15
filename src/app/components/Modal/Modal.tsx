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
                padding:  '20px',
                display:  'flex',
                justifyContent: 'right'
            }}>
                <Button 
                    name='X' 
                    onClick={onRequestClose}
                    variant='transparent'
                />
            </div>
            <div style={{ paddingLeft:  "30px", paddingRight: '30px', paddingBottom: '20px' }}>

                {children}
            </div>
        </Modal>
    )
}
