import { Icon } from "@material-ui/core";

import styles from "styles/Landing.module.scss";

export default function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <Icon className={styles.blogIcon}>chat_bubble</Icon>
        <span className={styles.title}>Kanuf Blog Portal</span>
      </div>
      <div className={styles.footer}>
        <span className={styles.copyright}>© 2022 Elrakaiby</span>
      </div>
    </div>
  );
}
