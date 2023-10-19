import type { AppProps } from "next/app";
import { AppProviders } from "./app-providers";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export function App({ Component, pageProps }: AppProps) {
  return (
    <AppProviders>
      <div className={montserrat.className}>
        <Component {...pageProps} />
      </div>
    </AppProviders>
  );
}
