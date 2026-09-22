// ============================================================
//  SIGNAL 99 — SITE SETTINGS
//  Links, bio text, merch, and the MailChimp form live here.
//  Edit the text between the quotes. Leave the quotes alone.
// ============================================================

const site = {
  bandName: "Signal 99",
  tagline: "Punk rock with an industrial edge.",
  subTagline: "Raw energy. Raw sound.",

  // Used for the browser tab and social-media previews
  siteUrl: "https://signal99.band",
  description:
    "Signal 99 — punk rock with an industrial edge. Shows, music, merch, and mailing list.",

  // ---------- About section ----------
  about: [
    "Signal 99 is a three-piece punk band built on raw energy and industrial aesthetics. From garage rehearsals to packed venues, we bring sonic intensity and uncompromising attitude to every show.",
    "No polish, no apologies. Just loud, fast, and honest music.",
    "Founded in 2020, we've been grinding out original material and bringing the noise to stages across the region.",
  ],
  bandPhoto: "/images/band.jpg", // upload your photo to public/images/band.jpg
  bandPhotoAlt: "Signal 99 on stage",

  // ---------- Music links ----------
  // Replace the # with your real links. Delete any line you don't use.
  music: [
    { name: "Spotify", action: "Listen", url: "#" },
    { name: "Apple Music", action: "Listen", url: "#" },
    { name: "YouTube", action: "Watch", url: "#" },
    { name: "Bandcamp", action: "Buy", url: "#" },
  ],

  // Optional: paste a YouTube video ID to show a video in the Music section.
  // The ID is the part after "v=" in a YouTube link. Leave "" for no video.
  featuredVideoId: "",

  // ---------- Merch ----------
  // Each item links out to your store (Bandcamp, Teespring, Shopify...).
  // image is optional — upload to public/images/ and put the path here.
  merch: [
    { name: "T-Shirt", price: "$25", url: "#", image: "" },
    { name: "Hoodie", price: "$45", url: "#", image: "" },
    { name: "Vinyl LP", price: "$30", url: "#", image: "" },
    { name: "Sticker Pack", price: "$5", url: "#", image: "" },
  ],
  merchStoreUrl: "#", // "See everything" link to your full store

  // ---------- Mailing list (MailChimp) ----------
  // In MailChimp: Audience → Signup forms → Embedded forms.
  // In the code they give you, find the line that starts with:
  //   <form action="https://....list-manage.com/subscribe/post?u=...&id=..."
  // Copy ONLY the web address inside the quotes and paste it below.
  mailchimpFormAction: "",

  // ---------- Social links ----------
  // Delete any you don't use.
  social: [
    { name: "Instagram", url: "#" },
    { name: "TikTok", url: "#" },
    { name: "YouTube", url: "#" },
    { name: "X", url: "#" },
    { name: "Bandcamp", url: "#" },
    { name: "Facebook", url: "#" },
  ],

  // ---------- Booking / contact ----------
  bookingEmail: "booking@signal99.band",
};

export default site;
