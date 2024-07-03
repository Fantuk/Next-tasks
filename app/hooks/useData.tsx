import { useState, useEffect } from 'react'

import axios from 'axios'
import { IImage } from '../types/IImage';

const useData = () => {
    const [data, setData] = useState<IImage[]>()

    useEffect(() => {
        const publicKey = 'pIU4ckaIVRf-hYLoQFCT2ZcHl-8YSDydfgmJBKQs7G4'
        const apiUrl = `https://api.unsplash.com/photos/?client_id=${publicKey}`;
        axios.get(apiUrl).then((resp) => {
          const img = resp.data;
          setData(img);
        });
      }, [data]);
  return { data }
}

export default useData