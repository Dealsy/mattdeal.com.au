import Banner from "../components/Sections/Banner/banner.jsx";
import Footer from "~/components/Footer/Footer";
import SectionTitle from "~/components/Sections/Section_Title/Section-title.jsx";
import ProjectsNav from "../components/Nav/projectsNav";
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

  return (
    <div>
      <ProjectsNav
        Style="LA_Nav"
        url="/"
        btn="Labtn"
        content="Home"
        Blogcontent="Blog"
        Blogbtn="LaBlogButton"
      />

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
          LA Neon Events is a creative Ecommerce business owned and operated by
          La-Shea and her father Adrian. The company designs and supplies neon
          signage and event balloons tailored to your event, be it a new product
          launch, rebranding, grand opening, corporate or private function.
        </p>
        <div className="flex-text">
          <img className="LaLogo" src={LALogo}></img>

          <p>
            In the beginning the owners were using Facebook and Instagram as
            advertising platforms to promote their business and get their name
            and products out into the marketplace. This worked quite well
            initially however as time progressed it became obvious to La-Shea
            that using these platforms made it increasingly difficult to stay
            abreast and keep track of customer orders
          </p>
        </div>
        <p>
          The company started to lose business using this model as people were
          not locked into making or completing a purchase and would often just
          stop replying over messenger when La Shae followed up. Added to this
          she had to physically respond to every customer request, even if it
          was just an enquiry to buy one of their pre made Neon signs
        </p>
        <SectionTitle
          title="How I Helped Solve The Issue"
          style="Problem_Statment"
        />
        <p>LA Neon Events was my first major web app as a freelancer</p>
        <p>
          I happened to see that La-Shea had posted in a Facebook residency page
          she was looking for a web developer so I thought I would reach out,
          explain who I was and see if they would give me the opportunity to
          build their Ecommerce site. Luckily for me La-Shea was kind enough to
          grant me the role and thus I began the building process.
        </p>
        <p>
          {" "}
          I built LA Neon Events from the ground up with only a very basic
          knowledge of Ecommerce sites, as typically in the past I had worked on
          landing pages or web apps. This was my first Ecommerce project.
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
          In this section, I will give an overview of the core features of LA
          Neon Events and what they do. You can also visit their official site
          for more information or to purchase a Neon Light for yourself by
          clicking this link :{" "}
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
          The Call To Action banner will take the user straight to the shop, and
          hopefully inspire an impulse buy
        </p>
        <p>
          {" "}
          The Featured Products section creates an opportunity for the user to
          impulse buy one of the featured products. These product in this
          section are the best sellers and thus should create more sales for
          La-Shea{" "}
        </p>
        <p>
          {" "}
          The Instagram section is purely to showcase LA Neon Events’ products,
          and its a great way for users to see what they will be buying or to
          mimic or duplicate the creative events featured.
        </p>
        <SectionTitle title="Shop Page" style="Problem_Statment_map" />
        <p>
          {" "}
          The shop page is where the user will find all of the items for sale,
          or they can refine their search by using the built in ‘search’ field
          or the ‘search by category’ field on this page.
        </p>
        <img className="Instagram" src={Shop}></img>
        <SectionTitle title="Product Page" style="Problem_Statment_map" />
        <p>
          The Product page displays information about the product that the user
          has selected. For each product they will see:
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
            for customers to just open up and start using. An added bonus here
            is for developers - all we need to do is reference some ID classes
            on the products that we want to add to the cart, so when a user hits
            add to cart, Snipcart looks at that ID and adds the item straight
            into the cart.
          </p>
        </div>
        <p>
          {" "}
          Snipcart also allows us to have custom fields. In the case of LA Neon
          Events, there are some products that require fields for more
          information, such as a name, colour or size of the object
        </p>
        <div className="flex-image-left">
          <img className="Checkout" src={Checkout}></img>
          <p>
            {" "}
            Snipcart doesn't just give us a cart, it also handles the full
            checkout process, from the customer entering all their details like
            name. address etc, to then taking payment from the user, and even
            sending them an invoice once the transaction is completed.{" "}
          </p>
        </div>
        <SectionTitle title="Custom Neons" style="Problem_Statment_map" />
        <p>LA Neon Events Offers custom neon signs for its customers</p>
        <div className="flex-image-right">
          <img className="Custom" src={Custom}></img>
          <p>
            I went and built a screen which was interactive with the user. This
            allows them to choose a name, a color, and a background which gives
            the customer a good idea of what they are purchasing.
          </p>
        </div>
        <p>
          Once the user has created their sign they then submit the form. From
          here La-Shea will receive an email with all the order details, which
          she can then process and get ready to ship.
        </p>
        <SectionTitle title="Storyblok" style="Problem_Statment_map" />
        <p> The last section is Stroyblok.</p>
        <p>
          Storyblok is the driving force for this website. It’s a Headless CMS
          which allows La-Shea to upload all of her products and update all of
          her content on the website, without having to refer to me every time
          she needs to make a change.
        </p>
        <p>
          {" "}
          The way it works is, I call the Storyblok API and then render the
          products out in a map function.
        </p>
        <p>
          Then, if La-Shea opens up the Storyblok management screen, she can
          add, remove or update a product or any content on the page, and it
          will automatically appear on the screen for her users to see, like
          magic!
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
          LA Neon Events is a Ecommerce site that sells Neon Signage, and allows
          customers to build their own custom signs.
        </p>
        <p>
          The site is built using React.JS and incorporates Snipcart and
          Stroyblok as a headless CMS
        </p>
      </Container>
      <Footer />
    </div>
  );
}
