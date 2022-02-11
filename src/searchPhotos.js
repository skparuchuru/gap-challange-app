import React, { useState }  from "react";
import createApi,{ toJson } from "unsplash-js";

const unsplash = new createApi({
   accessKey: "S46zJve3BkV3GSpWtdBMzdI8CwzknDxQp8VegEdEhug"
 });

export default function Searchphotos() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);

  const searchPhotos = async (e) => {
    e.preventDefault();
    unsplash.search
    .photos(query)
    .then(toJson)
    .then((json) => {
      setPics(json.results);
    });
  };

  return (
   <>
     <form className="form" onSubmit={searchPhotos}> 
        <label className="label" htmlFor="query"> 
          {" "}
          🔍
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try "dogs" or "fruits"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="card-list">
        {
         pics.map((pic) => <div className="card" key={pic.id}>
           <img
                className="card--image"
                alt={pic.alt_description}
                src={pic.urls.full}
                width="50%"
                height="50%"
              ></img>
           </div> )
        }
      </div>
   </>
    );
 }
