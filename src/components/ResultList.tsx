import Result from "./Result";
import "./ResultList.css";
import Event from "../models/Event"
/* import TMService from "../services/TMService" */

interface Props {
    events: Event[]
    dates: Date[]
}


const ResultList = ({events, dates}: Props) => {
    console.log("christian", events);
    console.log("dog", events);
    
    
    return (
        <ul className="ResultList">
                {events.map((event, index) =>(
                    <Result event={event} key={event.name} />
                ))}
        </ul>
    );
}

export default ResultList;