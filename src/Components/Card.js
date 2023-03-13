import equilibrium from "../Images/equilibrium.jpg";
import { StyledDiv, StyledImg } from "./StyledComponents";

export const Card = () => {
  return (
    <section>
      <StyledDiv>
        <div>
          <StyledImg src={equilibrium} />
        </div>
        <h1>Equilibrium #3429</h1>
        <p>
          Our Equilibrium collection promotes bankruptcy and environmental
          disaster
        </p>
        <div>
          <p>0.041 ETH</p>
          <p>3 days left</p>
        </div>
        <div>
          <p>Creation of Jules Wyvern</p>
        </div>
      </StyledDiv>
    </section>
  );
};
