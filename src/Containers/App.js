import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit'

// import Radium, {StyleRoot} from 'radium';

class App extends Component {
  //ES6 way
  constructor(props){
    super(props);
    this.state = {
      persons : [
        { id : '0', name : "Alka", age : 23 },
        { id : '1', name : "Anurag", age : 20 },
        { id : '2', name : "Ankit", age : 20 }
      ],
      showPersons : true
    }
  }
  //ES7 way
  // state = {
  //   persons : [
  //     { id : '0', name : "Alka", age : 23 },
  //     { id : '1', name : "Anurag", age : 20 },
  //     { id : '2', name : "Ankit", age : 20 }
  //   ],
  //   showPersons : true
  // }

  static getDerivedStateFromProps(props, state){
    return state;
  }
  
  componentWillMount(){

  }

  componentDidMount(){
    
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id===id
    });

    const person = {...this.state.persons[personIndex]};
    //const person = Object.assign({},this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons : persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    })
  }


  render() {

    //PREFERRED WAY OF OUTPUTTING CONDITIONALLY is using if more than ternary
    let persons = null;

    if(this.state.showPersons){ 
      persons = <Persons 
          persons={this.state.persons} 
          change={this.nameChangeHandler} 
          delete={this.deletePersonHandler}/>
    }

    return (
      // <StyleRoot>
        <div className={classes.App}>
          <Cockpit title={this.props.appTitle} persons={this.state.persons} showPersons={this.state.showPersons} toggle={this.togglePersonsHandler}/>
          {persons}
        </div>
      // </StyleRoot>
    );
  }     
}

// export default Radium(App);
export default App;
