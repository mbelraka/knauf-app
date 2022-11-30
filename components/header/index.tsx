import { Icon } from "@material-ui/core";
import Image from "next/image";

import Nav from "../nav";
import styles from "./Header.module.scss";
import logo from "./logo.svg";

export default function Header() {
  return (
    <div className={styles.fullContainer}>
      <div className={styles.imagesContainer}>
        <Image src={logo} alt={"Knauf"} width={64} height={48} />
        <Icon className={styles.blogIcon}>chat_bubble</Icon>
      </div>
      <Nav />
    </div>
  );
}
