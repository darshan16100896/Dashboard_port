import Layout from "@/components/Layout";

export default function Articles() {
  const posts = [
    { title: "My First UX Article", link: "https://linkedin.com" },
    { title: "Design Thinking Process", link: "https://linkedin.com" },
  ];

  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-6">Articles</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <a
            key={i}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl shadow-md bg-gray-100 dark:bg-gray-800 hover:shadow-xl transition"
          >
            {post.title}
          </a>
        ))}
      </div>
    </Layout>
  );
}
