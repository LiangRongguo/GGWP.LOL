import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import CachedIcon from "@material-ui/icons/Cached";

import "./summoner-specific-page.styles.scss";

const SummonerSpecificlPage = ({ currentUser }) => {
  // assume that We have signed in and a summoner_name is passed in
  let { summoner_name } = useParams();

  return !currentUser ? (
    <CachedIcon />
  ) : (
    <div>
      You are signed in as {currentUser.displayName}. Your summoner ID is{" "}
      {summoner_name}.
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps)(SummonerSpecificlPage);
