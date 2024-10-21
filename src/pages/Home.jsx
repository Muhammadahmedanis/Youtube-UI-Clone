import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
function Home() {
  return (
    <Container>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

    </Container>
  )
}

export default Home

const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 23px;
    flex-wrap: wrap;
    padding: 22px 0;
`