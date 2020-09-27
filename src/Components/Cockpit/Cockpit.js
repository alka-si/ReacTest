import React from 'react';
// import styled from 'styled-components';
import classes from './Cockpit.css'

// const StyledButton = styled.button`
//   background-color : ${props => props.alt? 'red' : 'green'};
//   font : inherit;
//   border : 1px solid blue;
//   padding : 8px;
//   cursor : pointer;
//   color: white;
//   &:hover {
//     background-color: ${props => props.alt? 'salmon' : 'lightgreen'};
//     color: black;
//   }
// `

const Cockpit = (props) => {

  // const style = {
    //   backgroundColor : "green",
    //   font : "inherit",
    //   border : "1px solid blue",
    //   padding : "8px",
    //   cursor : "pointer",
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // }
  let butnCls = '';
  if(props.showPersons){
    // style.backgroundColor = "red";
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    butnCls = classes.Red;
  }

  let assignedClasses = [];
  if(props.persons.length <= 2){
    assignedClasses.push(classes.red);
  }
  if(props.persons.length <= 1){
    assignedClasses.push(classes.bold);
  }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is working!</p>
            {/* <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button> */}
            {/* <StyledButton alt={props.showPersons} onClick={props.toggle}>Toggle Persons</StyledButton> */}
            <button className={butnCls} onClick={props.toggle}>Toggle Persons</button>
        </div>
    )
}

export default Cockpit;