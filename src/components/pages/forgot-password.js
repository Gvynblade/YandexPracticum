import React, { useState} from 'react';
import './forms-styles.scss'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { requestNewPassword } from '../../services/actions/auth'
import { Redirect } from 'react-router-dom'

const ForgotPasswordPage = () => {

    const {forgotPasswordSuccess, isAuthorised} = useSelector(store => store.auth)

    const dispatch = useDispatch()

    const [requestPasswordForm, setRequestPasswordForm] = useState({
        email: ''
    })

    const handleChange = (e) => {
        setRequestPasswordForm({
            ...requestPasswordForm,
            [e.target.name]: e.target.value
        })
    }

    const handleRequestPassword = () => {
        dispatch(requestNewPassword(requestPasswordForm))
    }

    return forgotPasswordSuccess ? ( <Redirect to="/reset-password" /> ) : isAuthorised ? ( <Redirect to="/" /> ) : (
        <main className="form container">
            <div className="form__box">

            <p className="text text_type_main-medium pb-6 form__header">Восстановление пароля</p>

            <div className="form__input mb-6">
                <Input
                    type={'email'}
                    placeholder={'Укажите e-mail'}
                    icon={undefined}
                    value={requestPasswordForm.email}
                    name={'email'}
                    error={false}
                    errorText={'Ошибка'}
                    size={'default'}
                    onChange={ e => handleChange(e)}
                />
            </div>

            <div className="form__button">
                <Button type="primary" size="medium" onClick={handleRequestPassword}>
                    Восстановить
                </Button>
            </div>

            <span className={`form__footerField pt-20`}>
                <p className="text text_type_main-default">
                    Вспомнили пароль?
                </p>
                <Link to={'/login'}>Войти</Link>
            </span>

            </div>
        </main>
    )
}

export default ForgotPasswordPage;
