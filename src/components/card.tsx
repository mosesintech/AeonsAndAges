import { useState } from "react";
import { type NextComponentType } from "next";
import Image from "next/image";

import cardData from "../data/card.json";

const Card: NextComponentType = () => {
  const [isCardLarge, setIsCardLarge] = useState(false);

  return (
    <div className="relative">
      <Image
        src={cardData.image}
        alt={cardData.name}
        width={100}
        height={100}
        onMouseLeave={() => setIsCardLarge(false)}
        onMouseEnter={() => setIsCardLarge(true)}
      />
      <Image
        src={cardData.image}
        alt={cardData.name}
        width={300}
        height={300}
        className={`fixed left-2/3 top-1/4 z-10 ${
          isCardLarge ? "flex" : "hidden"
        }`}
      />
    </div>
  );
};

export default Card;
