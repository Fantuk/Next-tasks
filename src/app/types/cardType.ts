export interface ICard {
    id: number,
    image: string,
    title: string,
    description: string,
    price: number,
    rating: {
        rate: number,
        count: number
    }
}