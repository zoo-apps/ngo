import { AppProps } from 'next/app';
import { GuiProvider } from '@hanzo/gui';
import ChatWidget from '@/components/ChatWidget';
import Look from '@/components/Look';
import { Corpus } from '@/config/corpus';
import config from '@/lib/gui';

import '@/styles/globals.css';
import '@/styles/gui.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/**
 * `disableInjectCSS`, because `gui.css` above IS the sheet — generated from the
 * same config by `scripts/gui-css.mjs`. Left to inject, the runtime writes the
 * whole accumulated sheet on every flush and the page ships several copies; on
 * a static export it writes nothing at all before first paint.
 *
 * The site has one appearance, so the theme is stated here and there is nothing
 * to resolve at run time. It used to mount next-themes with `defaultTheme="dark"`
 * against a stylesheet that declares `color-scheme: light` and carries no `.dark`
 * rules, so the class landed on <html> and no rule anywhere answered it.
 *
 * `Corpus` sits above everything so that the page and Blue quote the same
 * counts, and so a page loaded from cache refreshes them once rather than once
 * per component that shows a number.
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GuiProvider config={config} defaultTheme="light" disableInjectCSS>
      <Corpus>
        <Component {...pageProps} />
        <ChatWidget />
        <Look />
      </Corpus>
    </GuiProvider>
  );
}

export default MyApp;
