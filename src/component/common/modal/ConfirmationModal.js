import React from "react"
import { Modal, Button } from "react-bootstrap"

const ConfirmationModal = (props) => {
    const {show, onHide, question, handleCloseFeedback} = props;
    return (
        <Modal
          show={show}
          onHide={onHide}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Confirmation
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="text-danger">
              {question}
            </p>
            <Button variant="danger" onClick={handleCloseFeedback}>Submit</Button>
          </Modal.Body>
        </Modal>
      );
}


export default ConfirmationModal;