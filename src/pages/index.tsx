import { type NextPage } from "next";
import Head from "next/head";

// import components
import Card from "../components/card";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aeons and Ages | The Card Game</title>
        <meta name="description" content="Aeons and Ages: The Card Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-[#15162c] to-[#2e026d]">
        <div className="container flex items-center justify-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="container relative mx-4 my-4 flex flex-col items-center justify-center">
          <Card />
        </div>

        <div className="container relative mx-4 my-4 flex flex-col items-center justify-center">
          <Card />
        </div>
        <div className="container flex items-center justify-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </>
  );
};

export default Home;
