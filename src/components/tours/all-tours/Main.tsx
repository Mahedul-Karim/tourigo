import React from "react";
import AllTours from "./main/AllTours";

type Props={
  data:AllToursType[]
}

const Main:React.FC<Props> = ({data}) => {
  return (
    <>
      <AllTours data={data}/>
    </>
  );
};

export default Main;
