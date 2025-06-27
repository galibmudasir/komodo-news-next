import SidebarArchive from "@/component/layout/archive-post/sidebar-archive";
import { notFound } from "next/navigation";
import SinglePost from "@/component/layout/single/single-post";
import PostModel2 from "@/component/layout/post/post-model-2";

async function getPostData(slug) {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASEURL
        ? process.env.NEXT_PUBLIC_BASEURL
        : "https://komodo-news.vercel.app"
    }/api/post/slug`,
    {
      method: "POST",
      cache: "no-store", // opsional: supaya tidak di-cache
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        apikey: process.env.NEXT_PUBLIC_APIKEY,
        slug: slug,
      }),
    }
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data;
}

export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ cukup destructuring biasa, gak perlu await
  const post = await getPostData(slug); // ✅ ini memang perlu await

  if (!post?.data) return {};

  return {
    title: `${post.data.title} | Nama Website`,
    description: post.data.description || post.data.title,
    keywords: post.data.tags?.join(", "),
    openGraph: {
      title: post.data.title,
      description: post.data.description || post.data.title,
      images: [post.data.image_url],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.data.title,
      description: post.data.description || post.data.title,
      images: [post.data.image_url],
    },
    alternates: {
      canonical: `${
        process.env.NEXT_PUBLIC_BASEURL
          ? process.env.NEXT_PUBLIC_BASEURL
          : "https://komodo-news.vercel.app"
      }/news/${slug}`,
    },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post.data) return notFound();

  return (
    <main className="container py-5">
      <div className="post-wrapper py-4">
        <div className="row">
          <div className="col-md-8">
            <SinglePost id={post?.data?.id} />
            <div className="mt-4">
              <PostModel2 category={"headline"} jumlah={4} />
            </div>
          </div>
          <div className="col-md-4">
            <SidebarArchive />
          </div>
        </div>
      </div>
    </main>
  );
}
