import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/login.jpg"

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Explore new worlds and old favorites with us."
      desc2="Quality Reads , Unbetabale Deals."
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login
