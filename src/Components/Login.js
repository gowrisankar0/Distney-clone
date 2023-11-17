import React from 'react';
import styled from "styled-components";


const Login = () => {
  return (
    
    <Container>
        <Content>
            <CTA>
             <CTALogoOne src="/image/cta-logo-one.svg" alt="/" />
              <SignUp>GET ALL THERE</SignUp>
              <Discription>Hotstar is an online video streaming platform owned by Novi Digital Entertainment 
                Private Limited, a wholly owned subsidiary of Star India Private Limited. Hotstar currently offers over 100,000 hours of TV 
                content and movies across 9 languages, and every major sport covered live.</Discription>
                <CTALogoTwo src="/image/cta-logo-two.png" alt="/"/>
            </CTA>
           <BgImage/>
        </Content>
    </Container>
  )
  }

  const Container =styled.section`
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height:100vh;

  `
  const Content =styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
  `
  
  
  const BgImage =styled.div`
  height:100%;
  
  background-position:top;
    
  background-size: cover;
  
  background-repeat:no-repeat;
  
  background:url("/image/login-background.jpg");
  position: absolute;
  top:0;
  right:0;
  left:0;
  z-index: -1;
  `
  const CTA =styled.div`
  max-width: 650px;
  width:100%;
  display: flex;
  flex-direction: column;
  `
  const CTALogoOne =styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
  
  `
  const SignUp =styled.a`
  font-weight: bold;
  color: white;
  background-color: #0063e5;
  margin-bottom:12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  &:hover{
    background-color: #0483ee;
  }
  `

   const Discription =styled.p`
   color: hsla(0,0%,95.3%,1);
   font-size: 15px;
   margin:0 0 24px;
   line-height: 1.5;
   letter-spacing: 1.5px;

   `
  const CTALogoTwo =styled.img`
       max-width:600px;
       margin-bottom: 20px;
      display: inline-block;
      vertical-align: bottom;

  
  
  `
   
export default Login