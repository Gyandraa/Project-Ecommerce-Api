import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import type { Product } from "../../type/products";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {
  products: Product[];
};

export default function ProductSlider({ products }: Props) {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 3 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <Link to={`/product/${product.id}`}>
                <div className="h-52 flex items-center justify-center overflow-hidden mb-4">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    loading="lazy"
                    className="h-full object-contain hover:scale-110 transition"
                  />
                </div>

                <h2 className="text-lg text-center font-semibold line-clamp-2">
                  {product.title}
                </h2>

                <p className="text-center">⭐{product.rating}</p>

                <p className="text-center font-bold text-orange-600">
                  ${product.price}
                </p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
