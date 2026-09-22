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
  // Only show the band photo if the file has actually been uploaded
  const hasPhoto = !!site.bandPhoto && fs.existsSync(path.join(process.cwd(), "public", site.bandPhoto));
  return { props: { shows: upcoming, hasPhoto }, revalidate: 3600 }; // re-check once an hour
}

export default function Home({ shows, hasPhoto }) {
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
        <meta property="og:image" content={`${site.siteUrl}/images/og.jpg`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <a className="skip" href="#main">Skip to content</a>

      <header className="header">
        <div className="header-inner">
          <a className="logo" href="#top">{site.bandName.toUpperCase()}</a>
          <nav className="nav" aria-label="Main">
            <a href="#about">About</a>
            <a href="#music">Music</a>
            <a href="#dates">Shows</a>
            <a href="#merch">Merch</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-inner">
            <h1 className="hero-mark">{site.bandName}</h1>
            <p className="hero-tag">
              {site.tagline}
              <span>{site.subTagline}</span>
            </p>
            <div className="hero-actions">
              <a className="btn btn-solid" href="#music">Listen</a>
              <a className="btn" href="#dates">See shows</a>
            </div>
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
                      <span>{s.city}</span>
                      {s.note && <em>{s.note}</em>}
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
            </p>
          )}
        </section>

        <section className="section" id="contact">
          <h2>Stay in the loop</h2>
          <div className="signup">
            <p>New shows, new music, and merch drops — straight to your inbox. No spam.</p>
            {site.mailchimpFormAction ? (
              <form action={site.mailchimpFormAction} method="post" target="_blank" noValidate>
                <label htmlFor="mce-EMAIL">Email address</label>
                <input type="email" name="EMAIL" id="mce-EMAIL" placeholder="your@email.com" required />
                {/* MailChimp's anti-bot honeypot field — leave as is */}
                <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                  <input type="text" name="b_placeholder" tabIndex="-1" defaultValue="" />
                </div>
                <button className="btn btn-solid" type="submit">Subscribe</button>
              </form>
            ) : (
              <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="email">Email address</label>
                <input type="email" id="email" placeholder="your@email.com" />
                <button className="btn btn-solid" type="submit" disabled title="MailChimp not connected yet">Subscribe</button>
              </form>
            )}
            <p className="fine">Unsubscribe any time.</p>
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
