import styled from "styled-components";
import { FaEthereum } from "react-icons/fa";
import { AiFillClockCircle, AiFillEye } from "react-icons/ai";

export const AyeIcon = styled(AiFillEye)`
  width: 40px;
  height: 40px;
`;

export const EthIcon = styled(FaEthereum)``;

export const ClockIcon = styled(AiFillClockCircle)``;

export const StyledDiv = styled.div`
  background-color: #15273f;
  width: 25%;
  padding: 1em 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1200px) {
    width: 90%;
  }
`;

export const AlignLeftDiv = styled.div`
  text-align: left;
  padding: 0;
  width: 90%;
  border-radius: 0;
  display: flex;
  flex-direction: column;
`;

export const StyledSpan = styled.span`
  color: #eef8ff;
  cursor: pointer;
  &:hover {
    color: #23d8e6;
  }
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
    align-items: center;
    color: #8ba0bf;
    gap: 0.3em;
   `;
  }}
  ${(props) => {
    if (props.noSpaceBetweenAlt)
      return `
    justify-content: flex-start;
    align-items: center;
    color:#23D8E6;
    gap: 0.3em;  `;
  }}
  ${(props) => {
    if (props.noSpaceBetweenBorder)
      return `
    justify-content: flex-start;
    align-items: center;
    color: #8ba0bf;
    gap: 0.3em;
    border-top: solid #283A52 1px;
    padding-top: 0.5em;
    `;
  }}
`;

export const StyledH1 = styled.h1`
  color: #fcffff;
  margin-bottom: 0;
  cursor: pointer;
  &:hover {
    color: #23d8e6;
  }
`;

export const StyledP = styled.p`
  color: #8ba0bf;
`;

export const OverlayDiv = styled.div`
  display: flex;
  position: absolute;
  background-color: #008c99;
  height: 99%;
  width: 90%;
  top: 0;
  left: 5%;
  border-radius: 10px;
  opacity: 0;
  transition: all 0.3s ease-in;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const HoverDiv = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

export const StyledImg = styled.img`
  width: 90%;
  border-radius: 10px;
  ${(props) => {
    if (props.avatar)
      return `
    width: 10%;
    border: white 1px solid;
    border-radius: 50%;`;
  }}
`;
