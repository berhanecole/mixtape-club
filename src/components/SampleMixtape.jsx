import React from "react";
import { Link } from "react-router-dom";

const SampleMixtape = (props) => {
  const { searchResults, userPlaylists, userName, tapeRefresh } = props;

  return (
    <ul className="list-group col-12 mx-auto my-mixtape-list">
      <li className="list-group-item active  border border-info bg-info">
        Suggested Mixtapes:
      </li>
      {userPlaylists.map((playlist, i) => (
        <li
          className="list-group-item"
          key={i}
          id={playlist._id}
          onClick={tapeRefresh}
        >
          <Link
            to={`/mixtape-player?id=${playlist._id}`}
            className="navbar-brand  user-mixes"
          >
            {playlist.tapeLabel} {'by Mixtape Club'}
          </Link>
        </li>
        ))}
    </ul>
  );
};

export default SampleMixtape;