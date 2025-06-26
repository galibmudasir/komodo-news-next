"use client";
import ReactPaginate from "react-paginate";

import { useState, useEffect } from "react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

const ArchiveTagsPost = ({ tags }) => {
  if (!tags) return "tidak ada data";

  const [isLoading, setLoading] = useState(true);
  const [data, SetData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/post/tags", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            apikey: process.env.NEXT_PUBLIC_APIKEY,
            tags: tags.name,
          }),
        });
        setLoading(true);

        const result = await response.json();
        setLoading(false);
        SetData(result.data);
      } catch (error) {
        console.error(error);
        setLoading(false);
        return "gagl mendapatkan data";
      }
    };

    fetchData();
  }, []);

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="archive-post">
      {isLoading ? (
        // Tampilkan skeleton saat loading
        [...Array(5)].map((_, i) => (
          <div className="row mb-3" key={i}>
            <div className="col-5">
              <Skeleton height={200} width="100%" />
            </div>
            <div className="col-7">
              <Skeleton height={30} width="80%" />
              <Skeleton count={2} />
            </div>
          </div>
        ))
      ) : currentItems.length === 0 ? (
        // Tampilkan pesan jika tidak ada post
        <div className="text-center py-5">
          <p className="text-muted">Tidak ada post yang ditemukan.</p>
        </div>
      ) : (
        // Tampilkan post jika ada
        currentItems.map((item) => (
          <div key={item.id}>
            <Link href={"/news/" + item.slug}>
              <div className="row">
                <div className="col-5 mb-3">
                  <div className="image-wrapper">
                    <img
                      src={
                        item.image_url
                          ? item.image_url
                          : "/images/image-placeholder.jpg"
                      }
                      width={300}
                      height={200}
                      className="w-100 object-fit-cover"
                      alt={item.title}
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="col-7">
                  <h2 className="font-20 fw-bold">{item.title}</h2>
                  <div className="post-desc">{item.description}</div>
                </div>
              </div>
            </Link>
          </div>
        ))
      )}

      {data && data.length > 10 && (
        <div className="post-pagination">
          <ReactPaginate
            previousLabel={"←"}
            nextLabel={"→"}
            breakLabel={"..."}
            onPageChange={handlePageClick}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            containerClassName={"pagination"}
            activeClassName={"active"}
            pageClassName={"page-item"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            breakClassName={"px-3 py-1"}
          />
        </div>
      )}
    </div>
  );
};

export default ArchiveTagsPost;
