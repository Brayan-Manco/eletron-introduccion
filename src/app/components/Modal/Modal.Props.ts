export interface ModalProps {
    onAfterOpen?: () => void;
    onRequestClose: () => void,
    isOpen: boolean;
    style? : {
        width: string, 
        height: string, 
        backgroundColor: string,
        top: string,
        left: string,
        right: string,
        bottom: string,
        marginRight: string,
        transform: string,
        boxShadow: string,
    },
    children: React.ReactNode,
}