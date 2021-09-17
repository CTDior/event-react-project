interface Image {
  url: string;
}

interface Start {
  date: string;
  time: string;
  // pull from localDate and localTime in "start{}" inside of "dates{}"
}

interface Dates {
  dates: Start;
}

interface Venue {
  name: string;
  // name inside "venues[]" inside "_embedded{}" inside "events{}"
}

export default interface Event {
  name: string;
  url: string;
  images: Image[];
  dates: Dates;
  venue: Venue;
}
