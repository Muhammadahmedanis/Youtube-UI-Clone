import React from 'react'
import styled from 'styled-components'

function Card() {
  return (
    <Container>
        <Image src='' />
        <Detail>
            <ChannelImage src='' />
        </Detail>
    </Container>
  )
}

export default Card

const Container = styled.div`
    width: 270px;
    margin-bottom: 40px;
    cursor: pointer;
`

const Image = styled.img`
    height: 160px;
    width: 100%;
    background-color: #999;
`
const Detail = styled.div`
    display: flex;
    margin-top: 16px;
    gap: 12px;
`
const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
`