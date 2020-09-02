import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import 'tachyons';

import CardList from "./component/card-list/card-list.component";
import {robotsData} from './robots';
import SearchBox from './component/search-box/search-box.component';
import Scroll from './component/scroll/scroll.component';
import {setSearchField, requestRobots} from './action';

const mapStateToProps = (state) => ({
  searchField: state.searchRobots.searchField,
  robot: state.requestRobots.robot,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots()) // same as requestRobots(dispatch)
});

const App = (props) => {
  const [robots,setRobots] = React.useState({robotsData});
  const {searchField, onSearchChange} = props;
  const filterRobots = robotsData.filter((robot) => (robot.name.toLowerCase().includes(searchField.toLocaleLowerCase())));
  return (
    <div className="App tc">
      <h1 className="f1">RoboFrineds</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
          <CardList robots={filterRobots} />
      </Scroll>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
