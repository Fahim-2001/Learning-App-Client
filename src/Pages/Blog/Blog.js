import React from "react";

const Blog = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl">
          {" "}
          Question Section{" "}
        </h2>

        <div className="space-y-4 mt-10">
          <details className="w-full border rounded-lg bg-slate-800 text-white  text-left">
            <summary className="px-4 py-6 text-2xl font-semibold focus:outline-none focus-visible:ring-violet-400">
              {" "}
              What is Cors??{" "}
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              Cross-origin resource sharing is a mechanism that allows a way for
              web pages to access API or assets running on a different
              restricted domain.Today, we’ll explore CORS in-depth and learn how
              to activate it on different front-end frameworks. It is an
              HTTP-header based mechanism that allows a server to indicate any
              origins (domain, scheme, or port) other than its own from which a
              browser should permit loading resources. CORS also relies on a
              mechanism by which browsers make a "preflight" request to the
              server hosting the cross-origin resource, in order to check that
              the server will permit the actual request. In that preflight, the
              browser sends headers that indicate the HTTP method and headers
              that will be used in the actual request.
            </p>
          </details>
          <details className="w-full  border rounded-lg  text-left">
            <summary className="px-4 py-6 text-2xl font-semibold focus:outline-none focus-visible:ring-violet-400">
              Why are you using firebase ?What other options do you have to
              implement authentication?
            </summary>
            <span>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                Firebase is a free service that lets users log in with their
                Google account. Firebase is a good choice if you plan to either
                write a brand-new application or rewrite an existing one from
                scratch. Additionally, Firebase helps in the easy storing and
                retrieval of dynamic content. If you decide to develop the
                application without any form of custom coding the backend,
                Firebase makes this easy. Firebase is also serverless which
                means that Firebase runs on the cloud and you don’t need a
                physical server that’s constantly running.
              </p>
            </span>
            Yes there have another options to do implement authentication.
          </details>
          <details className="w-full border rounded-lg bg-slate-800 text-white  text-left">
            <summary className="text-2xl font-semibold px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              How does the private route work??
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              The react private route component renders a route component if the
              user is logged in and in an authorised role for the route, if the
              user isn’t logged in they’re redirected to the /login page, if the
              user is logged in but aren’t in an authorised role they’re
              redirected to the home page.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg text-left">
            <summary className="px-4  text-2xl font-semibold py-6 focus:outline-none focus-visible:ring-violet-400">
              What is Node? How does Node work?
            </summary>
            <span>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                Learn about Node.js, a JavaScript runtime for building
                server-side or desktop applications.
              </p>
            </span>
            <span>
              <p>
                Node.js is the JavaScript runtime environment which is based on
                Google’s V8 Engine i.e. with the help of Node.js we can run the
                JavaScript outside of the browser. Other things that you may or
                may not have read about Node.js is that it is single-threaded,
                based on event-driven architecture, and non-blocking based on
                the I/O model.
              </p>
            </span>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Blog;
