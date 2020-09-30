import React, { Component } from 'react';
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

class Person extends Component{
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('Person [componentDidUpdate]')
        console.log(snapshot)
    }

    render(){
        console.log('Person [render]')
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
            <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.change} value={this.props.name}></input>
            </div>
            //</styledDiv>
        );
    }
}

// export default Radium(person);
export default Person;