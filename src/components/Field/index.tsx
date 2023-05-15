import { type NextComponentType } from "next";

// import components
import PlayerSide from "./PlayerSide";
import FoeSide from "./FoeSide";

const Field: NextComponentType = () => {
  return (
    <>
      <FoeSide />
      <PlayerSide />
    </>
  );
};

export default Field;
