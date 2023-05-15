import { type NextComponentType } from "next";

// import components
import Card from "../SingleCard";

const PlayerSide: NextComponentType = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-24 flex">
        <div className="mx-2 border border-dashed">
          <Card placeholderText="Armor" />
        </div>
        <div className="mx-2 border border-dashed">
          <Card placeholderText="Legend" />
        </div>
        <div className="mx-2 border border-dashed">
          <Card placeholderText="Weapon" />
        </div>
      </div>
      <div className="container flex w-3/5 items-center justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="absolute left-3/4 top-3/4">
        <div className="flex flex-row items-center">
          <div className="mx-4 border border-dashed">
            <Card disableHover={true} backside={true} />
          </div>
          <div className="mx-4 border border-dashed">
            <Card disableHover={true} />
          </div>
        </div>
      </div>
      <div className="absolute right-2/3 top-1/3">
        <div className="flex h-96 w-96 flex-col flex-wrap items-center justify-center border border-dashed text-white">
          <p>Allies</p>
          <div className="flex w-full">
            <div className="m-2">
              <Card />
            </div>
            <div className="m-2">
              <Card />
            </div>
            <div className="m-2">
              <Card />
            </div>
            <div className="m-2">
              <Card />
            </div>
            <div className="m-2">
              <Card />
            </div>
          </div>

          <hr className="my-8 w-1/3 border border-dashed" />

          <p>Items</p>
          <div className="flex w-full">
            <div className="m-2">
              <Card />
            </div>
            <div className="m-2">
              <Card />
            </div>
            <div className="m-2">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerSide;
