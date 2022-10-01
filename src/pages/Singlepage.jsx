import { useEffect, useContext } from "react";

import ShowsContext from "../context/shows/showsContext";

import { useParams } from "react-router-dom";


const Singlepage = ({ match}) => {
   const params = useParams();
  const { getSingleShow, singleShow, loading} = useContext(ShowsContext);

  useEffect((id) => {
    getSingleShow(params.id);

  //eslint-disable-next-line
  }, []);

  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  return (
    <div>
      This is the single show page

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="singleshow">
          {/* <img
            src={
              singleShow.show.image
                ? singleShow.image.medium
                : "https://jobs.ficsi.in/assets/front_end/images/no-image-found.jpg"
            }
            alt={singleShow.name}
          /> */}
          <div className="singleshow__info">
            <h1>{singleShow.name}</h1>
            {singleShow.genres &&
              singleShow.genres.map((genre) => (
                <span key={genre} className="singleshow__genre ">
                  {genre}
                </span>
              ))}

            <p>
              <strong>Status:</strong>
              {singleShow.status && singleShow.status}
            </p>
            <p>
              <strong>Rating:</strong>
              {singleShow.rating ? singleShow.rating.average : "No rating"}
            </p>
            <p>
              <strong>Official Site:</strong>
              {singleShow.officialSite ? (
                <a
                  href={singleShow.officialSite}
                  target="__blank"
                  rel="no referrer"
                >
                  {singleShow.officialSite}
                </a>
              ) : (
                "No official site"
              )}
            </p>

            <p>{singleShow.summary && removeTags(singleShow.summary)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Singlepage;
