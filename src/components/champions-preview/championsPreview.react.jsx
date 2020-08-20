import React from "react";
import { Link } from "react-router-dom";

import { getImageUrl } from "../commons";

import "./championsPreview.styles.scss";

const ChampionsPreview = ({ champion }) => {
  return (
    <>
      <Link className="champion-preview" to={`/champions/${champion.id}`}>
        <img
          src={getImageUrl(champion.id)}
          alt={champion.name}
          width="190"
          height="350"
        />
        <div className="champion-footer">
          <span className="name">{champion.name.toUpperCase()}</span>
        </div>
      </Link>
    </>
  );
};

export default ChampionsPreview;
