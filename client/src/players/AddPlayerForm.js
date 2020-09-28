import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddPlayerForm = ({ props }) => {
  const [firstName, setFirstName] = useState('');
  let onFirstNameChange = (id) => {
    setFirstName(id);
  };
  const [lastName, setLastName] = useState('');
  let onLastNameChange = (id) => {
    setLastName(id);
  };
  const [phoneNumber, setPhoneNumber] = useState('');
  let onPhoneNumberChange = (id) => {
    setPhoneNumber(id);
  };
  const [email, setEmail] = useState('');
  let onEmailChange = (id) => {
    setEmail(id);
  };

  useEffect(
    (handleSubmitPlayerForm = (event) => {
      event.preventDefault();
      axios
        .post('http://localhost:5000/players', {})
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }),
    [firstName, lastName, phoneNumber, email]
  );

  return (
    <div className="container-fluid">
      <h5>Player Form placeholder</h5>
      <form className="col s12" onSubmit={handleSubmitPlayerForm}>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(event) => onFirstNameChange(event.target.value)}
            />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="input-field col s6">
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(event) => onLastNameChange(event.target.value)}
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="phoneNumber"
              type="text"
              value={phoneNumber}
              onChange={(event) => onPhoneNumberChange(event.target.value)}
            />
            <label htmlFor="phoneNumber">Phone</label>
          </div>
          <div className="input-field col s6">
            <input
              id="email"
              type="text"
              value={email}
              onChange={(event) => onEmailChange(event.target.value)}
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
