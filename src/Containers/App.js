import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import Aux from '../Hoc/Aux'
import withClass from '../Hoc/withClass';

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
      showPersons : false,
      showCockpit : true,
      counter : 0
    }
    console.log('App [constrctor]')
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
    console.log('App [getDerivedStateFromProps]',props);
    return state;
  }
  
  // componentWillMount(){
  //   console.log('App [componentWillMount]')
  // }

  componentDidMount(){
    console.log('App [componentDidMount]')
  }

  componentWillUnmount(){
    console.log('App [componentWillUnmount]')
  }

  shouldComponentUpdate(){
    console.log('App [shouldComponentUpdate]')
    return true;
  }
  componentDidUpdate(){
    console.log('App [componentDidUpdate]')
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

    //WRONG WAY OF SETTING STATE AS MAY NOT BE IN SYNC WITH PREV STATE
    // this.setState({
    //   persons : persons,
    //   counter : this.props.counter+1
    // })

    //RIGHT WAY TO UPDATE STATE
    this.setState((prevState, props) => {
      return {
        persons : persons,
        counter : prevState.counter+1
      }
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    })
  }

  cockpitHandler = () => {
    this.setState({showCockpit:false})
  }


  render() {
    console.log('App [render]')

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
        // <div className={classes.App}>
          //<WithClass classes={classes.App}>
          <Aux>
          <button onClick={this.cockpitHandler}>Remove Cockpit</button> 
          {this.state.showCockpit ? 
          <Cockpit title={this.props.appTitle} personsLength={this.state.persons.length} showPersons={this.state.showPersons} toggle={this.togglePersonsHandler}/>
            : null}
          {persons}
          </Aux>
          //</WithClass>
        //</div>
      // </StyleRoot>
    );
  }     
}

// export default Radium(App);
export default withClass(App, classes.App);
