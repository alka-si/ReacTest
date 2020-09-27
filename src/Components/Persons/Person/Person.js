import React from 'react';
import classes from './Person.css';
// import styled from 'styled-components';
// import Radium from 'radium';

// const styledDiv = styled.div`
//     margin : 16px auto;
//     width : 60%;
//     border : 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     text-align: center;
//     padding : 16px;

//     @media (min-width: 500px): {
//         width: '450px'
//     }    
// `

const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }
    //ERROR HANDLING
    // const rnd = Math.random();
    // if(rnd > 0.7){
    //     throw new Error('Something went wrong')
    // }
    return(
        //<styledDiv>
        <div className={classes.Person} >
        <p onClick={props.click}>I am {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.change} value={props.name}></input>
        </div>
        //</styledDiv>
    );
}

// export default Radium(person);
export default person;