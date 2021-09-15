import { Component } from 'react'
import './App.css';
import axios from 'axios';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  async componentDidMount() {
    let users = await axios.get('https://jsonplaceholder.typicode.com/users')
    this.setState({ monsters: users.data })
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value }, () => {
      console.log(this.state);
    })
  }
  render() {
    const { monsters, searchField } = this.state
    const filterdMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    return (
      <div className="App">
        <h1>Monsters lodoex</h1>
        <SearchBox placeholder="search monstars" changeHandler={this.handleChange} />
        <CardList monsters={filterdMonsters}></CardList>

      </div>
    );
  }
}

export default App;
