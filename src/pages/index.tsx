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
        <title>Aeons and Ages | The Card Game</title>
        <meta name="description" content="Aeons and Ages: The Card Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#15162c] to-[#2e026d]">
        <div className="container relative flex items-center justify-center">
          <Image
            src={cardData.image}
            alt={cardData.name}
            width={100}
            height={100}
          />
          <Image
            src={cardData.image}
            alt={cardData.name}
            width={100}
            height={100}
          />
          <Image
            src={cardData.image}
            alt={cardData.name}
            width={100}
            height={100}
          />
          <Image
            src={cardData.image}
            alt={cardData.name}
            width={100}
            height={100}
          />
          <Image
            src={cardData.image}
            alt={cardData.name}
            width={100}
            height={100}
          />
        </div>
        <div className="container relative mx-4 my-16 flex flex-col items-center justify-center">
          <Image
            src={cardData.image}
            alt={cardData.name}
            width={100}
            height={100}
            onMouseEnter={() => setIsOpponentLegendLarge(true)}
          />
          <Image
            src={cardData.image}
            alt={cardData.name}
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
            alt={cardData.name}
            width={100}
            height={100}
            onMouseEnter={() => setIsMyLegendLarge(true)}
          />
          <Image
            src={cardData.image}
            alt={cardData.name}
            width={300}
            height={300}
            onMouseLeave={() => setIsMyLegendLarge(false)}
            className={`absolute z-10 ${isMyLegendLarge ? "flex" : "hidden"}`}
          />
        </div>
        <div className="container relative flex items-center justify-center">
          <Image
            src={cardData.image}
            alt={cardData.name}
            width={100}
            height={100}
          />
          <Image
            src={cardData.image}
            alt={cardData.name}
            width={100}
            height={100}
          />
          <Image
            src={cardData.image}
            alt={cardData.name}
            width={100}
            height={100}
          />
          <Image
            src={cardData.image}
            alt={cardData.name}
            width={100}
            height={100}
          />
          <Image
            src={cardData.image}
            alt={cardData.name}
            width={100}
            height={100}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
