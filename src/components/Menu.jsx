import React from 'react'
import styled from 'styled-components'
import { AiFillHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdOutlineHistory } from "react-icons/md";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5"
import { MdOutlineMovieCreation } from "react-icons/md";
import { MdLiveTv } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinedFlag } from "react-icons/md";
import { IoHelpCircleOutline } from "react-icons/io5";
import { MdOutlineSettingsBrightness } from "react-icons/md";

function Menu() {
  return (
    <Container>
        <Wrapper>
            <Logo>
                <Img src='https://static.vecteezy.com/system/resources/previews/023/986/704/non_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png' />
                YouTube
            </Logo>
            <Item>
                <AiFillHome />
                Home
            </Item>
            <Item>
                <MdOutlineExplore />
                Explore
            </Item>
            <Item>
                <MdOutlineSubscriptions />
                Subscriptions
            </Item>
            <Item>
                <MdOutlineVideoLibrary />
                Library
            </Item>
            <Item>
                <MdOutlineHistory />
                History
            </Item>
            <Item>
                <MdOutlineLibraryMusic />
                Music
            </Item>
            <Item>
                <MdOutlineSportsBasketball />
                Sports
            </Item>
            <Item>
                <IoGameControllerOutline />
                Gaming
            </Item>
            <Item>
                <MdOutlineMovieCreation />
                Movies
            </Item>
            <Item>
                <AiFillHome />
                News
            </Item>
            <Item>
                <MdLiveTv />
                Live
            </Item>
            <Item>
                <IoSettingsOutline />
                Setting
            </Item>
            <Item>
                <MdOutlinedFlag />
                Report
            </Item>
            <Item>
                <IoHelpCircleOutline />
                Help
            </Item>
            <Item>
                <MdOutlineSettingsBrightness />
                Light Mode                
            </Item>
        </Wrapper>
    </Container>
  )
}

export default Menu

const Container = styled.div`
    flex: 1;
    background-color: #202020;
    height: 100vh;
    color: white;
    font-size: 14px;
`
const Wrapper = styled.div`
    padding: 18px 26px;
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 25px;
`
const Img = styled.img`
    height: 25px;
`
const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
`