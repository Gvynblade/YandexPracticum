import React, { useState } from 'react';
import './forms-styles.scss'
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { requestLogin } from '../../services/actions/auth'
import { Redirect, useHistory } from 'react-router-dom'

const LoginPage = () => {

    const { isAuthorised, logoutRequest, loginSuccess } =  useSelector( store => store.auth )

    const dispatch = useDispatch()
    const history = useHistory()
    
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = () => {
        dispatch(requestLogin(loginForm))
    }

    if (loginSuccess && history.action === "REPLACE") {
        return <Redirect to={ history.location?.state?.from.pathname || '/' } />
    }

    return isAuthorised && !logoutRequest ? ( <Redirect to="/" /> ) : (
        <main className="form container">
            <div className="form__box">

            <p className="text text_type_main-medium pb-6 form__header">Вход</p>

            <div className="form__input mb-6">
                <Input
                    type={'email'}
                    placeholder={'E-mail'}
                    icon={undefined}
                    value={loginForm.email}
                    name={'email'}
                    error={false}
                    errorText={'Ошибка'}
                    size={'default'}
                    onChange={ e => handleChange(e)}
                />
            </div>

            <div className="form__input mb-6">
                <PasswordInput value={loginForm.password} name={'password'} onChange={ e => handleChange(e)} />
            </div>

            <div className="form__button">
                <Button type="primary" size="medium" onClick={handleLogin}>
                    Войти
                </Button>
            </div>

            <span className={`form__footerField pt-20 pb-6`}>
                <p className="text text_type_main-default">
                    Вы — новый пользователь?
                </p>
                <Link to={'/register'}>Зарегистрироваться</Link>
            </span>

            <span className={'form__footerField'}>
            <p className="text text_type_main-default">
                Забыли пароль?
            </p>
            <Link to={'/forgot-password'}>Восстановить пароль</Link>
            </span>

            </div>
        </main>
    )
}

export default LoginPage;
