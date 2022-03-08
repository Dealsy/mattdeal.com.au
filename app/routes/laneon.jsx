import Banner from "../components/Sections/Banner/banner.jsx";
import Footer from "~/components/Footer/Footer";
import SectionTitle from "~/components/Sections/Section_Title/Section-title.jsx";
import { Link } from "remix";
import Tech from "../components/Technologies/Technologies";
import { Container } from "react-bootstrap";
import {
  SiRedux,
  SiTailwindcss,
  SiJavascript,
  SiBootstrap,
  SiStoryblok,
  SiNetlify,
  SiFirebase,
} from "react-icons/si";
import { FaStripe, FaReact, FaCss3Alt } from "react-icons/fa";

import LALogo from "../../public/assets/images/lalogo.jpg";
import Instagram from "../../public/assets/images/Instagram.png";
import Featured from "../../public/assets/images/featured.png";
import LaBanner from "../../public/assets/images/LaBanner.png";
import Shop from "../../public/assets/images/Shop.png";
import Product from "../../public/assets/images/product.png";
import Cart from "../../public/assets/images/Cart.png";
import Checkout from "../../public/assets/images/Checkout.png";
import Custom from "../../public/assets/images/Custom.png";
import { FaArrowLeft } from "react-icons/fa";

export default function LaNeon() {
  const ReactIcon = <FaReact />;
  const ReduxIcon = <SiRedux />;
  const JSIcon = <SiJavascript />;
  const CSS = <FaCss3Alt />;
  const TailwindIcon = <SiTailwindcss />;
  const BootstrapIcon = <SiBootstrap />;
  const StoryblokIcon = <SiStoryblok />;
  const StripeIcon = <FaStripe />;
  const NetlifyIcon = <SiNetlify />;
  const FirebaseIcon = <SiFirebase />;
  const Arrow = <FaArrowLeft />;

  return (
    <div>
      <nav className="LA_Nav">
        <Link className="La-home" to="/">
          <button className="La_Button_style ">
            <div className="flex-Button">
              <div className="ArrowSpace">{Arrow}</div>
              <div>Home</div>
            </div>
          </button>
        </Link>
      </nav>
      <Banner
        subheaderCss="subheader_LA"
        headerCss="header_LA"
        style="banner_LA"
        image={Featured}
        header="LA Neon Events"
        imageCss="banner_logo"
      />
      <Container className="layout Problem-Statement-Text">
        <div></div>
        <SectionTitle title="Problem Statment" style="Problem_Statment" />
        <p>
          LA Neon Events is an Ecommerce website that sells Neon Signage and
          event Baloons and is owned and operated by La-Shea and her Dad Adrian.
        </p>
        <div className="flex-text">
          <img className="LaLogo" src={LALogo}></img>

          <p>
            La-Shea and Adrian have being using Facebook and Instagram to
            advertise and sell their products, this was working at the start of
            the business, But now as time has gone on La-Shea has discovered
            that it is to hard to keep up with customer orders through these
            soical media platforms.
          </p>
        </div>
        <p>
          She started to lose business as people were never locked into buying
          something and would often just stop replying over messenger, on top of
          that she had to handle every customer request, right down to someone
          just wanting to buy one of the pre made Neon signs
        </p>
        <SectionTitle
          title="How I Helped Solve The Issue"
          style="Problem_Statment"
        />
        <p>
          LA Neon Events was my first major web app as a freelancer, I happened
          to see that La-Shea had posted in a facebook resdiancey page, that she
          was after a web developer
        </p>
        <p>
          I thought I would just reach out, explain who I was and see if I could
          get the job, Luckly for me La-Shea was kind enough to give me this
          role and so I began the proccess of building the site.
        </p>
        <p>
          {" "}
          I built LA Neon Events from the ground up with only a very basic
          knowdlege of Ecommerce sites, as typically in the past, I had worked
          on landing pages or web apps but never Ecommerce.
        </p>
        <SectionTitle title="Technologies Used" style="Problem_Statment_Tech" />
        <div className="Tech_div">
          <Tech
            React={ReactIcon}
            Redux={ReduxIcon}
            JS={JSIcon}
            CSS={CSS}
            Tailwind={TailwindIcon}
            Bootstrap={BootstrapIcon}
            Storyblok={StoryblokIcon}
            Stripe={StripeIcon}
            Netlify={NetlifyIcon}
            Firebase={FirebaseIcon}
          />
        </div>

        <SectionTitle title="LA Neon Overview" style="Problem_Statment" />
        <p>
          {" "}
          LA Neon Events is an Ecommerce site that sell Neon Lighted signages
          and party supplies.{" "}
        </p>
        <p>
          They also offer Custom built Neon Signs and Signages and Lights for
          Event hire.
        </p>
        <p>
          In this section, I will run over the core features ofLA Neon Events
          and what they do, you can visit the official site for more information
          and to purchase a Neon Light for yourself by clicking this link{" "}
          <a
            className="Pro-Tekt-Link"
            href="https://epic-shirley.netlify.app/"
            target="_blank"
          >
            LA Neon Events
          </a>
          .
        </p>
        <SectionTitle title="Home Page" style="Problem_Statment_map" />
        <p>The home page consists of three parts:</p>
        <div className="flex-text">
          <ul type="none">
            <li>
              {" "}
              <img className="Instagram" src={LaBanner}></img>
            </li>
            <li>
              {" "}
              <img className="Instagram" src={Featured}></img>
            </li>
            <li>
              {" "}
              <img className="Instagram" src={Instagram}></img>
            </li>
          </ul>

          <ul type="bullet">
            <li>Call to Action Banner</li>
            <li>Featured Products</li>
            <li>Instagram Feed</li>
          </ul>
        </div>
        <p>
          {" "}
          The Call to action banner will take the user straight to the shop, and
          hopefully inspire an implus buy
        </p>
        <p>
          {" "}
          The Featured Products section is an oppurtunity for the user to
          impluse buy one of the Featured products, These products are the best
          sellers and this should create more sales for La-Shea{" "}
        </p>
        <p>
          {" "}
          The instagram section is purley to show off LA Neon Events products,
          and its a great way for users to see what they will be buying
        </p>
        <SectionTitle title="Shop Page" style="Problem_Statment_map" />
        <p>
          {" "}
          The shop page is where the user can find all of the items for sale,
          there is a search field and a search by category field as well.
        </p>
        <img className="Instagram" src={Shop}></img>
        <SectionTitle title="Product Page" style="Problem_Statment_map" />
        <p>
          The Product page displays information about the product that the user
          has selected, from here they can see a:
        </p>
        <div className="flex-image-left">
          <img className="Product" src={Product}></img>

          <ul>
            <li>Price</li>
            <li>Description</li>
            <li>FAQs about the item</li>
            <li>Add to Cart button</li>
            <li>
              Below the product they can some examples of products that are like
              the one they have selected.
            </li>
          </ul>
        </div>
        <SectionTitle title="Shopping Cart" style="Problem_Statment_map" />
        <p>
          {" "}
          The shopping cart is built using a third part company called{" "}
          <a href="https://snipcart.com/" target="_blank">
            snipcart
          </a>{" "}
        </p>
        <div className="flex-image-right">
          <img className="Cart" src={Cart}></img>
          <p>
            Snipcart provide a fully fleshed out and functional cart experience
            for our users to just open up and start using, and the nice thing is
            for developers, all we need to do is reffrence some ID classes on
            the prodcuts that we want to be able to add to the cart, so when a
            user hits add to cart, snipcart looks at that ID and then can add
            the item straight into the cart.
          </p>
        </div>
        <p>
          {" "}
          Snipcart also allows us to have custom fields, In the case of LA Neon
          Events, There are some products that require fields for more
          information, such as a name, colour or size of the object
        </p>
        <div className="flex-image-left">
          <img className="Checkout" src={Checkout}></img>
          <p>
            {" "}
            Snipcart doesn't just give us a cart, it also handles the full
            checkout proccess, from entering all of your details like name.
            address etc, to taking payment from the user, and even sending them
            an invoice once the transaction is completed.{" "}
          </p>
        </div>
        <SectionTitle title="Custom Neons" style="Problem_Statment_map" />
        <p>LA Neon Events Offers custom neon signs for its customers</p>
        <div className="flex-image-right">
          <img className="Custom" src={Custom}></img>
          <p>
            I went and built a screen that allows the user to interact with,
            which allows them to choose a name and a color with a background to
            get a good idea of what it is that they will be buying
          </p>
        </div>
        <p>
          Once the user has created their sign, they can submit the form and
          La-Shea will receive an email with all of the details to get that
          ready to ship.
        </p>
        <SectionTitle title="Storyblok" style="Problem_Statment_map" />
        <p>
          {" "}
          The Last section is Stroyblok, Storyblok is the main thing driving
          this website, it is a Headless CMS which allows La-Shea to upload all
          of her products, and update all of her content on the website, without
          having to come back to me every time she wants to make a change
        </p>
        <p>
          The way it works is, I call the Storyblok API and then render the
          products out in a map function.
        </p>
        <p>
          {" "}
          Then if La-Shea opens up the Storyblok management screen, she can add,
          remove or update a product or any content on the page, and it will
          automatically appear on the screen for her users to see, like magic!
        </p>
        <p>
          You can checkout Stroyblok{" "}
          <a href="https://www.storyblok.com/" target="_blank">
            Here
          </a>
        </p>
        <SectionTitle title="Conclusion" style="Problem_Statment" />
        <p>
          {" "}
          LA Neon events is a Ecommerce site that sells Neon Signage, and allows
          customers to build out there own custom signs.
        </p>
        <p>
          Which is built on React.JS utilising Snipcart and Stroyblok as a
          headless CMS
        </p>
      </Container>
      <Footer />
    </div>
  );
}
