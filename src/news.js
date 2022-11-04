import React, { useState, useEffect } from "react";
import axios from "axios";
import Stack from "./component/stak";
import Header from "./component/header";
import Pagination from "./component/pagination";
import { SelectSmall1, SelectSmall2, SelectSmall3 } from "./component/select";

const News = () => {
  const [story, setStory] = useState([]);
  const [data, setData] = useState({});
  const [page, setPage] = React.useState(1);
  const [select1, setselect1] = React.useState("story");
  const [select2, setselect2] = React.useState("byPopularity");
  const [select3, setselect3] = React.useState("all");

  useEffect(() => {
    axios
      .get(
        `https://hn.algolia.com/api/v1/search?query=${select2}&tags=${select1}&page=${
          page - 1
        }`
      )
      .then((res) => {
        let data = res.data.hits
          .map((obj) => {
            return { ...obj, created_at: new Date(obj.created_at) };
          })
          .sort((a, b) => b.created_at - a.created_at);
        setStory(data);
        setData(res.data);
      });
  }, [page, select1, select2]);

  const handleChange = (value) => {
    setPage(value);
  };
  const select1Handler = (value) => {
    setselect1(value);
  };

  const select2Handler = (value) => {
    setselect2(value);
  };
  let ui = <></>;
  if (story.length !== 0) {
    ui = (
      <>
        {story.map((hit, i) => (
          <Stack
            key={i}
            title={hit.title || hit.comment_text}
            url={hit.url}
            tags={hit._tags[2]}
          />
        ))}
        <Pagination
          nbPages={data.nbPages}
          handleChange={handleChange}
          page={page}
        />
      </>
    );
  }
  return (
    <>
      <Header />
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ display: "flex", alignItems: "center" }}>
            search <SelectSmall1 handleChange={select1Handler} age={select1} />
          </span>
          <span style={{ display: "flex", alignItems: "center" }}>
            by <SelectSmall2 handleChange={select2Handler} age={select2} />
          </span>
          <span style={{ display: "flex", alignItems: "center" }}>
            for <SelectSmall3 />
          </span>
        </div>
        <div></div>
      </div>
      {ui}
    </>
  );
};

export default News;
