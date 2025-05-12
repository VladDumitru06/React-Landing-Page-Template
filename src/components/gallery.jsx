import { Image } from "./image";
import React from "react";
export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{props.data ? props.data.title : "Gallery"}</h2>
          <p>
            {props.data ? props.data.subtitle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec."}
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data && props.data.items
              ? props.data.items.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};