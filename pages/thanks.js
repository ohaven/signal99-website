// Order confirmation — Square sends buyers here after checkout (sig99.com/thanks)
import Head from "next/head";
import site from "../data/site";

export default function Thanks() {
  return (
    <>
      <Head>
        <title>Thanks — {site.bandName}</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="header">
        <div className="header-inner">
          <a className="logo" href="/" aria-label={`${site.bandName} home`}>
            {site.branding?.banner ? <img src={site.branding.banner} alt={site.bandName} className="logo-img" /> : site.bandName.toUpperCase()}
          </a>
        </div>
      </header>
      <main className="section thanks">
        <p className="kicker">Order received</p>
        <h1 className="epk-title">Thank you.</h1>
        <p className="epk-intro">
          Your order is in. Square will email your receipt, and we'll get it packed and shipped from Farmington.
          Wear it loud.
        </p>
        <div className="hero-actions">
          <a className="btn btn-solid" href="/#dates">See upcoming shows</a>
          <a className="btn" href="/#contact">Join the mailing list</a>
        </div>
        <p className="tools-intro" style={{ marginTop: "2rem" }}>
          Problem with an order? <a href={`mailto:${site.bookingEmail}`}>{site.bookingEmail}</a>
        </p>
      </main>
      <footer className="footer">© {new Date().getFullYear()} {site.bandName}</footer>
    </>
  );
}
