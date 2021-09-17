interface Venue {
  name: string;
  // name inside "venues[]" inside "_embedded{}" inside "events{}"
}

interface VenuesArray {
  venues: Venue[];
}


interface Image {
  url: string;
}

interface Start {
  start: DateAndTime
}

interface DateAndTime {
  localDate: string;
  localTime: string;
  // pull from localDate and localTime in "start{}" inside of "dates{}"
}

export default interface Event {
  name: string;
  url: string;
  images: Image[];
  dates: Start;
  _embedded: VenuesArray;
}
