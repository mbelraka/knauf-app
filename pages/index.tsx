import { Button, Icon } from "@material-ui/core";
import Link from "next/link";

import styles from "styles/Landing.module.scss";

import { Routes } from "../enums/Routes.enum";

export default function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <Icon className={styles.blogIcon}>chat_bubble</Icon>
        <span className={styles.title}>Kanuf Blog Portal</span>
      </div>
      <div className={styles.actions}>
        <Link href={Routes.Blogs}>
          <Button variant="contained" color="primary" className={styles.action}>
            Try out
          </Button>
        </Link>
      </div>
    </div>
  );
}
