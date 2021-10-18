import React, { useState, useEffect } from 'react'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from '../../services/hooks';
import { getUserData, updateUserData } from '../../services/actions/auth'
import './profile-edit-data.scss'

type TUserData = {
    email: string;
    name: string;
    password?: string
}

export const ProfileEditData = () => {

    const {userInfo} = useSelector( store => store.auth )

    const dispatch = useDispatch()

    useEffect( () => {
        if(!userInfo.email) {
            dispatch(getUserData())
        }
        setUserData(userInfo)
    }, [dispatch, userInfo])

    const [userData, setUserData] = useState<TUserData>(userInfo)

    const [isInpuputChanged, setIsInputChanged] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
        setIsInputChanged(true)
    }

    const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault()
        dispatch(updateUserData(userData))
    }

    const handleCancel = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault()
        setUserData(userInfo)
    }

    return ( <form className='profile__box' onSubmit={handleSubmit}>
        <div className="profile__input mb-6">
            <Input
                type={'text'}
                placeholder={'Имя'}
                icon={'EditIcon'}
                value={userData.name}
                name={'name'}
                error={false}
                errorText={'Ошибка'}
                size={'default'}
                onChange={ e => handleChange(e)}
                />
        </div>

        <div className="profile__input mb-6">
            <Input
                type={'email'}
                placeholder={'E-mail'}
                icon={'EditIcon'}
                value={userData.email}
                name={'email'}
                error={false}
                errorText={'Ошибка'}
                size={'default'}
                onChange={ e => handleChange(e)}
                />
        </div>

        <div className="profile__input">
            <Input
                type={'password'}
                placeholder={'Пароль'}
                icon={'EditIcon'}
                value={userData.password ? userData.password : ''}
                name={'password'}
                error={false}
                errorText={'Ошибка'}
                size={'default'}
                onChange={ e => handleChange(e)}
                />
        </div>

        { isInpuputChanged && <div className="profile__buttons pt-5">
            <Button type="primary" size="small">
                Сохранить
            </Button>

            <Button type="secondary" size="medium" onClick={handleCancel}>
                Сбросить
            </Button>
        </div> }
    </form>)

}
