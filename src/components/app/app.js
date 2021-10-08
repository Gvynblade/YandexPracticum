import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppHeader from '../app-header/app-header';
import { BurgerMain, FeedPage, OrderPage, IngredientPage, ProfilePage, LoginPage, RegisterPage,
ForgotPasswordPage, ResetPasswordPage, NotFoundPage } from '../pages';
import { Provider } from 'react-redux';
import store from '../../services/store';
import ProtectedRoute from '../hoc/protected-route'
import ComponentSwitcher from '../hoc/component-switcher'
import {useDispatch} from 'react-redux';
import { requestIngredients } from '../../services/actions/ingredients'
import { IngredientDetails } from '../burger-ingredients'
import OrderDetails from '../order/order-details'

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
                    <Route exact path={'/feed'}>
                        <FeedPage />
                    </Route>
                    <Route exact path={'/feed/:id'}>
                        <ComponentSwitcher ComponentPage={OrderPage} ComponentModal={OrderDetails}
                            modalName={'feedOrder'} />
                    </Route>
                    <Route exact path={'/ingredients/:id'}>
                        <ComponentSwitcher ComponentPage={IngredientPage} ComponentModal={IngredientDetails}
                            modalName={'ingredient'} modalHeader={'Детали ингредиента'} />
                    </Route>
                    <ProtectedRoute path={'/profile/orders/:id'}>
                        <ComponentSwitcher ComponentPage={OrderPage} ComponentModal={OrderDetails}
                            modalName={'profileOrder'} />
                    </ProtectedRoute>
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
