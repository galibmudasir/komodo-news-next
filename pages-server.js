import { supabase } from "@/libs/supabase";

async function getAllPosts() {
  const { data } = await supabase
    .from("komodo_news")
    .select("slug, date_publish");
  return data;
}

module.exports = async () => {
  const posts = await getAllPosts(); // ambil data post kamu
  return posts.map((post) => ({
    loc: `/news/${post.slug}`,
    changefreq: "daily",
    priority: 0.8,
    lastmod: new Date(post.date_publish).toISOString(),
  }));
};
