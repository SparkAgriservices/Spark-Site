import { SignIn } from '@clerk/clerk-react'
import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar'

const LoginPage = () => {
  return (
    <>
    <Navbar/>
    <Wrapper>
      <SignIn/>
    </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
display:flex;
align-items : center;
justify-content : center;
height : 100vh;
`

export default LoginPage