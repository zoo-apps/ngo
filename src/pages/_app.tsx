import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import ChatWidget from '@/components/ChatWidget';

import '@/styles/globals.css';
import '@/styles/colors.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Component {...pageProps} />
      <ChatWidget />
    </ThemeProvider>
  );
}

export default MyApp;
