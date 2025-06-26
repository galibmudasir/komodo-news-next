import { notFound } from "next/navigation";
import { capitalizeFirstLetter } from "@/function/uppercaseletter";
import SidebarArchive from "@/component/layout/archive-post/sidebar-archive";
import SinglePage from "@/component/layout/single/single-page";

async function getPageData(slug) {
  const res = await fetch(`${process.env.NEXT_BASEURL}/api/page/slug`, {
    method: "POST",
    cache: "no-store", // opsional: supaya tidak di-cache
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      apikey: process.env.NEXT_PUBLIC_APIKEY,
      slug: slug,
    }),
  });

  if (!res.ok) return null;

  const data = await res.json();
  return data;
}

export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ cukup destructuring biasa, gak perlu await
  const post = await getPageData(slug); // ✅ ini memang perlu await

  if (!post?.data) return {};

  return {
    title: `${post.data.title} | komodo news`,
    description: post.data.description || post.data.title,
    keywords: post.data.tags?.join(", "),
    openGraph: {
      title: post.data.title,
      description: post.data.meta_title || post.data.title,
      images: [post.data.thumbnail_url],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.data.title,
      description: post.data.meta_title || post.data.title,
      images: [post.data.thumbnail_url],
    },
    alternates: {
      canonical: `${process.env.NEXT_BASEURL}/news/${slug}`,
    },
  };
}

export default async function KomodPage({ params }) {
  const { slug } = await params;
  const page = await getPageData(slug);

  const pageData = await page.data;

  if (!pageData) return notFound();

  return (
    <main className="max-w-3xl mx-auto p-4">
      <section className="archive-post">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-8">
              <div className="cat-header">
                <h1 className="font-25 fw-bold">
                  <div className="headerpost mb-4">
                    <h1 className="font-20 fw-bold">
                      {capitalizeFirstLetter(pageData.title)}
                    </h1>
                  </div>
                </h1>
                <div className="post-wrapper">
                  <SinglePage pageData={pageData} />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <aside>
                <div>
                  <SidebarArchive />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
