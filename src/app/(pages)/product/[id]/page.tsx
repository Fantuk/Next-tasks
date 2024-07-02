"use client"
import React, { useEffect, useState } from "react";

import axios from "axios";
import { ICard } from "@/app/types/cardType";

function Product({params}: {params: {id: string}}) {

  const [data, setData] = useState<ICard>();

  useEffect(() => {
    if (params.id) {
      const apiUrl = `https://fakestoreapi.com/products/${params.id}`;
      axios.get(apiUrl).then((resp) => {
        const cardData = resp.data;
        setData(cardData);
        document.title = `Продукт ${cardData.title}`;
      });
    }
  }, [params.id]);

  if (!data)
    return (
      <div className="bg-gray-100 flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <h1>{data.title}</h1>
      <img className="h-48 w-48" src={data.image} alt={data.title} />
      <p>{data.description}</p>
    </div>
  );
}

export default Product;
