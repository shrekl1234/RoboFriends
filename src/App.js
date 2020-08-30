import React from 'react';
import './App.css';
import 'tachyons';

import CardList from "./component/card-list/card-list.component";
import {robotsData} from './robots';
import SearchBox from './component/search-box/search-box.component';

function App() {
  const [robots,setRobots] = React.useState({robotsData});
  const [searchField, setSearchFeild] = React.useState("");
  const searchChange = (event)=>{setSearchFeild(event.target.value);}
  const filterRobots = robotsData.filter((robot) => (robot.name.toLowerCase().includes(searchField.toLocaleLowerCase())));
  return (
    <div className="App tc">
      <h1>RoboFrineds</h1>
      <SearchBox searchChange={searchChange} />
      <CardList robots={filterRobots} />
    </div>
  );
}

export default App;
