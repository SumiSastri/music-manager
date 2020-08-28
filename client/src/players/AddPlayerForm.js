import React from "react";

const AddPlayerForm = () => {
  return (
    <div className="container-fluid">
      <h5>Player Form placeholder</h5>
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input id="firstName" type="text" />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="input-field col s6">
            <input id="lastName" type="text" />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="phone" type="text" />
            <label htmlFor="phone">Phone</label>
          </div>
          <div className="input-field col s6">
            <input id="email" type="text" />
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
