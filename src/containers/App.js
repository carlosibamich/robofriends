import React from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchTerm: ''
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({ robots: users }));
  }

  handleSearchChange(e) {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { robots, searchTerm } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    return !robots.length ? <h1 className="tc">Loading</h1> :
    (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox onSearchChange={this.handleSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots}/>
        </Scroll>
      </div>
    )
  }
}

export default App;
