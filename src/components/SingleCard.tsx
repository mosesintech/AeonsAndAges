import { useState } from "react";
import Image from "next/image";

import cardData from "../data/card.json";

interface CardProps {
  foe?: boolean;
  disableHover?: boolean;
  backside?: boolean;
  placeholderText?: string;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  const { foe, disableHover, backside, placeholderText } = props;
  const [isCardLarge, setIsCardLarge] = useState(false);

  return (
    <>
      <div className="relative">
        {placeholderText ? (
          <div
            className={`${
              placeholderText === "Location" ? "border border-dashed" : ""
            } flex h-32 w-24 flex-col items-center justify-center`}
          >
            <p>{placeholderText}</p>
          </div>
        ) : (
          <>
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
              onMouseEnter={() => setIsCardLarge(true)}
              onMouseLeave={() => setIsCardLarge(false)}
              className={`fixed ${
                foe ? "bottom-1/4 right-2/3" : "left-2/3 top-1/4"
              } z-10 ${isCardLarge ? "flex" : "hidden"}`}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Card;
