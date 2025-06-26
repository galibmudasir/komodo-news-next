"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

const PostModel1 = ({ title, category, jumlah }) => {
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
      <div className="blog-posts">
        {isLoading
          ? // Tampilkan skeleton sebanyak 5 misalnya
            [...Array(5)].map((_, i) => (
              <div className="row mb-3" key={i}>
                <div className="col-5">
                  <Skeleton height={70} width="100%" />
                </div>
                <div className="col-7">
                  <Skeleton height={10} width="80%" />
                  <Skeleton height={8} count={2} />
                </div>
              </div>
            ))
          : data.map((item) => (
              <div key={item.id} className="blog-item">
                <div className="row align-items-center gap-3">
                  <div className="col-4 pe-0 mb-2">
                    <img
                      src={
                        item.image_url
                          ? item.image_url
                          : "/images/image-placeholder.jpg"
                      }
                      width={200}
                      height={80}
                      className="w-100 object-fit-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-7 px-0">
                    <div className="post-title">
                      <Link href={"/news/" + item.slug}>
                        <h5 className="m-0">{item.title}</h5>
                      </Link>
                      <small className="date-publish">
                        {item.date_publish}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default PostModel1;
