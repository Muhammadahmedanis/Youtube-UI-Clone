import React from 'react'
import styled from 'styled-components'

function Signin() {
  return (
    <Container>
        <Wrapper>
            <Title>Sign in</Title>
            <SubTitle>To countinue to  Youtube</SubTitle>
            <Input placeholder='username' />
            <Input type='password' placeholder='password' />
            <Button>Sign in</Button>
            <Title>or</Title>
            <Input placeholder='username' />
            <Input placeholder='email' />
            <Input type='password' placeholder='password' />
            <Button>Sign up</Button>
        </Wrapper> 
        <More>
            English(USA)
            <Links>
                <Link>Help</Link>
                <Link>Privacy</Link>
                <Link>Terms</Link>
            </Links>
        </More>
    </Container>
  )
}

export default Signin

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 56px);
    color: ${({theme}) => theme.text};
    width: 100%;
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${({theme}) => theme.bgLighter};
    border:1px solid ${({theme}) => theme.soft};
    border-radius: 7px;
    padding: 15px 40px;
    // gap: 10px;
`

const Title = styled.h1`
    font-size: 24px;
    margin: 0;
`

const SubTitle = styled.h2`
    font-size: 20px;
    font-weight: 300;
    margin: 5px 0;
`

const Input = styled.input`
    border: 1px solid ${({theme}) => theme.soft};
    border-radius: 3px;
    padding: 10px;
    background-color: transparent;
    margin: 5px 0;
    width: 100%;
`

const Button = styled.button`
    border-radius: 3px;
    border: none;
    padding: 10px 20px;
    font-weight: 600;
    cursor: pointer;
    margin: 5px 0;
    background-color: ${({theme}) => theme.soft};
    color: ${({theme}) => theme.textSoft};
`
const More = styled.div`
    display: flex;
    margin-top: 10px;
    font-size: 12px;
    color: ${({theme}) => theme.textSoft};

`

const Links = styled.div`
    margin-left: 30px;
`

const Link = styled.span`
    margin-left: 30px;
`
