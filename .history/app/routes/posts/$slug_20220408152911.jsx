import { useLoaderData, json, Link } from "remix";
import { GraphQLClient, gql } from "graphql-request";
import { RichText } from "@graphcms/rich-text-react-renderer";
import BackButton from "../../components/button/backButton";
import Footer from "~/components/Footer/Footer";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from "react";
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

  data.sort((a, b) => {
    return a.posts.date - b.posts.date;
  });

  // function to sort data by date

  console.log(data);
  const BackArrow = <FaArrowLeft />;

  return (
    <div className="Post-background">
      <div className="post-Container">
        <BackButton
          btnStyle="Return_Blog_button"
          url="/blog/posts/"
          title="Back to Blog"
          image={BackArrow}
        />
        <h1 className="post-Header">{data.post.title}</h1>
        {/* <Markdown className="Markdown"> */}
        <div className="Markdown">
          <RichText
            content={data.post.content.raw.children}
            renderers={{
              code_block: ({ children }) => {
                return (
                  <pre className="line-numbers codeBackground">
                    <code className="language-js CodeMobile ">{children}</code>
                  </pre>
                );
              },
            }}
          />
          <BackButton
            btnStyle="Return_Blog_button"
            url="/blog/posts/"
            title="Back to Blog"
            image={BackArrow}
          />
        </div>
        ;{/* </Markdown> */}
      </div>
      <Footer />
    </div>
  );
}
