import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

function Search() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const [isLoaded, setIsLoaded] = useState(false);

  const options = {
    method: "GET",
    url: `http://www.omdbapi.com/?s=${query}&apikey=5f06baec&page=1`,
  };

  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        const data = response.data["Search"];
        setIsLoaded(true);
        console.log({ data });
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  let query = useQuery();
  // let query = "yoo";
  console.log(query);
  return (
    <div className="search">
      <div className="search-wrap">
        <p>{query.get("s")} Hello </p>
      </div>
    </div>
  );
}

export default Search;
