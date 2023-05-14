import { useState } from "react";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

// import components
import cardData from "../data/card.json";

const Home: NextPage = () => {
  const [isMyLegendLarge, setIsMyLegendLarge] = useState(false);
  const [isOpponentLegendLarge, setIsOpponentLegendLarge] = useState(false);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#15162c] to-[#2e026d]">
        <div className="container relative mx-4 my-16 flex flex-col items-center justify-center">
          <Image
            src={cardData.image}
            alt="Iados, Devil"
            width={100}
            height={100}
            onMouseEnter={() => setIsOpponentLegendLarge(true)}
          />
          <Image
            src={cardData.image}
            alt="Iados, Devil"
            width={300}
            height={300}
            onMouseLeave={() => setIsOpponentLegendLarge(false)}
            className={`absolute z-10 ${
              isOpponentLegendLarge ? "flex" : "hidden"
            }`}
          />
        </div>

        <div className="container relative mx-4 my-16 flex flex-col items-center justify-center">
          <Image
            src={cardData.image}
            alt="Iados, Devil"
            width={100}
            height={100}
            onMouseEnter={() => setIsMyLegendLarge(true)}
          />
          <Image
            src={cardData.image}
            alt="Iados, Devil"
            width={300}
            height={300}
            onMouseLeave={() => setIsMyLegendLarge(false)}
            className={`absolute z-10 ${isMyLegendLarge ? "flex" : "hidden"}`}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
