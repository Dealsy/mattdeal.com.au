import { useLoaderData, json, Link } from "remix";
import { GraphQLClient, gql } from "graphql-request";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { useEffect } from "react";
// import Markdown from "markdown-to-jsx";
import Prism from "prismjs";

const GetPostBySlug = gql`
  query ($slug: String) {
    post(where: { slug: $slug }) {
      title
      excerpt
      content {
        raw
      }
    }
  }
`;

export let loader = async ({ params }) => {
  const { slug } = params;

  const graphcms = new GraphQLClient(
    "https://api-ap-southeast-2.graphcms.com/v2/cl02ddacdazjn01za7noh7l1n/master"
  );

  const { post } = await graphcms.request(GetPostBySlug, {
    slug,
  });

  return json({ post });
};

export default function ProductPage() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  let data = useLoaderData();
  console.log(data);

  return (
    <div className="Post-background">
      <div className="post-Container">
        <Link className="Return_Blog_button" to="/blog/posts/">
          <i className="return_arrow left"></i> Back to blog
        </Link>
        <h1 className="post-Header">{data.post.title}</h1>
        {/* <Markdown className="Markdown"> */}
        <div className="Markdown">
          <RichText
            content={data.post.content.raw.children}
            renderers={{
              code_block: ({ children }) => {
                return (
                  <pre className="line-numbers">
                    <code className="language-js ">{children}</code>
                  </pre>
                );
              },
            }}
          />
        </div>
        ;{/* </Markdown> */}
        <Link className="Return_Blog_button" to="/blog/posts/">
          <i className="return_arrow left"></i> Back to blog
        </Link>
      </div>
    </div>
  );
}
