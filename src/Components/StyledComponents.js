import styled from "styled-components";
import { FaEthereum } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";

export const EthIcon = styled(FaEthereum)``;

export const ClockIcon = styled(AiFillClockCircle)``;

export const StyledDiv = styled.div`
  background-color: #15273f;
  width: 20%;
  padding: 1em 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const AlignLeftDiv = styled.div`
  text-align: left;
  padding: 0;
  width: 90%;
  border-radius: 0;
  display: flex;
  flex-direction: column;
`;

export const StyledImg = styled.img`
  width: 90%;
  border-radius: 10px;
`;

export const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0d1a2d;
  min-height: 100vh;
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  ${(props) => {
    if (props.noSpaceBetween)
      return `
    justify-content: flex-start;
    align-items: center;`;
  }}
`;

export const StyledH1 = styled.h1`
  color: #2ee8e9;
  margin-bottom: 0;
`;

export const StyledP = styled.p`
  color: #8ba0bf;
`;
