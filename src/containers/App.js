import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import { setSearchField } from '../redux/searchReducer';
import { requestRobots } from '../redux/requestReducer';
import 'tachyons';

const App = () => {
  const dispatch = useDispatch();
  const robots = useSelector((state) => state.requestRobotsReducer.robots);
  const sBox = useSelector((state) => state.searchRobots);

  useEffect(() => {
    dispatch(requestRobots());
  }, []);
  /* eslint-disable-next-line max-len */
  const filteredRobots = robots.filter((robot) => robot.name.toLowerCase().includes(sBox.searchField.toLowerCase()));
  return robots.isPending
    ? <h1>Loading</h1>
    : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={(e) => dispatch(setSearchField(e.target.value))} />
        <CardList robots={filteredRobots} />
      </div>
    );
};

export default App;
