import { useState } from "react";
import Image from "next/image";

import cardData from "../data/card.json";

interface CardProps {
  disableHover?: boolean;
  backside?: boolean;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  const { disableHover, backside } = props;
  const [isCardLarge, setIsCardLarge] = useState(false);

  return (
    <div className="relative">
      <Image
        src={backside ? "/images/backside.png" : cardData.image}
        alt={backside ? "Aeons and Ages: The Card Game" : cardData.name}
        width={100}
        height={100}
        onMouseEnter={() => {
          if (disableHover) return;
          return setIsCardLarge(true);
        }}
        onMouseLeave={() => setIsCardLarge(false)}
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
