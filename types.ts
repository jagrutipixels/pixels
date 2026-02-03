
export interface Fruit {
  id: string;
  name: string;
  scientificName: string;
  category: 'Mango' | 'Apple' | 'Grapes';
  season: string;
  description: string;
  price: number;
  unit: string;
  image: string;
  color: string;
  benefits: string[];
}

export interface CartItem extends Fruit {
  quantity: number;
}
