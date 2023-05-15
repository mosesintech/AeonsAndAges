import { type NextPage } from "next";
import Head from "next/head";

// import components
import Field from '../components/Field';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aeons and Ages | The Card Game</title>
        <meta name="description" content="Aeons and Ages: The Card Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-[#15162c] to-[#2e026d]">
        <Field />
      </main>
    </>
  );
};

export default Home;
