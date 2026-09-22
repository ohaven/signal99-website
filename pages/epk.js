// Electronic press kit page — sig99.com/epk
// Text lives in data/epk.js; links and images in data/site.js
import Head from "next/head";
import site from "../data/site";
import epk from "../data/epk";
import VideoWall from "../components/VideoWall";

export default function EPK() {
  const year = new Date().getFullYear();
  return (
    <>
      <Head>
        <title>{site.bandName} — Press Kit</title>
        <meta name="description" content={epk.intro} />
        <meta property="og:title" content={`${site.bandName} — Electronic Press Kit`} />
        <meta property="og:description" content={epk.intro} />
        <meta property="og:image" content={`${site.siteUrl}${site.branding?.shareImage || "/images/og.jpg"}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="header">
        <div className="header-inner">
          <a className="logo" href="/" aria-label={`${site.bandName} home`}>
            {site.branding?.banner ? <img src={site.branding.banner} alt={site.bandName} className="logo-img" /> : site.bandName.toUpperCase()}
          </a>
          <nav className="nav" aria-label="Press kit">
            <a href="#bio">Bio</a>
            <a href="#facts">Facts</a>
            <a href="#media">Media</a>
            <a href="#photos">Photos</a>
            <a href="#booking">Booking</a>
            <a href="/">← Site</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="section epk-top">
          <p className="kicker">Electronic Press Kit</p>
          <h1 className="epk-title">{site.bandName}</h1>
          <p className="epk-intro">{epk.intro}</p>
          <div className="hero-actions">
            <a className="btn btn-solid" href={`mailto:${site.bookingEmail}?subject=Booking%20inquiry%20-%20Signal%2099`}>Book the band</a>
            {epk.stagePlotUrl && <a className="btn" href={epk.stagePlotUrl} target="_blank" rel="noopener noreferrer">Stage plot</a>}
          </div>
        </section>

        {epk.quotes?.length > 0 && (
          <section className="section">
            <div className="quotes">
              {epk.quotes.map((q, i) => (
                <blockquote key={i} className="quote">
                  “{q.text}”
                  <cite>{q.by}{q.title ? `, ${q.title}` : ""}</cite>
                </blockquote>
              ))}
            </div>
          </section>
        )}

        <section className="section" id="bio">
          <h2>Biography</h2>
          <div className="about">
            <div>{epk.bio.map((p, i) => <p key={i}>{p}</p>)}</div>
            {site.bandPhoto && (
              <div className="about-photo"><img src={site.bandPhoto} alt={site.bandPhotoAlt} /></div>
            )}
          </div>
        </section>

        <section className="section" id="facts">
          <h2>Quick facts</h2>
          <ul className="facts">{epk.facts.map((f, i) => <li key={i}>{f}</li>)}</ul>
        </section>

        <section className="section" id="media">
          <h2>Listen &amp; watch</h2>
          <div className="music">
            {site.music.map((m) => (
              <a key={m.name} href={m.url} target="_blank" rel="noopener noreferrer"><strong>{m.name}</strong><span>{m.action}</span></a>
            ))}
          </div>
          {site.bandcampPlayer?.albumId && (
            <div className="bc-player">
              <iframe
                title="Bandcamp player"
                src={`https://bandcamp.com/EmbeddedPlayer/album=${site.bandcampPlayer.albumId}/size=large/bgcol=141414/linkcol=ff6b35/tracklist=false/artwork=small/transparent=true/`}
                seamless loading="lazy"
              />
            </div>
          )}
          {site.videos?.length > 0 && <><h3 className="sub">Videos</h3><VideoWall videos={site.videos} /></>}
        </section>

        {epk.photos?.length > 0 && (
          <section className="section" id="photos">
            <h2>Press photos</h2>
            <p className="tools-intro">Click a photo to open the full-size file.</p>
            <div className="press-photos">
              {epk.photos.map((ph) => (
                <a key={ph.src} href={ph.src} target="_blank" rel="noopener noreferrer">
                  <img src={ph.src} alt={ph.caption || "Signal 99 press photo"} loading="lazy" />
                  {ph.caption && <span>{ph.caption}</span>}
                </a>
              ))}
            </div>
            {site.branding?.banner && (
              <p className="tools-intro" style={{ marginTop: "1.5rem" }}>
                Logo: <a href={site.branding.banner} target="_blank" rel="noopener noreferrer">banner (PNG, transparent)</a>
                {site.branding?.heroArt && <> · <a href={site.branding.heroArt} target="_blank" rel="noopener noreferrer">gas mask artwork</a></>}
              </p>
            )}
          </section>
        )}

        <section className="section" id="booking">
          <h2>Booking &amp; technical</h2>
          <p>Booking, press, and interviews: <a href={`mailto:${site.bookingEmail}`}>{site.bookingEmail}</a></p>
          {epk.hospitality && <p className="tools-intro" style={{ marginTop: ".75rem" }}>{epk.hospitality}</p>}
          <div className="social">
            {site.social.map((s) => <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>)}
          </div>
        </section>
      </main>

      <footer className="footer">© {year} {site.bandName}. All rights reserved. · <a href="/">sig99.com</a></footer>
    </>
  );
}
