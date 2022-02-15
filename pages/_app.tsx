import Router from 'next/router';
import type { AppProps } from "next/app";
import './index.css';
import "tailwindcss/tailwind.css";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/dist/client/router";
import * as locales from "../content/locale";
import * as gtag from "@lib/gtag";
// Track pageview when route is changed
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { locale, defaultLocale, pathname } = router;
  const localeCopy = locales[locale];
  const messages = localeCopy[pathname];

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages}
    >
      <Component {...pageProps} key={router.pathname} />
    </IntlProvider>
  )
}

export default MyApp
