import React from "react"
import { Modal, Button } from "react-bootstrap"

const ConfirmationModal = (props) => {
    return (
        <Modal
          {...props}
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
              {props.question}
            </p>
            <Button variant="danger" onClick={()=>{props.closeFeedback()}}>Submit</Button>
          </Modal.Body>
        </Modal>
      );
}


export default ConfirmationModal;