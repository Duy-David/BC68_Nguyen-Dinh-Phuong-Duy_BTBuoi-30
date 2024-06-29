import React from "react";
import "../scss/banner.scss";
const Banner = () => {
  return (
    <section id="banner" className=" py-12">
      <div className="container mx-auto w-10/12 px-12">
          <div className="p-12 text-center rounded-md">
            <div className="m-12">
              <h1 className="text-5xl font-bold mb-3">A warm welcome!</h1>
              <p className="text-2xl text-center mb-4 px-7">
                Bootstrap utility classes are used to create this jumbotron
                since the old component has been removed from the framework. Why
                create custom CSS when you can use utilities?
              </p>
              <button className="btn text-white text-xl py-2 px-4 rounded-lg">Call to action</button>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Banner;
