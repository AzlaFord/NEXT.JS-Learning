export type Review = {
  id: string;
  user: string;
  rating: number;
  comment: string;
};

export type Product = {
  id: string;
  name: string;
  reviews: Review[];
};

export const products: Product[] = [
  {
    id: '1',
    name: 'Laptop Acer',
    reviews: [
      { id: 'r1', user: 'Ana', rating: 5, comment: 'Foarte bun' },
      { id: 'r2', user: 'Ion', rating: 4, comment: 'Mulțumit' }
    ]
  },
  {
    id: '2',
    name: 'Telefon Samsung',
    reviews: [
      { id: 'r3', user: 'Maria', rating: 3, comment: 'E ok' },
      { id: 'r4', user: 'George', rating: 2, comment: 'Se mișcă greu' }
    ]
  }
];
