// Higher Oreder Component (HOC) - A component that renders another component
// Reause code
// Render hijackin
// Prop manipulations
// Abstarc State

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props)=>(
    <div>
        <h1>Welcome</h1>
        <h2>The info is: {props.info}</h2>
    </div>
)

const withAdminWarning = (WrappedComponent) =>{
    return (props)=>(
        <div>
            {props.isAdmin && <p>This is Private Page!</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) =>{
    return (props) =>(
        <div>
            {props.isAuthenticate && <WrappedComponent {...props}/>}
            {!props.isAuthenticate && <p>Need to Authenticate</p>}
            
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={false} info="New info"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticate={false} info="New info"/>, document.getElementById('app'));