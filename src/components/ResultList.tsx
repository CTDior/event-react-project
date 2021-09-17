import Result from "./Result";
import "./ResultList.css";
import Event from "../models/Event"

interface Props {
    events: Event[]
}


const ResultList = ({events}: Props) => {

    return (
        <ul className="ResultList">
                {events.map((event, name) =>(
                    <Result event={event} key={event.name} />
                ))}
        </ul>
    );
}

export default ResultList;