import React from 'react';
import styled from "styled-components";
import {mobile} from "../responsive";
import { Link } from "react-router-dom";

const All = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
    background: linear-gradient(90deg, rgba(230,229,255,1) 0%, rgba(212,248,255,1) 100%);
      center;
`;

const Inside = styled.div`
border-radius: 20px;
width: 45%;
text-align: center;
padding: 20px;
background-color: hsl(213deg ,85% ,97%);
box-shadow: 0px 1px 2px 0px rgba(0,205,255,0.7),
            1px 2px 4px 0px rgba(0,205,255,0.7),
            2px 4px 8px 0px rgba(0,205,255,0.7),
            2px 4px 16px 0px rgba(0,205,255,0.7);
${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 44px;
  font-weight: 400;
  color: #544545;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width:100%;
`;

const Input = styled.input`
  flex: 1;
  width: 80%;
  border:none;
  box-shadow: 0 0 2em hsl(231deg, 62%, 94%);
  border-color: inherit;
  border-radius: 20px;
  margin: 10px 0 ;
  padding: 10px;
`;

const Button = styled.button`
  margin-top: 10px;
  width: 20%;
  border: none;
  font-size: 20px;
  padding: 15px 20px;
  background-color: #BD85D9;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  height: 70px;
  left: 460px;
  top: 544.68px;
  transform: rotate(-0.07deg);
`;
const Confirme = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Lin = styled.a`
  margin: 5px 0px;
  font-size: 10px;
  font-family: arial;
  text-decoration: underline;
  cursor: pointer;
`;
const Linn = styled.a`
  margin: 5px 0px;
  font-size: 10px;
  font-family: arial;
  cursor: pointer;
`;

const SignUp = () => {
  return (
    <div>

      
    <All>
      

      <Inside>
        
        <Title>Sign Up</Title>
        <Form>
          <Input placeholder="Full Name" />
          <Input placeholder="Your email address " />
          <Input placeholder="Confirm your email address" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm your password" />
          <Confirme>
            By creating an account, I consent to the processing of my personal
            data in accordance with the 
             <Link to="/yu"><b> PRIVACY POLICY</b></Link>
          </Confirme>
          <Button>Sign up</Button>
          <Linn>Already have an account?</Linn>
          <Link to="/login"><Lin >Login here </Lin></Link>
        </Form>
      </Inside>
      
    </All>
      
    </div>
  );
};

export default SignUp;