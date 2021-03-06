import React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../../../Hoc/Aux'
import withClass from '../../../Hoc/withClass'
import PropTypes from 'prop-types'
import AuthContext from '../../../Context/auth-context'
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
    constructor(props){
        super(props)
        this.inputElementRef = React.createRef()
    }

    static contextType = AuthContext;

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('Person [componentDidUpdate]')
        console.log(snapshot)
    }

    componentDidMount(){
        // this.inputElement.focus()
        this.inputElementRef.current.focus()
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

        //JSX RENDERING USING HOC
        return(
            //<styledDiv>
            <Aux>
                {this.context.authenticated ? <p>Authenticated!!!</p> : <p>Please Login!</p>}
            <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input 
                // ref={(inputEle) => {this.inputElement = inputEle}}
                ref={this.inputElementRef}
                type="text" 
                onChange={this.props.change} 
                value={this.props.name}>
            </input>
            </Aux>
            //</styledDiv>
        );

        // //JSX RENDERING USING ARRAY
        // return[
        //     //<styledDiv>
        //     <p key='i1' onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!</p>,
        //     <p key='i2'>{this.props.children}</p>,
        //     <input key='i3' type="text" onChange={this.props.change} value={this.props.name}></input>
        //     //</styledDiv>
        // ]
    }
}

Person.propTypes = {
    click: PropTypes.func,
    change: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
}
// export default Radium(person);
export default withClass(Person, classes.Person);