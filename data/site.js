// ============================================================
//  SIGNAL 99 — SITE SETTINGS
//  Links, bio text, merch, and the MailChimp form live here.
//  Edit the text between the quotes. Leave the quotes alone.
// ============================================================

const site = {
  bandName: "Signal 99",
  tagline: "Music dug up from the dirt of the Southwest.",
  subTagline: "Hear our message. Listen for the distress siren. The signal is coming.",

  // Used for the browser tab and social-media previews
  siteUrl: "https://sig99.com",
  description:
    "Signal 99 — hard rock and metal punk out of Farmington, New Mexico. Shows, music, merch, and mailing list.",

  // ---------- Branding images (in public/images/) ----------
  // Set any of these to "" to fall back to plain text / no image.
  branding: {
    banner: "/images/banner.png",       // wordmark: hero and header
    heroArt: "/images/gasmask.jpg",     // artwork beside the banner in the hero
    watermark: "/images/watermark.png", // faint spray logo behind the Contact section
    shareImage: "/images/og.jpg",       // preview image when the link is shared
  },

  // ---------- About section ----------
  // Each line in quotes is one paragraph.
  about: [
    "Signal 99 is the project of Chuck Haven, a Navajo vocalist, lyricist, and songwriter out of Farmington, New Mexico. Since the 2017 album American Monster, the band has built a sound on heavy bass and hard-driving punk-metal tonality, and a message of hope and recovery for anyone who grew up in the poverty-stricken corners of the Southwest.",
    "The songs go after multiple sclerosis, substance abuse, domestic violence, and the toxicity of popular culture. The gas masks and war paint are a protest, not a costume. Releases include American Monster, which earned Signal 99 the title of #1 metal band in New Mexico, The Gospel, Armed & Dangerous Vol 1, and the latest, I Hate Biscuits.",
    "On stage, Chuck fronts a live band that has carried the signal from Farmington and Gallup to Phoenix, Denver, Las Vegas, Oakland, and Twin Falls, and shared bills with Fear Factory and Green Jelly. New music is being written now, and a 2027 tour is in the works.",
  ],
  quote: "The masks are worn to protest the toxicity of popular culture.",
  quoteBy: "Chuck Haven",
  bandPhoto: "/images/band.jpeg", // upload your photo to public/images/band.jpg
  bandPhotoAlt: "Signal 99 on stage",

  // ---------- Music links ----------
  music: [
    { name: "Spotify", action: "Listen", url: "https://open.spotify.com/artist/2zr9iuzp25jP9j2gTs9Yqb" },
    { name: "Apple Music", action: "Listen", url: "https://music.apple.com/us/artist/signal-99/415111018" },
    { name: "Bandcamp", action: "Buy", url: "https://signal99.bandcamp.com" },
    { name: "YouTube", action: "Watch", url: "https://www.youtube.com/user/sig99" },
  ],

  // Albums shown in the Music section. Each links to Bandcamp.
  // Once your Bandcamp albums are up, replace the url with each album's own link.
  releases: [
    { title: "I Hate Biscuits", year: "", url: "https://signal99.bandcamp.com" },
    { title: "Armed & Dangerous Vol 1", year: "", url: "https://signal99.bandcamp.com" },
    { title: "The Gospel", year: "", url: "https://signal99.bandcamp.com" },
    { title: "American Monster", year: "2017", url: "https://signal99.bandcamp.com" },
  ],

  // YouTube video ID for the featured video (the part after "v=" in the link).
  featuredVideoId: "mnehegQdNOc",

  // ---------- Merch ----------
  // Everything links to Bandcamp. Once your Bandcamp merch is up, you can
  // point each item at its own page and add a photo (upload to public/images/).
  merchStoreUrl: "https://signal99.bandcamp.com/merch",
  merch: [
    { name: "Classic Logo T-Shirt", price: "$20", url: "https://signal99.bandcamp.com/merch", image: "" },
    { name: "Classic Logo Pullover", price: "$40", url: "https://signal99.bandcamp.com/merch", image: "" },
    { name: "Teddy Bear Shirt", price: "$20", url: "https://signal99.bandcamp.com/merch", image: "" },
    { name: "Banner of Corpses Shirt", price: "$20", url: "https://signal99.bandcamp.com/merch", image: "" },
    { name: "Zombie Star Shirt", price: "$20", url: "https://signal99.bandcamp.com/merch", image: "" },
    { name: "Sticker Pack", price: "$10", url: "https://signal99.bandcamp.com/merch", image: "" },
  ],

  // Optional tip jar (PayPal). Leave "" to hide.
  tipJarUrl:
    "https://www.paypal.com/cgi-bin/webscr?business=signal99haven%40gmail.com&cmd=_donations&currency_code=USD&item_name=Donation+to+Signal+99",

  // ---------- Tools (your own apps) ----------
  tools: [
    { name: "StapleGun", blurb: "Flyer and poster maker.", url: "https://staplegun.sig99.com" },
    { name: "RigPlot", blurb: "Stage plot and input list builder.", url: "https://rigplot.sig99.com" },
    { name: "SigFest", blurb: "", url: "" }, // paste the SigFest address; leave "" to hide
  ],

  // ---------- Mailing list (MailChimp) ----------
  // In MailChimp: Audience → Signup forms → Embedded forms.
  // Find the line that starts with:
  //   <form action="https://....list-manage.com/subscribe/post?u=...&id=..."
  // Copy ONLY the web address inside the quotes and paste it below.
  mailchimpFormAction: "",

  // ---------- Social links ----------
  social: [
    { name: "Facebook", url: "https://www.facebook.com/sig99" },
    { name: "YouTube", url: "https://www.youtube.com/user/sig99" },
    { name: "X", url: "https://twitter.com/sig99" },
    { name: "Bandcamp", url: "https://signal99.bandcamp.com" },
  ],

  // ---------- Booking / contact ----------
  bookingEmail: "signal99haven@gmail.com",
};

export default site;
