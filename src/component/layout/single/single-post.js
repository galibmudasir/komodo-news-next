"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faClockFour, faBook } from "@fortawesome/free-solid-svg-icons";
import Skeleton from "react-loading-skeleton";

import { dateFormatter } from "@/function/dateFormatter";
import Link from "next/link";

const SinglePost = ({ id }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/post/id", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            apikey: process.env.NEXT_PUBLIC_APIKEY,
            id: id,
          }),
        });
        const result = await response.json();
        setData(result.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        return "ada kesalahan dalam mengambil data";
      }
    };

    fetchData();
  }, [id]);

  if (!id) return "detail post tidak ditemukan";

  return (
    <article className="post-content">
      {isLoading ? (
        <div>
          <div className="post-title mb-3">
            <Skeleton height={30} />
          </div>
          <div className="post-description d-flex gap-3 mb-3">
            <div className="post-author">
              <Skeleton height={20} width={200} />
            </div>
            <div className="post-date">
              <Skeleton height={20} width={100} />
            </div>
            <div className="post-date">
              <Skeleton height={20} width={120} />
            </div>
          </div>
          <div className="post-thumbnail mb-3">
            <Skeleton height={300} />
          </div>
          <div className="post-content">
            <Skeleton count={6} />
          </div>
        </div>
      ) : data ? (
        <>
          <div className="post-title mb-3">
            <h1 className="font-25 fw-bold">{data.title}</h1>
          </div>
          <div className="post-description d-flex gap-3 mb-3">
            <div className="post-author">
              <FontAwesomeIcon icon={faUser} size="lg" />{" "}
              <small className="ms-1">{data.author}</small>
            </div>
            <div className="post-date">
              <FontAwesomeIcon icon={faClockFour} size="lg" />{" "}
              <small className="ms-1">{dateFormatter(data.date_publish)}</small>
            </div>
            <div className="post-date">
              <FontAwesomeIcon icon={faBook} size="lg" />{" "}
              <small className="ms-1">{data.category}</small>
            </div>
          </div>
          <div className="post-thumbnail mb-3">
            <img
              loading="lazy"
              src={data.image_url}
              width="400"
              className="w-100 object-fit-cover height-auto"
              alt={data.slug}
            />
          </div>
          <div className="post-content mb-5">{data.content}</div>
          {data.tags && (
            <>
              <h3 className="font-20 fw-bold mb-3">Post Tag</h3>
              <div className="post-tag d-flex flex-wrap gap-3">
                {data.tags.map((item, index) => (
                  <div className="tag-wrapper" key={index}>
                    <Link href={item.link} className="btn btn-sm btn-primary">
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      ) : (
        <div>Data tidak ditemukan</div>
      )}
    </article>
  );
};

export default SinglePost;
