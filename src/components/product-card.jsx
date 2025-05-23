import { Star } from "lucide-react";

const ProductCard = ({ product }) => {
  const { image, name, category, rating } = product;

  return (
    <div className="relative w-full min-w-[170px]">
      <div className="relative z-10 w-[180px] h-[180px] overflow-hidden rounded-t-full -mb-32 -ml-3">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col justify-end h-[200px] w-[170px] bg-white rounded-t-full p-3 shadow-lg">
        <div className="space-y-2">
          <h2
            className="font-bold text-lg truncate"
            title={name}
            aria-label={`Product name: ${name}`}
          >
            {name}
          </h2>

          <div className="flex justify-between items-center font-semibold">
            <p className="text-gray-600 truncate text-sm" title={category}>
              {category}
            </p>

            <div
              className="flex justify-center items-center bg-primary w-10 h-6 rounded gap-1"
              role="img"
              aria-label={`Rating: ${rating} out of 5`}
            >
              <Star color="white" size={12} />
              <p className="text-white text-xs">{rating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
