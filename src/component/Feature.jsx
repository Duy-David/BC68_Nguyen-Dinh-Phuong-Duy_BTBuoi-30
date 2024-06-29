import React from "react";
import "../scss/feature.scss";
const Feature = () => {
  return (
    <div id="feature" className="pt-6 pb-12">
      <div className="container mx-auto w-10/12 px-12">
        <div className="grid grid-cols-2  gap-12">
          <div className=" mb-3 h-full border-spacing-0  ">
            <div className="p-12 text-center pt-0 feature-item rounded-lg">
              <span className="mb-6 feature-icon text-white   ">
                <i className="bi bi-collection p-4 rounded-lg "></i>
              </span>
              <div className="feature-titile pt-14">
                <h2 className=" text-2xl font-bold mb-2">Fresh new layout</h2>
                <p className="feature-text">
                  With Bootstrap 5, we've created a fresh new layout for this
                  template!
                </p>
              </div>
            </div>
          </div>
          <div className=" mb-3 h-full border-spacing-0  ">
            <div className="p-12 text-center pt-0 feature-item rounded-lg">
              <span className="mb-6 feature-icon text-white   ">
              <i className="bi bi-cloud-download p-4 rounded-lg "></i>
              </span>
              <div className="feature-titile pt-14">
                <h2 className=" text-2xl font-bold mb-2">Free to download</h2>
                <p className="feature-text">
                As always, Start Bootstrap has a powerful collectin of free templates.
                </p>
              </div>
            </div>
          </div>
          <div className=" mb-3 h-full border-spacing-0  ">
            <div className="p-12 text-center pt-0 feature-item rounded-lg">
              <span className="mb-6 feature-icon text-white   ">
                <i className="bi bi-card-heading p-4 rounded-lg "></i>
              </span>
              <div className="feature-titile pt-14">
                <h2 className=" text-2xl font-bold mb-2">Jumbotron hero header</h2>
                <p className="feature-text">
                The heroic part of this template is the jumbotron hero header!
                </p>
              </div>
            </div>
          </div>
          <div className=" mb-3 h-full border-spacing-0  ">
            <div className="p-12 text-center pt-0 feature-item rounded-lg">
              <span className="mb-6 feature-icon text-white   ">
                <i className="bi bi-bootstrap p-4 rounded-lg "></i>
              </span>
              <div className="feature-titile pt-14">
                <h2 className=" text-2xl font-bold mb-2">Feature boxes</h2>
                <p className="feature-text">
                We've created some custom feature boxes using Bootstrap icons!
                </p>
              </div>
            </div>
          </div>
          <div className=" mb-3 h-full border-spacing-0  ">
            <div className="p-12 text-center pt-0 feature-item rounded-lg">
              <span className="mb-6 feature-icon text-white   ">
                <i className="bi bi-code p-4 rounded-lg "></i>
              </span>
              <div className="feature-titile pt-14">
                <h2 className=" text-2xl font-bold mb-2">Simple clean code</h2>
                <p className="feature-text">
                We keep our dependencies up to date and squash bugs as they come!
                </p>
              </div>
            </div>
          </div>
          <div className=" mb-3 h-full border-spacing-0  ">
            <div className="p-12 text-center pt-0 feature-item rounded-lg">
              <span className="mb-6 feature-icon text-white   ">
                <i className="bi bi-patch-check  p-4 rounded-lg "></i>
              </span>
              <div className="feature-titile pt-14">
                <h2 className=" text-2xl font-bold mb-2">A name you trust</h2>
                <p className="feature-text">
                Start Bootstrap has been the leader in free Bootstrap templates since 2013!
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Feature;
