import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';

const ProtectedRoute = (props) => {

    const {children, ...rest} = props

    const { isAuthorised } =  useSelector( store => store.auth )

    return (
        <Route
            {...rest}
            render={({ location }) => (
                isAuthorised !== false ? children
                : <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}
                />
            )}
        />
    )

}

ProtectedRoute.propTypes = {
    children: PropTypes.element.isRequired,
    path: PropTypes.string.isRequired,
    exact: PropTypes.bool
}

export default ProtectedRoute;
