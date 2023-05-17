import { type NextComponentType } from "next";

// import components
import PlayerSide from "./PlayerSide";
import FoeSide from "./FoeSide";
import Card from "../SingleCard";

const Field: NextComponentType = () => {
  return (
    <>
      <FoeSide />
      <div className="relative h-full rotate-90 border border-dashed">
        <Card location={true} placeholderText="Location" />
      </div>
      <PlayerSide />
    </>
  );
};

export default Field;
