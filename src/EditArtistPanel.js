import React from "react";

const EditArtistPanel = (props) => {
  return (
    <div className="container-inner">
      <h2>Edit Artist</h2>
      <form className="h-form" onSubmit={props.updateArtist}>
        <label className="h-label">Name</label>
        <input
          className="h-input"
          type="text"
          name="tempArtistName"
          value={props.tempArtistName}
          onChange={props.handleInputChange}
        />
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
        <button onClick={() => props.toggleEditPanel}>Cancel</button>
     
      </form>
    </div>
  );
};

export default EditArtistPanel;
