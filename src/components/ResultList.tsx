import Result from "./Result";
import "./ResultList.css";
import Event from "../models/Event"
/* import TMService from "../services/TMService" */

interface Props {
    events: Event[]
    dates: Date[]
}


const ResultList = ({events, dates}: Props) => {
   
    
    
    return (
        <ul className="ResultList">
                {events.map((event, index) =>(
                    <Result event={event} key={event.url} />
                ))}
        </ul>
    );
}

export default ResultList;