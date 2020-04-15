import React, { Component } from "react";
import "./App.css";

import ArtistList from "./ArtistList";
import AddArtistPanel from "./AddArtistPanel";
import EditArtistPanel from "./EditArtistPanel";

class App extends Component {
  state = {
    editPanelOpen: false,
    runningIdValue: 5,
    tempId: null,
    tempArtistName: "",
    tempNation: "",
    artistData: [
      { id: 1, artistName: "Vincent Van Gogh", nation: "Netherlands" },
      { id: 2, artistName: "Diego Velasquez", nation: "Spain" },
      { id: 3, artistName: "George Grosz", nation: "Germany" },
      { id: 4, artistName: "Michaelangelo Buonarotti", nation: "Italy" },
    ],
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleEditPanel = () => {
    this.setState({
      editPanelOpen: false,
      tempId: null,
      tempArtistName: "",
      tempNation: "",
    });
  };

  addArtist = (e) => {
    e.preventDefault();
    console.log(`addArtist...`);
    const newArtist = {
      id: this.state.runningIdValue,
      artistName: this.state.tempArtistName,
      nation: this.state.tempNation,
    };
    console.log(newArtist);

    this.setState({
      runningIdValue: this.state.runningIdValue + 1,
      tempId: null,
      tempArtistName: "",
      tempNation: "",
      artistData: [...this.state.artistData, newArtist],
    });
  };

  editArtist = (artist) => {
    this.setState({
      editPanelOpen: true,
      tempId: artist.id,
      tempArtistName: artist.artistName,
      tempNation: artist.nation,
    });
    console.log(`editArtist...`);
  };

  updateArtist = (e) => {
    e.preventDefault();
    console.log(`updateArtist...`);
    const updatedArtist = {
      id: this.state.tempId,
      artistName: this.state.tempArtistName,
      nation: this.state.tempNation,
    };
    const updatedArtistData = this.state.artistData.map((artist) =>
      artist.id === updatedArtist.id ? updatedArtist : artist
    );
    this.setState({
      editPanelOpen: false,
      tempId: null,
      tempArtistName: "",
      tempNation: "",
      artistData: updatedArtistData,
    });
  };

  deleteArtist = (id) => {
    this.setState({
      artistData: this.state.artistData.filter((artist) => artist.id !== id),
    });
  };

  render() {
    return (
      <div className="container-outer">
        <ArtistList
          artistData={this.state.artistData}
          editArtist={this.editArtist}
          deleteArtist={this.deleteArtist}
        />
        {this.state.editPanelOpen ? (
          <EditArtistPanel
            tempArtistName={this.state.tempArtistName}
            tempNation={this.state.tempNation}
            handleInputChange={this.handleInputChange}
            updateArtist={this.updateArtist}
            toggleEditPanel={this.toggleEditPanel}
          />
        ) : (
          <AddArtistPanel
            tempArtistName={this.state.tempArtistName}
            tempNation={this.state.tempNation}
            handleInputChange={this.handleInputChange}
            addArtist={this.addArtist}
          />
        )}
      </div>
    );
  }
}

export default App;
