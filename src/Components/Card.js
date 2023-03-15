import equilibrium from "../Images/equilibrium.jpg";
import avatar from "../Images/avatar.png";
import {
  AlignLeftDiv,
  AyeIcon,
  ClockIcon,
  EthIcon,
  FlexDiv,
  HoverDiv,
  OverlayDiv,
  StyledDiv,
  StyledH1,
  StyledImg,
  StyledP,
  StyledSection,
  StyledSpan,
} from "./StyledComponents";

export const Card = () => {
  return (
    <StyledSection>
      <StyledDiv>
        <HoverDiv>
          <StyledImg src={equilibrium} />
          <OverlayDiv>
            <AyeIcon />
          </OverlayDiv>
        </HoverDiv>
        <AlignLeftDiv>
          <StyledH1>Equilibrium #3429</StyledH1>
          <StyledP>
            Our Equilibrium collection promotes bankruptcy and environmental
            disaster
          </StyledP>
          <FlexDiv>
            <FlexDiv noSpaceBetweenAlt>
              <EthIcon />
              <p>0.041 ETH</p>
            </FlexDiv>
            <FlexDiv noSpaceBetween>
              <ClockIcon />
              <p>3 days left</p>
            </FlexDiv>
          </FlexDiv>
          <FlexDiv noSpaceBetween>
            <StyledImg avatar src={avatar} />
            <p>
              Creation of <StyledSpan>Jules Wyvern</StyledSpan>
            </p>
          </FlexDiv>
        </AlignLeftDiv>
      </StyledDiv>
    </StyledSection>
  );
};
