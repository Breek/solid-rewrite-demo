import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";


export default function App() {

  const rewriteMap: Record<string, string> = {
    "/blog/sunt-aut-facere.html": "/post/1",
    "/blog/qui-est-esse.html": "/post/2",
    "/blog/ea-molestias.html": "/post/3",
    // ...
  };

  const rewrite = (url: string) => {
    console.groupCollapsed("rewrite");
    console.log("url", url);
    //console.log("rewrite", rewriteMap);
    // Of course can be what ever you want...
    const u = new URL(url, "http://localhost/");
    console.log("u.pathname", u.pathname)

    console.groupEnd();
    const dest = rewriteMap[u.pathname] + u.search

    return rewriteMap[u.pathname] ? dest : url;
  };



  return (
    <Router
      transformUrl={rewrite}
      root={props => (
        <MetaProvider>
          <Title>SolidStart - Basic</Title>
          <a href="/">Index</a>
          <a href="/about">About</a>
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
