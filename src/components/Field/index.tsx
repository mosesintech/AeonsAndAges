import { type NextComponentType } from "next";

// import components
import PlayerSide from "./PlayerSide";
import FoeSide from "./FoeSide";
import Card from "../SingleCard";

const Field: NextComponentType = () => {
  return (
    <>
      <FoeSide />
      <Card placeholderText={undefined} foe={undefined} />
      <PlayerSide />
    </>
  );
};

export default Field;
