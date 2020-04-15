import React from "react";

const ArtistList = (props) => {
  const artistTable = props.artistData.map((artist) => (
    <tr key={`ART_${artist.id}`}>
      <td>{artist.id}</td>
      <td>{artist.artistName}</td>
      <td>{artist.nation}</td>
      <td>
        <button onClick={() => props.editArtist(artist)}>Edit</button>
      </td>
      <td>
        <button onClick={() => props.deleteArtist(artist.id)}>Delete</button>
      </td>
    </tr>
  ));
  return (
    <div className="container-inner">
      <h2>Artist List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Nationality</th>
          </tr>
        </thead>
        <tbody>{artistTable}</tbody>
      </table>
    </div>
  );
};

export default ArtistList;
