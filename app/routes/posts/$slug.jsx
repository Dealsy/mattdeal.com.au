import { useLoaderData, json } from "remix";
import { GraphQLClient, gql } from "graphql-request";
import Markdown from "markdown-to-jsx";
import { Container } from "react-bootstrap";

const GetPostBySlug = gql`
  query ($slug: String) {
    post(where: { slug: $slug }) {
      title
      excerpt
      content {
        markdown
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
  let data = useLoaderData();

  return (
    <div className="Post-background">
      <Container>
        <div className="post-Container">
          <h1 className="post-Header">{data.post.title}</h1>
          <Markdown className="Markdown">{data.post.content.markdown}</Markdown>
        </div>
      </Container>
    </div>
  );
}
