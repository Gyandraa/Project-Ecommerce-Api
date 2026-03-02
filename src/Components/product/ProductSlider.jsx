import SliderImport from "react-slick";
const Slider = SliderImport.default || SliderImport;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <div className="bg-gray-50 py-10">
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

                <h2 className="text-xl text-center font-semibold text-gray-800 line-clamp-2 min-h-[45px]">
                  {product.title}
                </h2>

                <p className=" text-md  font-semibold">⭐{product.rating}</p>
                <p className="text-lg   font-bold text-orange-600 mt-2">
                  ${product.price}
                </p>

                {/* <div className="mt-4 flex items-center gap-3">
                  <button className="flex items-center justify-center w-12 h-12 rounded-xl border border-gray-300 transition duration-300 group">
                    <img
                      src="/assets/keranjang.jpg"
                      alt="keranjang"
                      className="w-6 h-6 object-contain transition duration-300 group-hover:scale-130 "
                    />
                  </button>

                  <button
                    className="flex-1 py-3 rounded-xl bg-orange-600 text-white font-semibold hover:bg-orange-700 transition duration-300"
                    tabIndex={-1}
                  >
                    Buy Now
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
