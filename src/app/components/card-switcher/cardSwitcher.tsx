import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'

import { ICard } from '@/app/types/cardType'
import Card from '../card/card'

function CardSwitcher() {
    const [data, setData] = useState<ICard>()
    const [card, setCard] = useState(1)

    useEffect(() => {
        const apiUrl = `https://fakestoreapi.com/products/${card}`;
        axios.get(apiUrl).then((resp) => {
          const cardData = resp.data;
          setData(cardData);
          document.title = "Catalog"
        });
      }, [card]);

    const nextCard = () => {
        return card < 20 ? setCard(card + 1) : ""
    }

    const prevCard = () => {
        return card > 1 ? setCard(card - 1) : ""
    }

      if (!data) return <div className='bg-gray-100 flex items-center justify-center'>Loading...</div>
  return (
    <div className='ps-5 pe-5 flex flex-col gap-5 items-center'>
      <Link href={`/product/${data.id}`}>
        <Card card={data}/>
      </Link>
        <div className='flex items-center gap-3 mt-3'>
            <button className='bg-gray-100 p-2' onClick={() => prevCard()}>&lt;</button>
            <p>{card}/20</p>
            <button className='bg-gray-100 p-2' onClick={() => nextCard()}>&gt;</button>
        </div>
    </div>
  )
}

export default CardSwitcher