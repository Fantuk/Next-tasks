import React from "react";

import { ICard } from "@/app/types/cardType";

function Card({ card }: { card: ICard }) {
  const { image, title, price } = card;
  const { rate, count } = card.rating;
  return (
    <a href="##" className="bg-gray-100 p-5 flex flex-col items-center justify-center">
      <div className="aspect-square w-full overflow-hidden rounded-l xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain object-center"
        />
      </div>
      <h3>{title}</h3>
      <p>${price}</p>
      <p>{rate} звезд</p>
      <p>{count} отзывов</p>
    </a>
  );
}

export default Card;
