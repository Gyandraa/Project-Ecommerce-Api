import SliderImport from "react-slick";
const Slider = SliderImport.default || SliderImport;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
export default function ProductSlider({ products = [] }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    accessibility: false,
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-6">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-3">
              <div
                className="
            bg-white rounded-2xl p-4
            shadow-sm hover:shadow-xl
            transition-all duration-300
            hover:-translate-y-2
            cursor-pointer
            flex flex-col h-full
          "
              >
                <Link
                  to={`/product/${product.id}`}
                  className="flex flex-col h-full"
                >
                  <div className="h-52 flex items-center justify-center overflow-hidden mb-4">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="
                  h-full object-contain
                  transition-transform duration-300
                  hover:scale-110
                "
                    />
                  </div>

                  <h2 className="text-2xl text-center font-semi bold text-gray-800 line-clamp-2 min-h-[45px]">
                    {product.title}
                  </h2>

                  <p className=" text-lg pt-2 font-bold">⭐{product.rating}</p>
                  <p className="text-xl   font-bold text-orange-600 mt-2">
                    ${product.price}
                  </p>

                  <p className="text-base mt-2">
                    {product.availabilityStatus === "Low Stock" ? (
                      <span className="text-red-500 font-bold">Low Stock</span>
                    ) : (
                      <span className="text-green-500 font-bold">In Stock</span>
                    )}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
