import { notFound } from "next/navigation";
import { capitalizeFirstLetter } from "@/function/uppercaseletter";
import ArchivePost from "@/component/layout/archive-post/category-archive";
import SidebarArchive from "@/component/layout/archive-post/sidebar-archive";

async function getCategoryData(slug) {
  const res = await fetch(`${process.env.NEXT_BASEURL}/api/category/slug`, {
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

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const category = await getCategoryData(slug);

  if (!category.data) return notFound();

  return (
    <main className="max-w-3xl mx-auto p-4">
      <section className="archive-post">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-8">
              <div className="cat-header">
                <h1 className="font-25 fw-bold">
                  <div className="headerpost mb-4">
                    {capitalizeFirstLetter(category?.data?.name)}
                  </div>
                </h1>
                <div className="post-wrapper">
                  <ArchivePost category={category.data} />
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
