import React, { PureComponent } from 'react';
import Person from './Person/Person'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

class Persons extends PureComponent{
    static getDerivedStateFromProps(props, state){
        console.log('Persons [getDerivedStateFromProps]',props);
        return state;
    }
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('Persons [shouldComponentUpdate]')
    //     if( nextProps.persons !== this.props.persons || 
    //         nextProps.click !== this.props.click || 
    //         nextProps.change !== this.props.change ){
    //         return true
    //     }else{
    //         return false
    //     }
    // }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Persons [getSnapshotBeforeUpdate]')
        return {message : 'snapshot!'};
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('Persons [componentDidUpdate]')
        console.log(snapshot)
    }
    render(){
        console.log('Persons [render]')
        return this.props.persons.map( (person, index) => {
            return <ErrorBoundary key={person.id}>
                <Person 
                name={person.name} 
                age={person.age} 
                click={() => this.props.delete(index)}
                change={(event) => this.props.change(event, person.id)}
                />
            </ErrorBoundary>
        })
    }
}

export default Persons;