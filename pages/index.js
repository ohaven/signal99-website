// ============================================================
//  SIGNAL 99 — home page
//  You normally don't need to edit this file.
//  Shows  -> data/tour-dates.js
//  Links, bio, merch, MailChimp -> data/site.js
// ============================================================

import Head from "next/head";
import fs from "fs";
import path from "path";
import site from "../data/site";
import tourDates from "../data/tour-dates";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Turn "2026-10-15" into a real date at local midnight (avoids timezone slips)
function parseDate(str) {
  const [y, m, d] = str.split("-").map(Number);
  return new Date(y, m - 1, d);
}

// MailChimp's anti-bot field is named b_<u>_<id>, both taken from the form address
function mailchimpHoneypot(action) {
  try {
    const q = new URL(action).searchParams;
    return `b_${q.get("u") || ""}_${q.get("id") || ""}`;
  } catch {
    return "b_";
  }
}

function isLink(url) {
  return typeof url === "string" && url.length > 1 && url !== "#";
}

export function getStaticProps() {
  // Runs when the site is built on Vercel. Drops past shows, sorts the rest.
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const upcoming = tourDates
    .filter((s) => parseDate(s.date) >= today)
    .sort((a, b) => parseDate(a.date) - parseDate(b.date));
  const past = tourDates
    .filter((s) => parseDate(s.date) < today)
    .sort((a, b) => parseDate(b.date) - parseDate(a.date)); // newest first
  // Only show the band photo if the file has actually been uploaded
  const hasPhoto = !!site.bandPhoto && fs.existsSync(path.join(process.cwd(), "public", site.bandPhoto));
  return { props: { shows: upcoming, past, hasPhoto }, revalidate: 3600 }; // re-check once an hour
}

export default function Home({ shows, past, hasPhoto }) {
  const next = shows[0];
  const year = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>{site.bandName}</title>
        <meta name="description" content={site.description} />
        <meta property="og:title" content={site.bandName} />
        <meta property="og:description" content={site.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={site.siteUrl} />
        <meta property="og:image" content={`${site.siteUrl}${site.branding?.shareImage || "/images/og.jpg"}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <a className="skip" href="#main">Skip to content</a>

      <header className="header">
        <div className="header-inner">
          <a className="logo" href="#top" aria-label={`${site.bandName} home`}>
            {site.branding?.banner
              ? <img src={site.branding.banner} alt={site.bandName} className="logo-img" />
              : site.bandName.toUpperCase()}
          </a>
          <nav className="nav" aria-label="Main">
            <a href="#about">About</a>
            <a href="#music">Music</a>
            <a href="#dates">Shows</a>
            <a href="#merch">Merch</a>
            <a href="#tools">Tools</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className={`hero-inner${site.branding?.heroArt ? " has-art" : ""}`}>
            <div className="hero-copy">
              <h1 className="hero-mark">
                {site.branding?.banner
                  ? <img src={site.branding.banner} alt={site.bandName} className="hero-banner" />
                  : site.bandName}
              </h1>
              <p className="hero-tag">
                {site.tagline}
                <span>{site.subTagline}</span>
              </p>
              <div className="hero-actions">
                <a className="btn btn-solid" href="#music">Listen</a>
                <a className="btn" href="#dates">See shows</a>
              </div>
            </div>
            {site.branding?.heroArt && (
              <div className="hero-art">
                <img src={site.branding.heroArt} alt="" />
              </div>
            )}
          </div>
        </section>

        {next && (
          <div className="next-show">
            <div className="next-show-inner">
              <strong>Next show</strong>
              <span>
                {MONTHS[parseDate(next.date).getMonth()]} {parseDate(next.date).getDate()} — {next.venue}, {next.city}
              </span>
              {isLink(next.ticketUrl) && (
                <a href={next.ticketUrl} target="_blank" rel="noopener noreferrer">Tickets</a>
              )}
            </div>
          </div>
        )}

        <section className="section" id="about">
          <h2>About</h2>
          <div className="about">
            <div>
              {site.about.map((p, i) => <p key={i}>{p}</p>)}
              {site.quote && (
                <blockquote className="quote">
                  “{site.quote}”
                  {site.quoteBy && <cite>{site.quoteBy}</cite>}
                </blockquote>
              )}
            </div>
            <div className="about-photo">
              {hasPhoto ? (
                <img src={site.bandPhoto} alt={site.bandPhotoAlt} />
              ) : (
                <div className="placeholder">Band photo goes here<br />(public/images/band.jpg)</div>
              )}
            </div>
          </div>
        </section>

        <section className="section" id="music">
          <h2>Music</h2>
          <div className="music">
            {site.music.map((m) => (
              <a key={m.name} href={m.url} target="_blank" rel="noopener noreferrer">
                <strong>{m.name}</strong>
                <span>{m.action}</span>
              </a>
            ))}
          </div>
          {site.releases && site.releases.length > 0 && (
            <ul className="releases">
              {site.releases.map((r) => (
                <li key={r.title}>
                  <a href={r.url} target="_blank" rel="noopener noreferrer">
                    <strong>{r.title}</strong>
                    {r.year && <span>{r.year}</span>}
                  </a>
                </li>
              ))}
            </ul>
          )}
          {site.featuredVideoId && (
            <div className="video">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${site.featuredVideoId}`}
                title={`${site.bandName} video`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </section>

        <section className="section" id="dates">
          <h2>Shows</h2>
          {shows.length === 0 ? (
            <div className="empty">
              No shows on the calendar right now.
              <a href="#contact">Join the mailing list to hear first.</a>
            </div>
          ) : (
            <ul className="dates">
              {shows.map((s) => {
                const d = parseDate(s.date);
                return (
                  <li key={`${s.date}-${s.venue}`}>
                    <div className="when">
                      {MONTHS[d.getMonth()].toUpperCase()} {d.getDate()}
                      <small>{DAYS[d.getDay()]}, {d.getFullYear()}</small>
                    </div>
                    <div className="where">
                      <strong>{s.venue}</strong>
                      <span>{s.city}{s.address ? ` · ${s.address}` : ""}</span>
                      {s.note && <em>{s.note}</em>}
                      {s.flyer && <img className="flyer" src={s.flyer} alt={`${s.venue} flyer`} loading="lazy" />}
                    </div>
                    <div className="tix">
                      {isLink(s.ticketUrl) ? (
                        <a className="btn" href={s.ticketUrl} target="_blank" rel="noopener noreferrer">Tickets</a>
                      ) : (
                        <span className="soon">Tickets at the door</span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
          {past && past.length > 0 && (
            <details className="past">
              <summary>Past shows ({past.length})</summary>
              <ul>
                {past.map((s) => {
                  const d = parseDate(s.date);
                  return (
                    <li key={`${s.date}-${s.venue}-${s.city}`}>
                      <span className="pd">{MONTHS[d.getMonth()]} {d.getDate()}, {d.getFullYear()}</span>
                      <span className="pv">{[s.venue, s.city].filter(Boolean).join(", ")}{s.note ? ` — ${s.note}` : ""}</span>
                    </li>
                  );
                })}
              </ul>
            </details>
          )}
        </section>

        <section className="section" id="merch">
          <h2>Merch</h2>
          <div className="merch">
            {site.merch.map((item) => (
              <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer">
                <div className="thumb">
                  {item.image ? <img src={item.image} alt={item.name} /> : item.name}
                </div>
                <div className="meta">
                  <strong>{item.name}</strong>
                  <span>{item.price}</span>
                </div>
              </a>
            ))}
          </div>
          {isLink(site.merchStoreUrl) && (
            <p className="merch-all">
              <a href={site.merchStoreUrl} target="_blank" rel="noopener noreferrer">See everything in the store</a>
              {isLink(site.tipJarUrl) && (
                <>
                  {" · "}
                  <a href={site.tipJarUrl} target="_blank" rel="noopener noreferrer">Tip jar</a>
                </>
              )}
            </p>
          )}
        </section>

        {site.tools && site.tools.some((t) => isLink(t.url)) && (
          <section className="section" id="tools">
            <h2>Tools</h2>
            <p className="tools-intro">Free tools we built for working bands.</p>
            <div className="tools">
              {site.tools.filter((t) => isLink(t.url)).map((t) => (
                <a key={t.name} href={t.url} target="_blank" rel="noopener noreferrer">
                  <strong>{t.name}</strong>
                  {t.blurb && <span>{t.blurb}</span>}
                </a>
              ))}
            </div>
          </section>
        )}

        <section className="section contact" id="contact">
          {site.branding?.watermark && (
            <img className="watermark" src={site.branding.watermark} alt="" aria-hidden="true" />
          )}
          <h2>Stay in the loop</h2>
          <div className="signup">
            <p>New shows, new music, and merch drops — straight to your inbox. No spam.</p>
            {site.mailchimpFormAction ? (
              <form action={site.mailchimpFormAction} method="post" target="_blank" noValidate className="mc-form">
                <div className="field wide">
                  <label htmlFor="mce-EMAIL">Email address *</label>
                  <input type="email" name="EMAIL" id="mce-EMAIL" placeholder="your@email.com" required autoComplete="email" />
                </div>
                <div className="field">
                  <label htmlFor="mce-FNAME">First name</label>
                  <input type="text" name="FNAME" id="mce-FNAME" placeholder="First name" autoComplete="given-name" />
                </div>
                <div className="field">
                  <label htmlFor="mce-LNAME">Last name</label>
                  <input type="text" name="LNAME" id="mce-LNAME" placeholder="Last name" autoComplete="family-name" />
                </div>
                <div className="field">
                  <label htmlFor="mce-MMERGE7">Zip code</label>
                  <input type="text" name="MMERGE7" id="mce-MMERGE7" placeholder="Zip code" inputMode="numeric" autoComplete="postal-code" />
                </div>
                {/* MailChimp's anti-bot honeypot field — leave as is */}
                <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                  <input type="text" name={mailchimpHoneypot(site.mailchimpFormAction)} tabIndex="-1" defaultValue="" />
                </div>
                <div className="field submit">
                  <button className="btn btn-solid" type="submit">Subscribe</button>
                </div>
              </form>
            ) : (
              <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="email">Email address</label>
                <input type="email" id="email" placeholder="your@email.com" />
                <button className="btn btn-solid" type="submit" disabled title="MailChimp not connected yet">Subscribe</button>
              </form>
            )}
            <p className="fine">Zip code helps us route the tour to you. Unsubscribe any time.</p>
          </div>

          <div className="social" aria-label="Social media">
            {site.social.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
            ))}
          </div>

          {site.bookingEmail && (
            <p className="booking">
              Booking &amp; press: <a href={`mailto:${site.bookingEmail}`}>{site.bookingEmail}</a>
            </p>
          )}
        </section>
      </main>

      <footer className="footer">
        © {year} {site.bandName}. All rights reserved.
      </footer>
    </>
  );
}
