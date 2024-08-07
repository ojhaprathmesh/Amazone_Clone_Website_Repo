import React, { useState } from "react";
import NavbarHigher from "../NavbarHigher/NavbarHigher";
import NavbarLower from "../NavbarLower/NavbarLower";
import PersonalDetailsModal from "../Modals/PersonalDetailsModal";
import "./Home.css";

const personalDetails = [
  { name: "Prathmesh", phone: "1234567890", city: "Gurugram", pincode: "122001" },
  { name: "John Doe", phone: "0987654321", city: "Delhi", pincode: "110001" },
];

function Home() {
  const [selectedDetail, setSelectedDetail] = useState(personalDetails.length > 0 ? personalDetails[0] : {});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDetailsClick = () => {
    setIsModalOpen(true);
  };

  const handleSelectDetail = (detail) => {
    setSelectedDetail(detail);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="home-container">
      <NavbarHigher personalDetail={selectedDetail} onDetailsClick={handleDetailsClick} />
      {isModalOpen && (
        <PersonalDetailsModal
          details={personalDetails}
          onClose={handleCloseModal}
          onSelectDetail={handleSelectDetail}
        />
      )}
      <NavbarLower />
    </div>
  );
}

export default Home;
