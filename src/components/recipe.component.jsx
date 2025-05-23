import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./product-card";
import { products } from "../common/product";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

const RecipeSection = () => {
  const width = useWindowWidth();
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    if (width >= 1200) setVisibleCount(5);
    else if (width >= 992) setVisibleCount(4);
    else if (width >= 768) setVisibleCount(3);
    else setVisibleCount(2);
  }, [width]);

  const visibleProducts = products.slice(0, visibleCount);

  return (
    <section className="flex flex-col items-start gap-4 font-urbanist w-full">
      <header className="w-full">
        <h1 className="text-[24px] font-bold">Healthy Recipes</h1>

        <div className="flex items-center justify-between w-full mt-2">
          <p className="font-semibold text-[18px] text-primary">
            with features
          </p>
          <Link
            to="/recipes"
            className="text-quick-silver font-medium text-sm tracking-[1px]"
            aria-label="View all healthy recipes"
          >
            See all
          </Link>
        </div>
      </header>

      <div className="w-full flex flex-row gap-4 justify-start">
        {visibleProducts.map(({ id, ...rest }) => (
          <ProductCard key={id} product={{ id, ...rest }} />
        ))}
      </div>
    </section>
  );
};

export default RecipeSection;
