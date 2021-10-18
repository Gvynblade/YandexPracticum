import React from 'react';
import { useSelector } from '../../services/hooks';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom'

type TProps = {
    children: React.ReactNode,
    path: string,
    exact?: boolean
}

const ProtectedRoute: React.FC<TProps> = (props) => {

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

export default ProtectedRoute;
