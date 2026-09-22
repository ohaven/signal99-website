import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Stardos+Stencil:wght@400;700&family=Special+Elite&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="icon" href="/images/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
