import React from "react";

import styled from "styled-components";

import Demo from "./Icons/Demo";

const Section = styled.section`
  padding: 20px 0 20px;
`;
const SectionTitle = styled.h2`
  font-size: 60px;
  font-weight: 500;
  font-family= var(--font-family);
  line-height: normal;
  color: #bd62c7;
  text-align: center;
  margin-bottom: 2px;
`;

const SubTitle = styled.h5`
  font-size: 16px;
  font-weight: normal;
  line-height: normal;
  text-align: center;
  color: #aeaeae;
  margin-bottom: 25px;
  @media (min-width: 992px) {
    margin-bottom: 50px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
  &:hover {
    transform: translateY(-5px) !important;
  }
  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;

const IconWrap = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 150px;
  border: solid 1px #eff2f9;
  background-color: #f8faff;
  margin-top: 40px;
  margin-bottom: 10px;
  position: relative;
  > svg {
    transition: all 0.3s ease-in;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:hover {
    > svg {
      transform: translate(-50%, -50%) rotateY(360deg);
    }
  }
`;

const BoxTitle = styled.h4`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 10px ;
  line-height: normal;
  color: #5273c7;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: normal;
  line-height: 1.58;
  color: #8f8f8f;
  margin-bottom: 0;
  max-width: 350px;
`;
const Aboute = () => {
  const width = window.innerWidth;
  return (
    <Section id="about">
      <div className="container">
        <SectionTitle>EventScroller Services</SectionTitle>
        <SubTitle>EvenetScroller provides several services:</SubTitle>
        <div className="row">
          <div className="col-lg-4">
            <Box data-aos={width >= 1400 ? "fade-right" : "fade-up"}>
              <IconWrap>
                <Demo />
              </IconWrap>
              <BoxTitle>Explore Events</BoxTitle>
              <Text>
              Tap into the world’s largest events marketplace where
               millions discover things to do and expand your reach 
               with marketing tools using our exclusive data
              </Text>
            </Box>
          </div>
          <div className="col-lg-4">
            <Box data-aos="fade-up">
              <IconWrap>
                <Demo />
              </IconWrap>
              <BoxTitle>Create Events</BoxTitle>
              <Text>
                Since component logic is written in JavaScript instead of
                templates, you can easily pass rich data through your app and
                keep state out of the DOM.
              </Text>
            </Box>
          </div>
          <div className="col-lg-4">
            <Box data-aos={width >= 1400 ? "fade-left" : "fade-up"}>
              <IconWrap>
                <Demo />
              </IconWrap>
              <BoxTitle>Buy Tickets Online</BoxTitle>
              <Text>
                We don’t make assumptions about the rest of your technology
                stack, so you can develop new features in React without
                rewriting existing code.
              </Text>
            </Box>
          </div>
        </div>
      </div>
    </Section>
  );
}; 
export default Aboute;