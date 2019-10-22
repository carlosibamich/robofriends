import React from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css';

const mapStateToProps = state => {
  return {
    searchTerm: state.searchRobots.searchTerm,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    err: state.requestRobots.err
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSearchChange: e => dispatch(setSearchField(e.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends React.Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }
  render() {
    const { searchTerm, handleSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    return isPending ? <h1 className="tc">Loading</h1> :
    (
      <div className="tc">
        <h1 style={{fontSize: 60}}>RoboFriends</h1>
        <SearchBox onSearchChange={handleSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots}/>
            </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
