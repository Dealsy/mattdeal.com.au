import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";

import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import globalStylesUrl from "../styles/global.css";
import Card from "../styles/card.css";
import PrismCss from "../styles/prism.css";

export const links = () => [
  {
    rel: "stylesheet",
    href: bootstrap,
  },
  {
    rel: "stylesheet",
    href: PrismCss,
  },
  {
    rel: "stylesheet",
    href: Card,
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

function Document({ children, Title }) {
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
      <div>{children}</div>
    </>
  );
}
