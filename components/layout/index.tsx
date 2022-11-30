import Footer from "../footer";
import Header from "../header";
import styles from "./Layout.module.scss";

export default function Layout(props: { children: any }) {
  return (
    <div className={styles.fullLayout}>
      <Header />
      <div className={styles.pageContent}>{props.children}</div>
      <Footer />
    </div>
  );
}
