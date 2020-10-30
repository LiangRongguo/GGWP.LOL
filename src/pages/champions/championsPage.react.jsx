import React, { Component } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import ChampionsGrid from "../../components/champions-grid/championsGrid.react";
import { champions_data, tabIndexToCategory } from "../../components/commons";

import { getFreeRotationChamp } from "../../firebase/firebase.utils";

import "./championsPage.styles.scss";

function TabPanel(props) {
  const { children, selectedIndex, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={selectedIndex !== index}
      id={`champion-tabpanel-${index}`}
      aria-labelledby={`champion-tab-${index}`}
      {...other}
    >
      {selectedIndex === index && <div>{children}</div>}
    </div>
  );
}

class championsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0, selected_champions: champions_data };
  }

  _handleSeletecTabChange = async (event, newValue) => {
    // fetch free rotation champions
    const free_rotation_champ = await getFreeRotationChamp();

    // filter champions by selected tab
    const selected_champions =
      newValue === 0
        ? champions_data
        : newValue === 6
        ? champions_data.filter(
            (champion) => free_rotation_champ.indexOf(champion.id) !== -1
          )
        : champions_data.filter(
            (champion) =>
              champion.position.indexOf(tabIndexToCategory[newValue]) !== -1
          );

    this.setState({ value: newValue, selected_champions });
  };

  render() {
    return (
      <div className="ChampionsTab">
        <Tabs
          value={this.state.value}
          onChange={(event, newValue) =>
            this._handleSeletecTabChange(event, newValue)
          }
          aria-label="champions tabs"
          indicatorColor="primary"
        >
          <Tab label={tabIndexToCategory[0]} className="PositionTab" />
          <Tab label={tabIndexToCategory[1]} className="PositionTab" />
          <Tab label={tabIndexToCategory[2]} className="PositionTab" />
          <Tab label={tabIndexToCategory[3]} className="PositionTab" />
          <Tab label={tabIndexToCategory[4]} className="PositionTab" />
          <Tab label={tabIndexToCategory[5]} className="PositionTab" />
          <Tab label={tabIndexToCategory[6]} className="FreeRotationTab" />
        </Tabs>
        <TabPanel selectedIndex={this.state.value} index={0}>
          <ChampionsGrid
            champions={this.state.selected_champions}
          ></ChampionsGrid>
        </TabPanel>
        <TabPanel selectedIndex={this.state.value} index={1}>
          <ChampionsGrid
            champions={this.state.selected_champions}
          ></ChampionsGrid>
        </TabPanel>
        <TabPanel selectedIndex={this.state.value} index={2}>
          <ChampionsGrid
            champions={this.state.selected_champions}
          ></ChampionsGrid>
        </TabPanel>
        <TabPanel selectedIndex={this.state.value} index={3}>
          <ChampionsGrid
            champions={this.state.selected_champions}
          ></ChampionsGrid>
        </TabPanel>
        <TabPanel selectedIndex={this.state.value} index={4}>
          <ChampionsGrid
            champions={this.state.selected_champions}
          ></ChampionsGrid>
        </TabPanel>
        <TabPanel selectedIndex={this.state.value} index={5}>
          <ChampionsGrid
            champions={this.state.selected_champions}
          ></ChampionsGrid>
        </TabPanel>
        <TabPanel selectedIndex={this.state.value} index={6}>
          <ChampionsGrid
            champions={this.state.selected_champions}
          ></ChampionsGrid>
        </TabPanel>
      </div>
    );
  }
}

export default championsPage;
