import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import axios from "axios";
import { ICard } from "@/app/types/cardType";

function Product() {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState<ICard>();

  useEffect(() => {
    if (id) {
      const apiUrl = `https://fakestoreapi.com/products/${id}`;
      axios.get(apiUrl).then((resp) => {
        const cardData = resp.data;
        setData(cardData);
        document.title = `Продукт ${cardData.title}`;
      });
    }
  }, [id]);

  if (!data)
    return (
      <div className="bg-gray-100 flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <div className="flex items-center justify-center">
      <h1>{data.title}</h1>
      <img src={data.image} alt={data.title} />
      <p>{data.description}</p>
    </div>
  );
}

export default Product;
