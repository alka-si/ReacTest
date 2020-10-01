import React from 'react';

//ONE WAY
// const WithClass = props => (
//     <div className={props.classes}>
//         {props.children}
//     </div>
// );

// export default WithClass;

//SECOND WAY
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props}></WrappedComponent>
        </div>
    )
};

export default withClass;

