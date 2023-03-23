import React, { useState } from "react";
import "../../../src/stylesheets/TakeOrder.css";
import Modal from "react-modal";

function NavBar({ changeUser }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function logOut() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
    changeUser("", "");
  }

  function LogoutModal() {
    return (
      <div>
        <h2>¿Seguro que deseas cerrar sesión?</h2>
        <button onClick={closeModal}>Cancelar</button>
        <button onClick={() => changeUser("", "")}>Cerrar sesión</button>
      </div>
    );
  }

  return (
    <nav className="superiorNav">
      <img
        className="logo-logout"
        src={require("../../../src/images/logout.png")}
        alt="Logout"
        onClick={logOut}
      />
      <button className="logout-button" onClick={logOut}>
        Logout
      </button>
      <img
        className="logo-waiter-layout"
        src={require("../../../src/images/queen.png")}
        alt="Logo"
      />
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <LogoutModal />
      </Modal>
    </nav>
  );
}

export default NavBar;





