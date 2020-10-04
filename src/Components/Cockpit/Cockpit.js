import React, { useEffect, useRef, useContext} from 'react';
// import styled from 'styled-components';
import classes from './Cockpit.css'
import AuthContext from '../../Context/auth-context'

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

  const toggleButtonRef = useRef(null)
  // const authContext = useContext(AuthContext)

  useEffect(() => {
    console.log("Cockpit [useEffect]")
    const timer = setTimeout(() => {
      alert("data changed")
    },1000)
    toggleButtonRef.current.click()
    return () => {
      clearTimeout(timer)
      console.log('Cockpit [cleanup useEffect]')
    }
  },[])

  useEffect(() => {
    console.log("Cockpit [2nd useEffect]")  
    return () => {
      console.log('Cockpit [2nd cleanup useEffect]')
    }
  })


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
  if(props.personsLength <= 2){
    assignedClasses.push(classes.red);
  }
  if(props.personsLength <= 1){
    assignedClasses.push(classes.bold);
  }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is working!</p>
            {/* <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button> */}
            {/* <StyledButton alt={props.showPersons} onClick={props.toggle}>Toggle Persons</StyledButton> */}
            <button ref={toggleButtonRef} className={butnCls} onClick={props.toggle}>Toggle Persons</button>
            <AuthContext.Consumer>
              {context => <button onClick={context.login}>Login</button>}
            </AuthContext.Consumer>
            {/* <button onClick={authContext.login}>Login</button> */}
        </div>
    )
}

export default React.memo(Cockpit);