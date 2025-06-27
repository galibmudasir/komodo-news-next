const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  "https://wkmlmebfnqaamyuanqvb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrbWxtZWJmbnFhYW15dWFucXZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0NjgxNDMsImV4cCI6MjA2NTA0NDE0M30.jmW8cWT4Lukl5Fr0boNq0PG8Ct0CPjByxIdEqTpU2gE"
);

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
