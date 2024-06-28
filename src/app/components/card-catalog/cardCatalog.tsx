"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { ICard } from '@/app/types/cardType'
import Card from '../card/card'
import CardSwitcher from '../card-switcher/cardSwitcher'
import useResize from '@/app/hooks/useResize'

function CardCatalog() {
    const [data, setData] = useState<ICard[]>()
    const {width} = useResize()

    useEffect(() => {
        const apiUrl = `https://fakestoreapi.com/products`;
        axios.get(apiUrl).then((resp) => {
          const cardData = resp.data;
          setData(cardData);
          document.title = "Catalog"
        });
      }, []);

      if (!data) return <div className='flex items-center justify-center'>Loading...</div>

      if (width <= 768) return <CardSwitcher />

  return (
    <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ps-5 pe-5'>
        {data.map((card: ICard) => (
            <Card 
            key={card.id}
            card={card}/>
        ))}
    </div>
  )
}

export default CardCatalog