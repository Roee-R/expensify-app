import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({ // destructering
    isAuthenticate,
    component:Component, // rename component prop to Component (for the capital letter)
    ...rest // rest of the props like exact and path
})=>(
    <Route {...rest} component = {(props)=>( // rest spread all the history and etc, then we return from function and state the depend on our login status
        isAuthenticate ? (
            <div>
                <Header />
                <Component {...props} />
            </div>
        )
        : (
            <Redirect to="/" /> // Redirect to app root
        )
            
    )} />         
)

const mapStateToProps = (state) => ({
    isAuthenticate: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute);