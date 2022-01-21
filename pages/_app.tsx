import type { AppProps } from "next/app";
import './index.css';
import "tailwindcss/tailwind.css";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/dist/client/router";
import * as locales from "../content/locale";

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
      <Component {...pageProps} />
    </IntlProvider>

  )
}

export default MyApp;
