import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/login.jpg"
import { NavLink } from 'react-router-dom';

const Login = ({setIsLoggedIn}) => {
  return (
    <div>
      <Template
        title="Welcome Back"
        desc1="Explore new worlds and old favorites with us."
        desc2="Quality Reads , Unbetabale Deals."
        image={loginImg}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
      />
      {/* <div className="bg-[#062f4f] pl-52 pt-[-30rem]">
        <span>Don't have an account?</span>
        <span className="">
          <NavLink to="/signup">Sign Up Now!</NavLink>
        </span>
      </div> */}
    </div>
  );
}

export default Login
