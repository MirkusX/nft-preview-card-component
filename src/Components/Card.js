import equilibrium from "../Images/equilibrium.jpg";
import {
  AlignLeftDiv,
  EthIcon,
  FlexDiv,
  StyledDiv,
  StyledH1,
  StyledImg,
  StyledP,
  StyledSection,
} from "./StyledComponents";

export const Card = () => {
  return (
    <StyledSection>
      <StyledDiv>
        <div>
          <StyledImg src={equilibrium} />
        </div>
        <AlignLeftDiv>
          <StyledH1>Equilibrium #3429</StyledH1>
          <StyledP>
            Our Equilibrium collection promotes bankruptcy and environmental
            disaster
          </StyledP>
          <FlexDiv>
            <FlexDiv noSpaceBetween>
              <EthIcon />
              <p>0.041 ETH</p>
            </FlexDiv>
            <p>3 days left</p>
          </FlexDiv>
          <div>
            <p>Creation of Jules Wyvern</p>
          </div>
        </AlignLeftDiv>
      </StyledDiv>
    </StyledSection>
  );
};
