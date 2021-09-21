import { FormEvent, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getUpcomingEvents } from "../../services/TMService";
import "./SearchForm.css";

const SearchForm = () => {
  const [postalCode, setPostalCode] = useState("48201");
  const [sort, setSort] = useState("relevance,desc");
  const [keyword, setKeyword] = useState<string>("concert");

  const history = useHistory();

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    history.push(
      `/?keyword=${encodeURIComponent(keyword)}&postalCode=${encodeURIComponent(
        postalCode
      )}&sort=${encodeURIComponent(sort)}`
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
          <label htmlFor="sort">Sort By</label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
            }}
          >
            <option value="name,asc">Event Name</option>
            <option value="relevance,desc">Relevance</option>
          </select>
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


        <button>Search</button>
      </form>
    </section>
  );
};

export default SearchForm;
