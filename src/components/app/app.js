import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppHeader from '../app-header/app-header';
import { BurgerMain, ProfilePage, LoginPage, RegisterPage,
ForgotPasswordPage, ResetPasswordPage, NotFoundPage } from '../pages';
import { Provider } from 'react-redux';
import store from '../../services/reducers';
import ProtectedRoute from '../hoc/protected-route'
import IngredientComponentSwitcher from '../hoc/ingredient-component-switcher'
import {useDispatch} from 'react-redux';
import { requestIngredients } from '../../services/actions/ingredients'

function App() {

    const dispatch = useDispatch()

    React.useEffect( () => {
        dispatch(requestIngredients())
    }, [dispatch])

    return (
            <>
                <AppHeader />

                <Switch>
                    <Route exact path={'/'}>
                        <BurgerMain />
                    </Route>
                    <Route exact path={'/ingredients/:id'}>
                        <IngredientComponentSwitcher />
                    </Route>
                    <ProtectedRoute path={'/profile'}>
                        <ProfilePage />
                    </ProtectedRoute>
                    <Route exact path={'/login'}>
                        <LoginPage />
                    </Route>
                    <Route exact path={'/register'}>
                        <RegisterPage />
                    </Route>
                    <Route exact path={'/forgot-password'}>
                        <ForgotPasswordPage />
                    </Route>
                    <Route exact path={'/reset-password'}>
                        <ResetPasswordPage />
                    </Route>
                    <Route exact path={'*'}>
                        <NotFoundPage />
                    </Route>
                </Switch>
            </>
    )
}

const AppContainer = () => {
    return (
        <Provider store={store} >
            <Router>
                <App />
            </Router>
        </ Provider>
    )
}

export default AppContainer;
