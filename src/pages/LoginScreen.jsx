import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './style/loginScreen.css'

const LoginScreen = () => {


    const { handleSubmit, register, reset } = useForm()
    const [isLogged, setIsLogged] = useState(false)

    const submit = (data) => {

        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
        axios.post(URL, data)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.data.token)
                setIsLogged(true)
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsLogged(false)
    }
    if (isLogged) {
        return (
            <div>
                <h2>User Logged ✅</h2>
                <button className="login_container_btn" onClick={handleLogout}>Logout</button>
            </div>
            )
    }

    return (
        <div className="login_container">
            <form onSubmit={handleSubmit(submit)}>

                <h1>Login</h1>

                <div className="login_container_input_group">
                    <label className="login_container_input_group_label" htmlFor="email">Email</label>
                    <input className="login_container_input_group_input" type="email" id="email" {...register('email')} />
                </div>

                <div className="login_container_input_group">
                    <label className="login_container_input_group_label" htmlFor="password">password</label>
                    <input className="login_container_input_group_input" type="password" id="password"  {...register('password')} />
                </div>

                <button className="login_container_btn">Login</button>
            </form>
        </div>
    )
}

export default LoginScreen