import { ThemeProvider } from "@material-ui/core";
import type { AppProps } from "next/app";

import "pages/utilities/theme";
import "styles/globals.scss";

import Layout from "./components/layout";
import theme from "./utilities/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
