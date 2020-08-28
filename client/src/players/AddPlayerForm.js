import React, { useState } from "react";
import axios from "axios";

const AddPlayerForm = ({ props }) => {
  const [text, setText] = useState("");
  let onInputChange = (id) => {
    setText(id);
  };

  const handleSubmitPlayerForm = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/players", {
        firstName: props.firstName.value,
        lastName: props.lastName.value,
        phone: props.phone.value,
        email: props.email.value,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container-fluid">
      <h5>Player Form placeholder</h5>
      <form className="col s12" onSubmit={handleSubmitPlayerForm}>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="firstName"
              type="text"
              value={text}
              onChange={(event) => onInputChange(event.target.value)}
            />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="input-field col s6">
            <input
              id="lastName"
              type="text"
              value={text}
              onChange={(event) => onInputChange(event.target.value)}
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="phone"
              type="text"
              value={text}
              onChange={(event) => onInputChange(event.target.value)}
            />
            <label htmlFor="phone">Phone</label>
          </div>
          <div className="input-field col s6">
            <input
              id="email"
              type="text"
              value={text}
              onChange={(event) => onInputChange(event.target.value)}
            />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Add player
        </button>
      </form>
    </div>
  );
};
export default AddPlayerForm;
