import React from 'react'
import signupImg from "../assets/signup.jpg"
import Template from '../components/Template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Books are like wine , they get better with age"
      desc1="Your Literary Treasure Trove "
      desc2="Browse , Buy and Save."
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup
