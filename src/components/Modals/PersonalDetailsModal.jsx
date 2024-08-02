import React from "react";
import "./PersonalDetailsModal.css";

function PersonalDetailsModal({ details, onClose, onSelectDetail }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>✖</button>
        <h2>Select Personal Details</h2>
        <ul>
          {details.map((detail, index) => (
            <li key={index} onClick={() => onSelectDetail(detail)}>
              <div>{detail.name}</div>
              <div>{detail.city} {detail.pincode}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PersonalDetailsModal;
