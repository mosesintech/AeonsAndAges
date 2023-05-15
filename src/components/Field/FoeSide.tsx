import { type NextComponentType } from "next";

// import components
import Card from "../SingleCard";

const FoeSide: NextComponentType = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="container flex items-center justify-center">
          <Card disableHover={true} backside={true} />
          <Card disableHover={true} backside={true} />
          <Card disableHover={true} backside={true} />
          <Card disableHover={true} backside={true} />
          <Card disableHover={true} backside={true} />
          <Card disableHover={true} backside={true} />
          <Card disableHover={true} backside={true} />
        </div>
        <div className="my-4">
          <Card />
        </div>
        <div className="absolute bottom-1/2 right-3/4">
          <div className="flex flex-row items-center">
            <div className="mx-4">
              <Card disableHover={true} />
            </div>
            <div className="mx-4">
              <Card disableHover={true} backside={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoeSide;
