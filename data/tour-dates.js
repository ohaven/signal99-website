// ============================================================
//  SIGNAL 99 — SHOWS
//  This is the ONLY file you need to touch to update shows.
//
//  How to add a show:
//    1. Copy one block between { and },
//    2. Paste it at the TOP of the list, change the details
//    3. Make sure each block ends with a comma
//    4. Commit on GitHub. Site updates in about a minute.
//
//  Rules:
//    - date must be YYYY-MM-DD (example: 2026-10-17)
//    - Shows in the future appear under "Upcoming"
//    - Shows in the past move to "Past shows" automatically
//    - ticketUrl: paste a link, or "" for "Tickets at the door"
//    - note: optional (price, age, doors, who else is playing)
//    - flyer: optional image path, e.g. "/images/flyer-durango-2026.jpg"
//      (upload the image to public/images/ first)
// ============================================================

const tourDates = [
  // ---------- UPCOMING ----------
  {
    date: "2026-10-17",
    venue: "The Hive",
    city: "Durango, CO",
    address: "117 S Camino Del Rio",
    ticketUrl: "",
    note: "Headlining, with Green Lizard and Fables of the Fall · $10 · All ages · Doors 6:30pm",
    flyer: "flyer-durango-2026.jpeg",
  },

  // ---------- PAST ----------
  { date: "2025-09-14", venue: "Locke Street Eats", city: "Farmington, NM", note: "with Fear Factory" },
  { date: "2025-09-13", venue: "Wowies", city: "Gallup, NM", note: "Indigenous Metal Fest, with Fear Factory" },
  { date: "2025-02-22", venue: "Taproom 120", city: "Gilbert, AZ", note: "Cornucopia 62" },
  { date: "2024-11-22", venue: "Isleta Resort and Casino", city: "Albuquerque, NM", note: "Indigenous Tattoo and Music Fest" },
  { date: "2024-11-18", venue: "Uncle Mike's", city: "Portales, NM", note: "The Boss Crew Tour" },
  { date: "2024-11-17", venue: "The Juggernaut", city: "Gallup, NM", note: "The Boss Crew Tour" },
  { date: "2024-11-16", venue: "Fremont Country Club", city: "Las Vegas, NV", note: "The Boss Crew Tour" },
  { date: "2024-11-13", venue: "The Rhythm Room", city: "Phoenix, AZ", note: "The Boss Crew Tour" },
  { date: "2024-09-29", venue: "Starlight Lounge", city: "Glendale, AZ", note: "Rez Odyssey Tour" },
  { date: "2024-09-28", venue: "The Juggernaut", city: "Gallup, NM", note: "Rez Odyssey Tour" },
  { date: "2024-09-27", venue: "Longhair Records", city: "Albuquerque, NM", note: "Rez Odyssey Tour" },
  { date: "2024-09-21", venue: "Harvest Fest", city: "Alamogordo, NM", note: "" },
  { date: "2024-09-14", venue: "Creepsville Carnival", city: "Mesa, AZ", note: "" },
  { date: "2024-07-07", venue: "Indigenous Red Market", city: "Oakland, CA", note: "" },
  { date: "2024-07-05", venue: "Big Pappa's Grill and Live Music", city: "Twin Falls, ID", note: "with Green Jelly" },
  { date: "2024-06-08", venue: "", city: "Laramie, WY", note: "" },
  { date: "2024-06-07", venue: "", city: "Denver, CO", note: "" },
  { date: "2024-06-01", venue: "", city: "Santa Fe, NM", note: "" },
  { date: "2024-05-04", venue: "Dino's Hideaway and Lounge", city: "Farmington, NM", note: "" },
  { date: "2024-05-03", venue: "Juggernaut Music", city: "Gallup, NM", note: "with Gravel" },
];

export default tourDates;
