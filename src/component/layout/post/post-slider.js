"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ BUKAN dari "swiper"
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";

const PostSlider = ({ category, jumlah }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/post/category", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            apikey: process.env.NEXT_PUBLIC_APIKEY,
            category: category,
          }),
        });

        const result = await response.json();
        setData(result.data.slice(0, jumlah));
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        return (
          <div className="text-center">ada kesalahan dalam mengambil data</div>
        );
      }
    };

    fetchData();
  }, [category, jumlah]);
  if (!category || !jumlah) {
    return <div className="text-center"> tidak ada post</div>;
  }

  return (
    <div className="post-slider">
      {isLoading ? (
        <Skeleton height={80} count={1} />
      ) : (
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 5000, // waktu antar slide (ms)
            disableOnInteraction: false, // tetap autoplay walau user swipe
          }}
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {data.map((item) => {
            return (
              <SwiperSlide key={item.id} className="post-slider-wrapper">
                <Link href={"/news/" + item.slug}>
                  <div className="image-wrapper">
                    <img
                      src={item.image_url}
                      width={250}
                      height={180}
                      alt={item.slug}
                      className="object-fit-cover w-100"
                      loading="lazy"
                    />
                  </div>
                  <div className="content-wrapper py-2">
                    <div className="post-title">
                      <h3 className="font-20 fw-bold">{item.title}</h3>
                    </div>
                    <div className="post-category">
                      <div className="text-danger font-12">{item.category}</div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};

export default PostSlider;
