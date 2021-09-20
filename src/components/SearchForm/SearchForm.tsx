import { endianness } from "os";
import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import "./SearchForm.css";

const SearchForm = () => {
    const [ postalCode, setPostalCode ] = useState("")
    const [ radius, setRadius ] = useState("") // not sure on if this is number or string
    const [ keyword, setKeyword ] = useState("") 
    const [ venue, setVenue ] = useState("")

    const history = useHistory();

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        history.push(`/?keyword=${encodeURIComponent(keyword)}
        &postalCode=${encodeURIComponent(postalCode)}
        &radius=${encodeURIComponent(radius)}
        &venue=${encodeURIComponent(venue)}`)
    }

    return (
        <form className="SearchForm" onSubmit={handleSubmit}>
            <label htmlFor="zipCode">Zip Code</label>
            <input type="text" id="zipCode" value={postalCode} onChange={(e) => {setPostalCode(e.target.value)}}/>
            <label htmlFor="miles">Miles</label>
            <input type="number" id="miles" value={radius} onChange={(e) => {setRadius(e.target.value)}}/>
            <label htmlFor="keyword">Keyword</label>
            <input type="text" id="keyword" value={keyword} onChange={(e) => {setKeyword(e.target.value)}} />
            <label htmlFor="venue">Venue</label>
            <input type="text" id="venue" value={venue} onChange={(e) => {setVenue(e.target.value)}}/>
            <button>Search</button>
            
        </form>
    );
}

export default SearchForm;
