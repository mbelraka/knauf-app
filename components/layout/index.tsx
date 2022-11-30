import Head from "next/head";
import { Provider } from "react-redux";

import store from "../../state/store";
import Footer from "../footer";
import Header from "../header";
import styles from "./Layout.module.scss";

export default function Layout(props: { children: any }) {
  return (
    <div className={styles.fullLayout}>
      <Head>
        <title>Knauf Blogs</title>
        <meta property="og:title" content="Knauf Blogs" key="title" />
      </Head>
      <Header />
      <Provider store={store}>
        <div className={styles.pageContent}>{props.children}</div>
      </Provider>
      <Footer />
    </div>
  );
}
