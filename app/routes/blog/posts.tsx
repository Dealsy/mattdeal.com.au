import { useLoaderData, json, Link } from "remix";
import { GraphQLClient, gql } from "graphql-request";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import SectionTitle from "../../components/Sections/Section_Title/Section-title";
const GetPostsQuery = gql`
  {
    posts {
      id
      slug
      title
      excerpt
      coverImage {
        mimeType
        url
      }
      date
      author {
        name
        title
      }
    }
  }
`;

export let loader = async () => {
  const graphcms = new GraphQLClient(
    "https://api-ap-southeast-2.graphcms.com/v2/cl02ddacdazjn01za7noh7l1n/master"
  );

  const { posts } = await graphcms.request(GetPostsQuery);
  return json({ posts });
};

export default function Blog() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="blog-title-flex">
        <SectionTitle
          style="Section-Title-Blog-Header"
          title="Blog"
          subtitle="This blog is powered by Remix and GraphQL CMS"
        />
        <Link className="Home_button" to="/">
          <i className="arrow left"></i> Home
        </Link>
      </div>
      <Container className="Blog-main-container">
        <div className="BlogContainer">
          {data.posts.map(
            ({ excerpt, date, id, slug, title, coverImage, author }) => (
              <Link
                className="blog-link"
                key={id}
                to={`/posts/${slug}`}
                prefetch="intent"
              >
                <Card className="bg-dark BlogCard text-white">
                  <div className="blog-Card-Inner-Container">
                    <h3 className="blog-title">{title}</h3>
                    <p className="blog-excerpt">{excerpt}</p>
                    <p className="blog-date">Created {date}</p>
                  </div>
                  <img className="blog-image" src={coverImage.url} />
                  <div className="Author">
                    <p>Author: {author.name}</p>
                    <em>Title: {author.title}</em>
                  </div>
                </Card>
              </Link>
            )
          )}
        </div>
      </Container>
    </div>
  );
}
