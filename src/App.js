import { useState, useEffect } from 'react';
import './App.css';

import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component'


const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);


  useEffect(() =>{
      fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then((users) => setMonsters(users)
        );

  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newfilteredMonsters);
    
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>

      <SearchBox
        className="monsters-search-box"
        placeholder="Search Monsters"
        onChangeHandler={onSearchChange}
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App  extends Component{
//   constructor(){
//     super();
    
//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }
  
//   componentDidMount() {
//    fetch('https://jsonplaceholder.typicode.com/users')
//    .then(response => response.json())
//    .then((users) => this.setState(()=> {
//     return {monsters: users}
//    }
//    ) )

// }

// onSearchChange = (event) => {
//           console.log({startingArray: this.state.monsters })
//            const searchField = event.target.value.toLowerCase();

//            this.setState(() => {
//              return { searchField };
//            });
//  }

// render(){

//   const { monsters, searchField } = this.state;
//   const { onSearchChange} = this;
//   const filteredMonsters = monsters.filter((monster) => {
//    return monster.name.toLowerCase().includes(searchField);
//   });
//    return (
//      <div className="App">
//       <h1 className='app-title'>Monster Rolodex</h1>
//        <SearchBox
//         className='search-box'
//         placeholder='Search Monsters'
//         onChangeHandler={onSearchChange}
//         />
//        <CardList monsters={filteredMonsters}  />
//      </div>
//    );
//   }
// }
export default App;
