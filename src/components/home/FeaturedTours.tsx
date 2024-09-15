import React from "react";
import Container from "../common/ui/Container";
import Heading from "../common/ui/Heading";
import Featured from "../tours/featured/Featured";

const FeaturedTours = () => {
  return (
    <div>
      <Container className="py-10">
        <Heading>Featured Tours</Heading>
        <Featured />
      </Container>
    </div>
  );
};

export default FeaturedTours;
