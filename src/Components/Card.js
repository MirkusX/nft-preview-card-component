import equilibrium from "../Images/equilibrium.jpg";
import {
  AlignLeftDiv,
  FlexDiv,
  StyledDiv,
  StyledImg,
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
          <h1>Equilibrium #3429</h1>
          <p>
            Our Equilibrium collection promotes bankruptcy and environmental
            disaster
          </p>
          <FlexDiv>
            <p>0.041 ETH</p>
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
