"use client";

import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

const HomeSliderSection = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/post/all", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            apikey: process.env.NEXT_PUBLIC_APIKEY,
          }),
        });
        const result = await response.json();
        setData(result.data.slice(0, 5));
        setLoading(false);
      } catch (error) {
        console.error("Fetch error:", error);
        setLoading(false);
      }
    };

    fetchData(); // panggil fungsi async
  }, []);

  return (
    <div className="home-slider-section shadow">
      <div className="home-carousel">
        {isLoading ? (
          <Skeleton height={425} count={1} />
        ) : (
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {data.map((item) => (
              <Carousel.Item key={item.id}>
                <Link href={"/news/" + item.slug}>
                  <div className="image-wrapper position-relative">
                    <img
                      src={item.image_url}
                      width={730}
                      height={425}
                      alt={data.slug}
                      className="object-fit-cover w-100"
                      loading="lazy"
                    />
                    <div className="image-mask"></div>
                  </div>

                  <Carousel.Caption>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </Carousel.Caption>
                </Link>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default HomeSliderSection;
