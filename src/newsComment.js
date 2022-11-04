import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Stack from "./component/stak";
import Header from "./component/header";
import Pagination from "./component/pagination";

const NewsComment = () => {
  const [story, setStory] = useState([]);
  const [data, setData] = useState({});
  const [page, setPage] = React.useState(1);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://hn.algolia.com/api/v1/search?tags=comment,${id}&page=${
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
  }, [page, id]);

  const handleChange = (value) => {
    setPage(value);
  };

  let ui = <></>;
  if (story.length !== 0) {
    ui = (
      <>
        {story.map((hit, i) => (
          <Stack key={i} title={hit.comment_text} />
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
      {ui}
    </>
  );
};

export default NewsComment;
