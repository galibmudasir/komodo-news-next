"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

const PostModel2 = ({ title, category, jumlah }) => {
  if (!category || !jumlah) {
    return <div>not found</div>;
  }

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (category && jumlah) {
      const fetchdata = async () => {
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
          setData(result.data?.slice(0, jumlah) || []);
          setLoading(false);
        } catch (error) {
          console.error("Error saat fetch:", error);
          setLoading(false);
        }
      };

      fetchdata();
    }
  }, [category, jumlah]);

  return (
    <div className="komodo-post-model-2">
      <div className="headerpost">
        <h4>{title ? title : category}</h4>
      </div>
      <div className="blog-posts row">
        {data.map((item) => (
          <div key={item.id} className="blog-item col-6  my-3">
            {isLoading ? (
              <Skeleton height={80} count={1} />
            ) : (
              <div className="image-wrapper position-relative">
                <Link href={"/news/" + item.slug}>
                  <div className="image-content overflow-hidden">
                    <img
                      src={
                        item.image_url
                          ? item.image_url
                          : "/images/image-placeholder.jpg"
                      }
                      width={350}
                      height={230}
                      alt={item.slug}
                      className="w-100 object-fit-cover"
                      loading="lazy"
                    />
                    <div className="image-mask"></div>
                    <div className="content-wrapper position-absolute bottom-0 w-100 p-3">
                      <div className="title-post text-white">
                        <h3 className="font-18">{item.title}</h3>
                        <small className="font-12">{item.date_publish}</small>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostModel2;
