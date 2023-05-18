import { type NextComponentType } from "next";
import Image from "next/image";

// import components
import PlayerSide from "./PlayerSide";
import FoeSide from "./FoeSide";
import Card from "../SingleCard";

// import assets
import HeartIcon from "../../assets/HeartIcon";
import GoldIcon from "../../assets/GoldIcon";

const Field: NextComponentType = () => {
  return (
    <>
      <div className="absolute right-11 top-4 z-10 flex h-10 w-80 items-center justify-center rounded-lg border border-cyan-600 px-6 py-2 text-sm">
        <div className="flex flex-row items-center justify-around">
          <div className="flex w-1/2 flex-row items-center">
            <p className="mr-2">You:</p>
            <span className="flex flex-row items-center">
              <HeartIcon />
              <p className="mr-2">40</p>
            </span>
            <span className="flex flex-row items-center">
              <GoldIcon />
              <p className="mr-2">5</p>
            </span>
          </div>

          <hr className="w-10 rotate-90 border border-cyan-600" />

          <div className="flex w-1/2 flex-row items-center">
            <p className="mr-2">Foe:</p>
            <span className="flex flex-row items-center">
              <HeartIcon />
              <p className="mr-2">40</p>
            </span>
            <span className="flex flex-row items-center">
              <GoldIcon />
              <p className="mr-2">5</p>
            </span>
          </div>
        </div>
      </div>
      <FoeSide />
      <div className="border border-dashed border-cyan-600">
        <Card placeholderText={undefined} foe={undefined} />
      </div>
      <PlayerSide />
    </>
  );
};

export default Field;
