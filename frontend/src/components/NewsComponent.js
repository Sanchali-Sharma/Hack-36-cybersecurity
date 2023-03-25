import React from 'react'
import styled from 'styled-components'
import { AiFillCalendar } from 'react-icons/ai';


const NewsComponent = () => {
  return (
    <Container>
      <News href="google">
        <Image>
          {/* <div> */}
            <img src="./images/news.webp" alt="" />
          {/* </div> */}
        </Image>
        <Text>
          <Right>
            <h3>Malicious Python Package Uses Unicode Trickery to Evade Detection and Steal Data</h3>
            <Space>
              <Line>
                <AiFillCalendar /> Mar 24,2023
              </Line>
              <About><p>DevSecOps / Software Security</p></About>
            </Space>
            <Desc><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, officia expedita nam blanditiis sed quasi nisi explicabo dignissimos ipsum illo ipsam laborum. Nisi voluptatibus alias harum dolorum aliquid, excepturi recusandae?</p></Desc>
          </Right>
        </Text>
      </News>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
  /* display: block; */
  max-width: 1030px;
  margin: auto;
  margin-bottom: 20px;
  top: 100px;
  cursor: pointer;
  border-radius: 9px;
    &:hover{
      -webkit-box-shadow: 9px 9px 8px -4px rgba(117,115,117,1);
      -moz-box-shadow: 9px 9px 8px -4px rgba(117,115,117,1);
      box-shadow: 9px 9px 8px -4px rgba(117,115,117,1);
    }
    img{
        position: absolute;
  }
`;
const News = styled.a`
    display: flex;
    width: fit-content;
    text-decoration: none;
    color: black;
`;
const Image = styled.div`
  /* display: flex; */
  img{
    border-radius: 9px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: contain;
    height: inherit;
  }
`;
const Text = styled.div`
  /* display: flex; */
  width: 100vw;
`;
const Right = styled.div`
  padding: 0 330px;
  h3{
    color: black;
    font-weight: bold;
    @media (max-width: 1150px){
      font-size: 16px;
    }
  }
`;
const Line = styled.div`
  margin-top: 10px;
`;
const About = styled.div`
  margin-top: 10px;
  margin-left: 50px;
  border-bottom: 1px solid rgba(0,0,0,0.2);
  opacity: 0.5;
  @media (max-width: 1150px){
      font-size: 14px;
    }
`;
const Space = styled.div`
  display: flex;
  margin-top: 10px;
`;
const Desc = styled.div`
  display: flex;
  margin-top: 30px;
  @media (max-width: 1150px){
    font-size: 14px;
  }
`;

export default NewsComponent