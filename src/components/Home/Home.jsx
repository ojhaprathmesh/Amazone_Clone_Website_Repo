import React, { useState } from "react";
import NavbarHigher from "../NavbarHigher/NavbarHigher";
import NavbarLower from "../NavbarLower/NavbarLower";
import PersonalDetailsModal from "../Modals/PersonalDetailsModal";

const Home = () => {
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDetailChange = (detail) => {
    setSelectedDetail(detail);
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <NavbarHigher
        selectedDetail={selectedDetail}
        onDetailChange={handleDetailChange}
        onModalToggle={handleModalToggle}
      />
      <NavbarLower />
      {isModalOpen && (
        <PersonalDetailsModal
          selectedDetail={selectedDetail}
          onDetailChange={handleDetailChange}
          onModalToggle={handleModalToggle}
        />
      )}
    </div>
  );
};

export default Home;
