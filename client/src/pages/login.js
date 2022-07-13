import React,{useEffect} from "react";
import styled from "styled-components";
import {mobile} from "../responsive";
import { Link } from "react-router-dom";

const All = styled.div`
  
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

  background:linear-gradient(90deg, rgba(230,229,255,1) 0%, rgba(212,248,255,1) 100%);   
  center;
`;

const Inside = styled.div`
border-radius: 20px;
width: 45%;
text-align: center;
padding: 20px;
background-color: hsl(213deg ,85% ,97%);

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
  box-shadow: 0 0 2em hsl(131deg, 62%, 94%);
  
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

const Lin = styled.a`
  margin: 5px 0px;
  font-size: 10px;
  font-family: arial;
  text-decoration: underline;
  cursor: pointer;
`;
const Linn = styled.a`
  margin: 5px 0px;
  font-size: 15px;
  font-family: arial;
  cursor: pointer;
`;


const Login = () => {
/*  if (typeof errors != 'undefined') {
    errors.forEach(error => {
      error.message
    })
  }*/
  useEffect(() => {
    document.body.style.zoom = "80%";
  }, []);
  return (
    <div>

      
    <All>
      <Inside>
        <Title>Login</Title>
        <Form action="../../../login"method="post">
          <Input type="text" name="email" placeholder="Email address/ Phone number" />
          <Input type="password" name="password" placeholder="Password" />
          <Button type="submit" >Login</Button>
          <Linn>You don't have an account yet?</Linn>
          <Link to="/signup"><Lin >Create an account </Lin></Link>
        </Form>
      </Inside>
    </All>
      
    </div>
  );
};

export default Login;