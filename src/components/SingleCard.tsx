import { useState } from "react";
import Image from "next/image";

import cardData from "../data/card.json";

interface CardProps {
  foe?: boolean;
  disableHover?: boolean;
  backside?: boolean;
  location?: boolean;
  placeholderText?: string;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  const { foe, disableHover, backside, location, placeholderText } = props;
  const [isCardLarge, setIsCardLarge] = useState(false);

  return (
    <>
      <div className="relative">
        {placeholderText ? (
          <div
            className={`${
              placeholderText === "Location" ? "rotate-90" : ""
            } flex h-32 w-24 flex-col items-center justify-center`}
          >
            <p
              className={`${
                placeholderText === "Location" ? "rotate-180" : ""
              }`}
            >
              {placeholderText}
            </p>
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
            {!location && (
              <>
                <Image
                  src={cardData.image}
                  alt={cardData.name}
                  width={300}
                  height={300}
                  className={`fixed ${
                    foe ? "bottom-1/4 right-2/3" : "left-2/3 top-1/4"
                  } z-10 ${isCardLarge ? "flex" : "hidden"}`}
                />
              </>
            )}
          </>
        )}
      </div>
      {location && (
        <Image
          src={cardData.image}
          alt={cardData.name}
          width={500}
          height={500}
          className={`absolute ${
            foe ? "left-1/4 top-2/3" : "right-1/4 top-0"
          } z-10 ${isCardLarge ? "flex" : "hidden"}`}
        />
      )}
    </>
  );
};

export default Card;
