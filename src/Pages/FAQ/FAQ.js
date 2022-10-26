import React from "react";

const FAQ = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          How it works
        </p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Is there any live support for students?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Yes, Of Course. We have support sessions 3 times a day. Moreover
                you can post your problems in our Facebook group.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Is there Job placement opportunity in this academy?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Yes, we have job placement opportunity for the top 5% percent
                students of each courses.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              How the courses go?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>Yes you can see our course roadmaps in each courses.</p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
