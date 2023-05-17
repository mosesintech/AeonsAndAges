import { type NextComponentType } from "next";

// import components
import PlayerSide from "./PlayerSide";
import FoeSide from "./FoeSide";
import Card from "../SingleCard";

const Field: NextComponentType = () => {
  return (
    <>
      <FoeSide />
      <div className="border border-dashed">
        <Card placeholderText={undefined} foe={undefined} />
      </div>
      <PlayerSide />
    </>
  );
};

export default Field;
