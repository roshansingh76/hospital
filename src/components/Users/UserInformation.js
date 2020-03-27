import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const UserInformation = props => {
  const [modalIsOpen, setIsOpen] = React.useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handleInputChange = event => {
    if (event.target.name === "name") setName(event.target.value);
    if (event.target.name === "email") setEmail(event.target.value);
  };
  const handleRadionButton = event => {
    setGender(event.target.value);
  };
  const handleFormSubmit = event => {
    event.preventDefault();
    if (name && email && gender) {
      props.updateUser({
        name,
        email,
        gender,
        token: localStorage.getItem("token")
      });
    }
  };
  const { loader, error, hasErrored } = props;
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <div style={{ maxWidth: "500px", padding: "20px" }}>
        <a className="model-close-cust" onClick={closeModal}>
          <i className="fa fa-times"></i>
        </a>

        <h3>Please share the details</h3>
        {hasErrored && (
          <div class="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <form style={{ padding: "20px" }} onSubmit={handleFormSubmit}>
          <input
            required
            type="text"
            autoComplete="off"
            placeholder="Name"
            className="form-control form-control-l-t"
            name="name"
            style={{ marginBottom: "15px" }}
            value={name}
            onChange={handleInputChange}
          />
          <input
            required
            type="email"
            autoComplete="off"
            placeholder="Email"
            className="form-control form-control-r-t"
            style={{ marginBottom: "15px" }}
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="male"
              checked={gender === "male"}
              onChange={handleRadionButton}
            />
            <label class="form-check-label" for="male">
              Male
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="female"
              checked={gender === "female"}
              onChange={handleRadionButton}
            />
            <label class="form-check-label" for="female">
              Female
            </label>
          </div>
          <button
            type="submit"
            class="btn mob-btn btn-block"
            disabled={loader}
            style={{ marginTop: "15px" }}
          >
            Submit
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default UserInformation;
