import { Icon } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";

import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.fullContainer}>
      <div className={styles.imagesContainer}>
        <Image src={`/images/logo.svg`} alt={"Knauf"} width={64} height={48} />
        <Icon className={styles.blogIcon}>chat_bubble</Icon>
      </div>
      <div className={styles.linksContainer}>
        <Link href="/" className={styles.link}>
          Main
        </Link>
      </div>
    </div>
  );
}
