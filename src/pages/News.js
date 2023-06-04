import React from "react";
import NewsMain from "../components/NewsMain";
import NewsUpdates from "../components/NewsUpdates";

function News() {
  return (
    <div className="newsFill">
      <div className="newsFill2">
        <div className="homeTop">
          <h1>News</h1>
          <input type="text" placeholder="Search" />
        </div>
        <div className="newsDivider">
            <NewsMain />
            <NewsUpdates />

        </div>
      </div>
    </div>
  );
}

export default News;
