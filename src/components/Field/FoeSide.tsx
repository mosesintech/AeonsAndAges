import { type NextComponentType } from "next";

// import components
import Card from "../SingleCard";

const FoeSide: NextComponentType = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="container flex w-3/5 items-center justify-center">
          <Card disableHover={true} backside={true} />
          <Card disableHover={true} backside={true} />
          <Card disableHover={true} backside={true} />
          <Card disableHover={true} backside={true} />
          <Card disableHover={true} backside={true} />
          <Card disableHover={true} backside={true} />
          <Card disableHover={true} backside={true} />
        </div>
        <div className="mt-24 flex">
          <div className="mx-2 border border-dashed">
            <Card foe={true} />
          </div>
          <div className="mx-2 border border-dashed">
            <Card foe={true} />
          </div>
          <div className="mx-2 border border-dashed">
            <Card foe={true} />
          </div>
        </div>
        <div className="absolute bottom-3/4 right-3/4">
          <div className="flex flex-row items-center">
            <div className="mx-4 border border-dashed">
              <Card disableHover={true} />
            </div>
            <div className="mx-4 border border-dashed">
              <Card disableHover={true} backside={true} />
            </div>
          </div>
        </div>

        <div className="absolute bottom-1/3 left-2/3">
          <div className="flex h-96 w-96 flex-col flex-wrap items-center justify-center border border-dashed text-white">
            <p>Allies</p>
            <div className="flex w-full">
              <div className="m-2">
                <Card foe={true} />
              </div>
              <div className="m-2">
                <Card foe={true} />
              </div>
              <div className="m-2">
                <Card foe={true} />
              </div>
              <div className="m-2">
                <Card foe={true} />
              </div>
              <div className="m-2">
                <Card foe={true} />
              </div>
            </div>

            <hr className="my-8 w-1/3 border border-dashed" />

            <p>Items</p>
            <div className="flex w-full">
              <div className="m-2">
                <Card foe={true} />
              </div>
              <div className="m-2">
                <Card foe={true} />
              </div>
              <div className="m-2">
                <Card foe={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoeSide;
