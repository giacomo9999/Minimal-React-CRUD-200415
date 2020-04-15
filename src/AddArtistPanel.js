import React from "react";

const AddArtist = (props) => {
  return (
    <div className="container-inner">
      <h2>Add Artist</h2>
      <form className="h-form" onSubmit={props.addArtist}>
        <label className="h-label">Name</label>
        <input
          className="h-input"
          type="text"
          name="tempArtistName"
          value={props.tempArtistName}
          onChange={props.handleInputChange}
        />
        <br/>
        <label className="h-label">Nation</label>
        <input
          className="h-input"
          type="text"
          name="tempNation"
          value={props.tempNation}
          onChange={props.handleInputChange}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddArtist;
