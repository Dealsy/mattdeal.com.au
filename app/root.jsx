import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";

import globalStylesUrl from "../styles/global.css";
import styles from "./styles/app.css";

export const links = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
  {
    rel: "stylesheet",
    href: globalStylesUrl,
  },
];

export function meta() {
  return { title: "mattdeal.com.au" };
}

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({ children, title }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }) {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          MattDeal.com.au
        </Link>

        <ul className="nav">
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>

      <div className="container ">{children}</div>
    </>
  );
}
