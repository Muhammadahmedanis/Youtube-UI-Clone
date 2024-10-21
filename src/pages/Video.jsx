import React from 'react'
import styled from 'styled-components'
import { MdOutlineThumbUpOffAlt } from "react-icons/md";
import { MdOutlineThumbDownAlt } from "react-icons/md";
import { BsFillReplyFill } from "react-icons/bs";
import { MdAddTask } from "react-icons/md";
import Comments from '../components/Comments';
import Card from '../components/Card';

function Video() {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width='100%'
            height='520'
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          >
          </iframe>
        </VideoWrapper>
        <Title>Test video</Title>
        <Details>
          <Info>7,985,154 views . Jun 22, 2022</Info>
          <Buttons>
            <Button><MdOutlineThumbUpOffAlt /> 123</Button>
            <Button><MdOutlineThumbDownAlt /> Dislike</Button>
            <Button><BsFillReplyFill /> Share</Button>
            <Button><MdAddTask /> Save</Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"/>
            <ChannelDetail>
              <ChannelName>YouTube</ChannelName>
              <ChannelCounter>200K subscribers</ChannelCounter>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet voluptatibus vel eligendi, repudiandae beatae optio. Dicta modi molestiae perferendis
              </Description>
            </ChannelDetail>
          </ChannelInfo>
            <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommandation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>

      </Recommandation>
    </Container>
  )
}

export default Video

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 10px 20px;
`
const Content = styled.div`
  flex: 5;
`
const Recommandation = styled.div`
  flex: 2;
`

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4px;
  @media (max-width: 500px){
    flex-wrap: wrap;
  }
`
const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`

const Image = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({theme}) => theme.text};
`
const ChannelName = styled.div`
  font-weight: 500;
`
const ChannelCounter = styled.div`
  color: ${({theme}) => theme.text};
  font-size: 12px;
`

const Description = styled.p`
  font-size: 14px;
`
const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
  margin: 0 auto;
`
const VideoWrapper = styled.div`
   @media (max-width: 600px) {
    iframe {
      height: 300px;
    }
`
const Title = styled.h1`
  font-size: 14px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({theme}) => theme.text};
`
const Details = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

`
const Info = styled.span`
  color: ${({theme}) => theme.textSoft};
  margin: 7px 0;
`
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({theme}) => theme.text};
`
const Hr = styled.div`
  margin: 15px 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`