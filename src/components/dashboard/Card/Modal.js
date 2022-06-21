import { Modal, Button } from "react-bootstrap";

function MyVerticallyCenteredModal({label, value, ...props}) {
  return (
    <Modal
      {...props}
      className="custom-modal"
      centered
    >
      <Modal.Header className="custom-modal-header" closeButton>
        {/*<Modal.Title>
        
        </Modal.Title>*/}
      </Modal.Header>
      <Modal.Body>
        <h4 align="center">{label}</h4>
        <p align="center">{value}</p>
      </Modal.Body>
      <Modal.Footer className="custom-modal-footer">
        <Button variant="dark" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
