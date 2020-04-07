import React from 'react';
import '../../scss/components/_workOrderTable.scss';

export default function WorkOrderModal(props) {
  const { id, title, description } = props.item;

  const hideModal = () => {
    const modal = document.getElementById(id);
    modal.style.display = 'none';
  };

  return (
    <div className="modal" key={id} id={id}>
      <section className="modal-content">
        <h3>{title}</h3>
        <h6>{description}</h6>
        <button
          className="close-modal-btn"
          type="button"
          onClick={() => hideModal()}
        >
          X
        </button>
      </section>
    </div>
  );
}
