import { FormEvent, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getUpcomingEvents } from "../../services/TMService";
import "./SearchForm.css";

const SearchForm = () => {
  const [postalCode, setPostalCode] = useState("48201");
  const [radius, setRadius] = useState("10");
  const [keyword, setKeyword] = useState<string>("concert");
  const [venue, setVenue] = useState("Fox");

  const history = useHistory();

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    history.push(
      `/?keyword=${encodeURIComponent(keyword)}&postalCode=${encodeURIComponent(
        postalCode
      )}&radius=${encodeURIComponent(radius)}&venue=${encodeURIComponent(
        venue
      )}`
    );
  };

  return (
    <section className="FormContainer">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <p>
          <label htmlFor="zipCode">Zip Code</label>
          <input
            type="text"
            id="zipCode"
            value={postalCode}
            onChange={(e) => {
              setPostalCode(e.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="miles">Miles</label>
          <input
            type="number"
            id="miles"
            value={radius}
            onChange={(e) => {
              setRadius(e.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="keyword">Keyword</label>
          <input
            type="text"
            id="keyword"
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="venue">Venue</label>
          <input
            type="text"
            id="venue"
            value={venue}
            onChange={(e) => {
              setVenue(e.target.value);
            }}
          />
        </p>

        <button>Search</button>
      </form>
    </section>
  );
};

export default SearchForm;
