import { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// https://react-bootstrap.netlify.app/docs/components/modal/

interface MODALDATA {
    isShow?: boolean;
    title: string;
    message: string;
    onClose: any;
    onSubmit: any;
}

export const ModalExample: FC<MODALDATA> = ({ title, message, onClose, onSubmit }) => {
    const [show, setShow] = useState(false);
    const handleSubmit = () => {
        onClose();
        setShow(false);
    }
    const handleClose = () => {
        onSubmit();
        setShow(false);
    }
    return (
        <>
        <Button variant="primary" onClick={() => setShow(true)}>
            Launch demo modal
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export const Modals = {
    ModalExample,
};