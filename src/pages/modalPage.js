import Modal from '../components/modal';
import Button from '../components/Button';
import { useState } from 'react';

function ModalPage() {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const actionBar = (
    <div>
      <Button
        onClick={handleClose}
        primary
        className="modal-action btn btn-primary mr-2"
      >
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {openModal && modal}
    </div>
  );
}

export default ModalPage;
