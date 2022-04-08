import { useLoaderData, json, Link } from "remix";
import { GraphQLClient, gql } from "graphql-request";
import { Container } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import BackButton from "../../components/button/backButton";
import Footer from "../../components/Footer/Footer";
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
  console.log(posts);
  // posts.sort((a, b) => {
  //   return a.posts.date - b.posts.date;
  // });

  return json({ posts });
};

export default function Blog() {
  const data = useLoaderData();
  const BackArrow = <FaArrowLeft />;
  console.log(data);
  return (
    <div>
      <div className="blog-title-flex">
        <div className="blogtitle">
          <SectionTitle
            style="Section-Title-Blog-Header"
            title="Blog"
            subtitle="This blog is powered by Remix and GraphQL CMS"
          />
        </div>
        <BackButton
          btnStyle="Home_button"
          url="/"
          title="Home"
          image={BackArrow}
        />
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
                    <div className="Author">
                      <p>Author: {author.name}</p>
                      <em>Title: {author.title}</em>
                    </div>
                  </div>
                  <img className="blog-image" src={coverImage.url} />
                </Card>
              </Link>
            )
          )}
        </div>
      </Container>
      <Footer />
    </div>
  );
}
