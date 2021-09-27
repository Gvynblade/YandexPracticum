import React, { useState } from 'react';
import './forms-styles.scss'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { resetPassword } from '../../services/actions/auth'

const ResetPasswordPage = () => {

    const {isResetPaswordRequested} = useSelector( store => store.auth);
    const dispatch = useDispatch()

    const [resetPasswordForm, setResetPasswordForm] = useState({
        password: '',
        token: ''
    })

    const handleChange = (e) => {
        setResetPasswordForm({
            ...resetPasswordForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSetPassword = () => {
        dispatch(resetPassword(resetPasswordForm))
    }

    return isResetPaswordRequested? (
        <main className="form container">
            <div className="form__box">

            <p className="text text_type_main-medium pb-6 form__header">Восстановление пароля</p>

            <div className="form__input mb-6">
                <Input
                    type={'password'}
                    placeholder={'Введите новый пароль'}
                    icon={'ShowIcon'}
                    value={resetPasswordForm.password}
                    name={'password'}
                    error={false}
                    errorText={'Ошибка'}
                    size={'default'}
                    onChange={ e => handleChange(e)}
                />
            </div>

            <div className="form__input mb-6">
                <Input
                    type={'text'}
                    placeholder={'Введите код из письма'}
                    icon={undefined}
                    value={resetPasswordForm.token}
                    name={'token'}
                    error={false}
                    errorText={'Ошибка'}
                    size={'default'}
                    onChange={ e => handleChange(e)}
                />
            </div>

            <div className="form__button">
                <Button type="primary" size="medium" onClick={handleSetPassword}>
                    Сохранить
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
    ) : (
        <Redirect to={'/'} />
    )

}

export default ResetPasswordPage;
