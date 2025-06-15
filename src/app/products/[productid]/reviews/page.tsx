import { products, Product, Review } from './../../../lib/data';
import type { JSX } from 'react';

export default function ReviewsPage(): JSX.Element {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Recenzii pentru toate produsele</h1>
      <ul className="space-y-6">
        {products.map((product: Product) => (
          <li key={product.id} className="border p-4 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <ul className="mt-2 space-y-2 pl-4">
              {product.reviews.map((review: Review) => (
                <li key={review.id} className="text-sm border-l-4 border-blue-500 pl-2">
                  <strong>{review.user}</strong> – {review.comment} ({review.rating}/5)
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
