"use client";

import PostModel1 from "@/component/layout/post/post-model-1";
import PostModel2 from "@/component/layout/post/post-model-2";
import PostSlider from "@/component/layout/post/post-slider";
import HomeSliderSection from "@/component/section/homepage/home-slider-section";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="main-content">
      <section className="banner-section-home-1">
        <div className="container py-4 text-center">
          <Image
            src={"/images/banner-home-1.jpg"}
            width={945}
            height={240}
            alt={"iklan-blibli"}
            className="shadow w-100 object-fit-cover height-auto"
          />
        </div>
      </section>
      <section className="home-section-carousel">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-8">
              <HomeSliderSection />
            </div>
            <div className="col-md-4">
              <PostModel1 category={"headline"} jumlah={"4"} />
            </div>
          </div>
          <div className="py-4 text-center">
            <Image
              src={"/images/banner-home-2.jpg"}
              width={680}
              height={85}
              alt="banner-iklan-2"
              className="object-fit-cover height-auto"
            />
          </div>
        </div>
      </section>
      <section className="home-section-slider">
        <div className="container py-4">
          <div className="d-flex justify-content-between headerpost">
            <h2 className="font-20 fw-bold">Headline</h2>
            <div className="link-news">
              <Link
                href={"/news/headline"}
                className="btn btn-sm btn-dark"
                alt={"banner-iklan-2"}
              >
                Headline
              </Link>
            </div>
          </div>
          <div className="slider-post">
            <PostSlider title={"Headline"} category={"headline"} jumlah={10} />
          </div>
        </div>
      </section>
      <section className="section-news-row">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-8">
              <div className="post-model-2">
                <PostModel2
                  title={"Headline"}
                  category={"headline"}
                  jumlah={6}
                />
              </div>
            </div>
            <div className="col-md-4">
              <PostModel1 title={"Headline"} category={"headline"} jumlah={8} />
            </div>
          </div>
        </div>
      </section>
      <section className="section-news-row section-dark bg-dark text-white pt-4">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-8">
              <div className="">
                <h2 className="font-20 fw-bold mb-3">Headline</h2>
              </div>
              <HomeSliderSection />
            </div>
            <div className="col-md-4 pt-4">
              <PostModel1 title={"Headline"} category={"headline"} jumlah={5} />
            </div>
          </div>
        </div>
      </section>
      <section className="section-news-row pt-4">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-8">
              <PostModel2 title={"Headline"} category={"headline"} jumlah={6} />{" "}
            </div>
            <div className="col-md-4 pt-4">
              <div className="banner-iklan-wrapper">
                <Image
                  src={"/images/banner-iklan-1.jpg"}
                  width={300}
                  height={300}
                  alt={"banner iklan"}
                  className="object-fit-cover"
                />
              </div>
              <PostModel1 title={"Headline"} category={"headline"} jumlah={5} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
