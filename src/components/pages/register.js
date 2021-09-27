import React, {useState} from 'react';
import './forms-styles.scss'
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { requestRegistration } from '../../services/actions/auth'
import { Redirect } from 'react-router-dom'

const RegisterPage = () => {

    const { isAuthorised } =  useSelector( store => store.auth )

    const dispatch = useDispatch()

    const [registerForm, setRegisterForm] = useState({
        name: '',
        email:'',
        password: ''
    })

    const handleChange = (e) => {
        setRegisterForm({
            ...registerForm,
            [e.target.name]: e.target.value
        })
    }

    const handleRegister = () => {
        dispatch(requestRegistration(registerForm))
    }

    return isAuthorised
    ? (<Redirect to="/" />)
    :(
        <main className="form container">
            <div className="form__box">

            <p className="text text_type_main-medium pb-6 form__header">Регистрация</p>

            <div className="form__input mb-6">
                <Input
                    type={'text'}
                    placeholder={'Имя'}
                    icon={undefined}
                    value={registerForm.name}
                    name={'name'}
                    error={false}
                    errorText={'Ошибка'}
                    size={'default'}
                    onChange={ e => handleChange(e)}
                />
            </div>

            <div className="form__input mb-6">
                <Input
                    type={'email'}
                    placeholder={'E-mail'}
                    icon={undefined}
                    value={registerForm.email}
                    name={'email'}
                    error={false}
                    errorText={'Ошибка'}
                    size={'default'}
                    onChange={ e => handleChange(e)}
                />
            </div>

            <div className="form__input mb-6">
                <PasswordInput value={registerForm.password} name={'password'} onChange={ e => handleChange(e)} />
            </div>

            <div className="form__button">
                <Button type="primary" size="medium" onClick={handleRegister}>
                    Зарегистрироваться
                </Button>
            </div>

            <span className={`form__footerField pt-20`}>
                <p className="text text_type_main-default">
                    Уже зарегистрированы?
                </p>
                <Link to={'/login'}>Войти</Link>
            </span>

            </div>
        </main>
    )
}

export default RegisterPage;
