import React from "react";
import Grid from "@material-ui/core/Grid";

import ChampionsPreview from "../champions-preview/championsPreview.react";

import "./championsGrid.styles.scss";

const ChampionsGrid = ({ champions }) => {
  return (
    <div style={{ padding: 30 }}>
      <Grid container spacing={2} className="ChampionsGrid">
        {champions.map((champion) => (
          <Grid key={champion.id} item xs={2}>
            <ChampionsPreview champion={champion} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ChampionsGrid;
