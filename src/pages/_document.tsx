import { Head, Html, Main, NextScript } from 'next/document';

/**
 * <Head> held one thing: a preload of `/fonts/inter-var-latin.woff2`. There is
 * no `public/fonts/`, and the site sets Zen — so the tag 404'd on every page
 * load and then warned that the font it could not fetch went unused. `@hanzo/font`
 * emits its own preload with the content hash, which is the one that works.
 *
 * `scroll-behavior` is not stated here either: @hanzo/design's base layer already
 * sets it on <html>, and an inline style would outrank anyone who ever wanted to
 * turn it off.
 */
export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
