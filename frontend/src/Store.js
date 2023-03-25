import React from 'react';
import styled from "styled-components";
import StoreBlog from './component/StoreBlog';
import Home from './Home';
import { Player } from 'video-react';
import "/node_modules/video-react/dist/video-react.css";
import StoreVideo from './component/StoreVideo';
import StorePaid from './component/StorePaid';

const Store = () => {
    return (
        <>
            <Home />
            <Container>
                <Box>
                    <Left>
                        <h2>Documentations For CyberSecurity</h2>
                        <StoreBlog />
                        <StoreBlog />
                        <StoreBlog />
                    </Left>
                    <Right>
                        <h2>Video Links For CyberSecurity</h2>
                        <StoreVideo />
                        <StoreVideo />
                        <StoreVideo />
                    </Right>
                </Box>
                <DownBox>
                    <h1>Paid Courses</h1>
                    <StorePaid />
                </DownBox>
            </Container>
        </>
    )
}

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  top: 120px;
  display: flex;
  width: 100vw;
  justify-content: center;
`;

const Box = styled.div`
    display: flex;
    justify-content: center;
`;
const DownBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 1px solid grey;
`;
const Left = styled.div`
    border-right: 3px groove grey;
    min-height: calc(100vh - 250px);
    width:50vw;
    h2{
    display: flex;
    align-items: center;
    border-bottom: 3px groove grey;
    justify-content: center;
    margin-bottom: 20px;
    }
`;
const Right = styled.div`
    width:50vw;
    /* margin-left: 10px; */
    h2{
    display: flex;
    border-bottom: 3px groove grey;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    }
    a{
        text-decoration: none;
    }
`;


export default Store;