import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Home from './Home'

const Main = () => {
    return (
        <>
            <Home currentUser={true}/>
            <Container>
                <img src="./images/Cyber3.jpg" alt="" />
            <Text>
                <h2>What is Cybersecurity?</h2>
            </Text>
            <Text2>
                <h2>Cybersecurity technology and best practices protect critical systems and sensitive information from an ever-growing volume of continually evolving threats</h2>
            </Text2>
            <Info>
                <h2>What is Cybersecurity?</h2><br />
                <p>Cybersecurity is the practice of protecting critical systems and sensitive information from digital attacks. Also known as information technology (IT) security, cybersecurity measures are designed to combat threats against networked systems and applications, whether those threats originate from inside or outside of an organization.</p><br />
                <p>In 2020, the average cost of a data breach was USD 3.86 million globally, and USD 8.64 million in the United States. These costs include the expenses of discovering and responding to the breach, the cost of downtime and lost revenue, and the long-term reputational damage to a business and its brand. Cybercriminals target customers’ personally identifiable information (PII) — names, addresses, national identification numbers (e.g., Social Security number in the US, fiscal codes in Italy), and credit card information — and then sell these records in underground digital marketplaces. Compromised PII often leads to a loss of customer trust, the imposition of regulatory fines, and even legal action.</p><br />
                <p>Security system complexity, created by disparate technologies and a lack of in-house expertise, can amplify these costs. But organizations with a comprehensive cybersecurity strategy, governed by best practices and automated using advanced analytics, artificial intelligence (AI) and machine learning, can fight cyberthreats more effectively and reduce the lifecycle and impact of breaches when they occur.</p>
            </Info>
            <Info>
                <h2>Cybersecurity domains</h2><br />
                <p>A strong cybersecurity strategy has layers of protection to defend against cyber crime, including cyber attacks that attempt to access, change, or destroy data; extort money from users or the organization; or aim to disrupt normal business operations. Countermeasures should address:</p>
                <ul>
                    <li>
                        <p><strong>Critical infrastructure security - </strong> Practices for protecting the computer systems, networks, and other assets that society relies upon for national security, economic health, and/or public safety. The National Institute of Standards and Technology (NIST) has created a cybersecurity framework to help organizations in this area, while the U.S. Department of Homeland Security (DHS) provides additional guidance.</p><br />
                    </li>
                    <li>
                        <p><strong>Network security - </strong> Security measures for protecting a computer network from intruders, including both wired and wireless (Wi-Fi) connections.</p><br />
                    </li>
                    <li>
                        <p><strong>Application security - </strong> Processes that help protect applications operating on-premises and in the cloud. Security should be built into applications at the design stage, with considerations for how data is handled, user authentication, etc.</p><br />
                    </li>
                </ul>
            </Info>
            <Info>
                <h2>What is Cybersecurity?</h2><br />
                <p>Cybersecurity is the practice of protecting critical systems and sensitive information from digital attacks. Also known as information technology (IT) security, cybersecurity measures are designed to combat threats against networked systems and applications, whether those threats originate from inside or outside of an organization.</p><br />
                <p>In 2020, the average cost of a data breach was USD 3.86 million globally, and USD 8.64 million in the United States. These costs include the expenses of discovering and responding to the breach, the cost of downtime and lost revenue, and the long-term reputational damage to a business and its brand. Cybercriminals target customers’ personally identifiable information (PII) — names, addresses, national identification numbers (e.g., Social Security number in the US, fiscal codes in Italy), and credit card information — and then sell these records in underground digital marketplaces. Compromised PII often leads to a loss of customer trust, the imposition of regulatory fines, and even legal action.</p><br />
                <p>Security system complexity, created by disparate technologies and a lack of in-house expertise, can amplify these costs. But organizations with a comprehensive cybersecurity strategy, governed by best practices and automated using advanced analytics, artificial intelligence (AI) and machine learning, can fight cyberthreats more effectively and reduce the lifecycle and impact of breaches when they occur.</p>
            </Info>
            <Footer />
            </Container>
        </>
    )
}

const Container = styled.div`
    position: relative;
  min-height: calc(100vh - 250px);
  overflow: hidden;
  display: block;
    img{
        position: absolute;
        filter: brightness(50%);
        height: 90vh;
        width: 100vw;
  }
`;

const Text = styled.div`
    position: relative;
    top: 79px;
    font-size: 35px;
    padding: 0 16px;
    h2{
        color: white;
    }
`;

const Text2 = styled.div`
    position: relative;
    margin-top: 22px;
    font-size: 17px;
    display: flex;
    align-items: end;
    height: 79vh;
    width: 400px;
    padding: 0 16px;
    h2{
        color: white;
        margin-bottom: 15px;
    }
`;

const Info = styled.div`
top:10px;
font-family: sans-serif;
  position: relative;
  padding: 10px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  border-bottom: 1px solid grey;
  line-height: 30px;
  h2{
  font-size: 3rem;
  }
  ul{
    padding: 0 16px;
  }
  ul li strong{
    display: inline-block;
  }
`;

export default Main;