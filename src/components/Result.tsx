import "./Result.css";
import Event from "../models/Event"

interface Props {
    event: Event
}


const Result = ({event}: Props) => {



    return (
        <li className="Result">
            <p> {event.name} </p>
            
        </li>
    );
}

export default Result;