// ============================================================
//  SIGNAL 99 — TOUR DATES
//  This is the ONLY file you need to touch to update shows.
//
//  How to add a show:
//    1. Copy one of the blocks between { and },
//    2. Paste it into the list, change the details
//    3. Make sure each block ends with a comma
//    4. Commit the change on GitHub. Site updates in ~1 minute.
//
//  Rules:
//    - date must be written YYYY-MM-DD (example: 2026-11-05)
//    - Past shows disappear from the site automatically
//    - ticketUrl: paste the link, or leave it as "" for no button
//    - note is optional (age limit, door time, "with X band", etc.)
// ============================================================

const tourDates = [
  {
    date: "2026-10-15",
    venue: "The Roxy",
    city: "Los Angeles, CA",
    ticketUrl: "",
    note: "21+ · Doors 8pm",
  },
  {
    date: "2026-10-22",
    venue: "Bottom of the Hill",
    city: "San Francisco, CA",
    ticketUrl: "",
    note: "",
  },
  {
    date: "2026-11-05",
    venue: "Bowery Ballroom",
    city: "New York, NY",
    ticketUrl: "",
    note: "All ages",
  },
  {
    date: "2026-11-12",
    venue: "Metro",
    city: "Chicago, IL",
    ticketUrl: "",
    note: "",
  },
];

export default tourDates;
