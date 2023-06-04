import React from "react";


const newsData = [
  {
    id: "1",
    title: "Title",
    author: "Author",
    timeStamp: "Date and Time",
    content:"Lorem ipsum dolor sit amet consectetur. Eget risus enim lorem quis turpis convallis nisl. Placerat ante tellus ultrices at. A turpis nullam semper adipiscing bibendum hendrerit. Augue non at augue at ut turpis nam. Morbi proin senectus ut nunc. Accumsan nisi tempor lacusplacerat porta."
  },
  {
    id: "2",
    title: "Title",
    author: "Author",
    timeStamp: "Date and Time",
    content:"Lorem ipsum dolor sit amet consectetur. Eget risus enim lorem quis turpis convallis nisl. Placerat ante tellus ultrices at. A turpis nullam semper adipiscing bibendum hendrerit. Augue non at augue at ut turpis nam. Morbi proin senectus ut nunc. Accumsan nisi tempor lacusplacerat porta."
  },
  {
    id: "3",
    title: "Title",
    author: "Author",
    timeStamp: "Date and Time",
    content:"Lorem ipsum dolor sit amet consectetur. Eget risus enim lorem quis turpis convallis nisl. Placerat ante tellus ultrices at. A turpis nullam semper adipiscing bibendum hendrerit. Augue non at augue at ut turpis nam. Morbi proin senectus ut nunc. Accumsan nisi tempor lacusplacerat porta."
  },
  {
    id: "4",
    title: "Title",
    author: "Author",
    timeStamp: "Date and Time",
    content:"Lorem ipsum dolor sit amet consectetur. Eget risus enim lorem quis turpis convallis nisl. Placerat ante tellus ultrices at. A turpis nullam semper adipiscing bibendum hendrerit. Augue non at augue at ut turpis nam. Morbi proin senectus ut nunc. Accumsan nisi tempor lacusplacerat porta."
  },
];

function NewsMain() {
  return (
    <div>
      <h1>{newsData[0].title}</h1>
      <div className="articleInfo">
        <h3>{newsData[0].author}</h3>
        <h3>{newsData[0].timeStamp}</h3>
      </div>
      <div className="articleContent">
        <p>
          {newsData[0].content}
          <br />
          Lorem ipsum dolor sit amet consectetur. Eget risus enim lorem quis
          turpis convallis nisl. Placerat ante tellus ultrices at.....
        </p>
      </div>
      <div className="nBtn">
        <button>{"<"}</button>
        <button>{">"}</button>
      </div>
      <button>Read More</button>
    </div>
  );
}

export default NewsMain;
