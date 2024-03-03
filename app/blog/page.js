import Link from "next/link";

export default function Blog() {
  const post = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      content:
        "Next.js is a powerful React framework that provides server-side rendering out of the box. It's an excellent choice for building modern web applications.",
      slug: "getting-started-with-next-js",
    },
    {
      id: 2,
      title: "Building Dynamic Websites with Next.js API Routes",
      content:
        "Next.js API Routes allow you to build powerful serverless functions that can be used to fetch data or perform various server-side tasks.",
      slug: "building-dynamic-websites-with-next-js-api-routes",
    },
  ];

  return (
    <div>
      <div className="blog-post-container">
        {post &&
          post.map((item, key) => (
            <div key={key}>
              <div>{item.description}</div>
              <Link href={`/blog/${item.slug}`}>{item.title}</Link>
            </div>
          ))}
      </div>
    </div>
  );
}
