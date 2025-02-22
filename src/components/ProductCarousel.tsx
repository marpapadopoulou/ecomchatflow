
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel = ({ products }: ProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <div className="mt-4 relative">
      <div className="flex items-center gap-4 overflow-x-auto p-2 scrollbar-none">
        {products.map((product, idx) => (
          <div
            key={product.id}
            className={`flex-shrink-0 w-48 glass rounded-lg p-3 transition-all duration-300 transform ${
              idx === currentIndex ? "scale-105" : "scale-100 opacity-75"
            }`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-cover rounded-md mb-3"
            />
            <h3 className="text-sm font-medium">{product.name}</h3>
            <p className="text-sm text-primary mt-1">{product.price}</p>
          </div>
        ))}
      </div>
      {products.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:bg-secondary transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:bg-secondary transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </>
      )}
    </div>
  );
};

export default ProductCarousel;
