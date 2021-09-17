import "./Result.css";
import Event from "../models/Event";

interface Props {
  event: Event;
}

const Result = ({ event }: Props) => {
  let imagesArray = event.images[0].url;

  return (
    <li className="Result">
      <p> {event.name} </p>
      <img src={imagesArray} alt={event.name} />
    </li>
  );
};

export default Result;
