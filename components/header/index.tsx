import { Icon } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";

import { Routes } from "../../enums/Routes.enum";
import Nav from "../nav";
import styles from "./Header.module.scss";
import logo from "./logo.svg";

export default function Header() {
  return (
    <div className={styles.fullContainer}>
      <Link href={Routes.Main}>
        <div className={styles.imagesContainer}>
          <Image src={logo} alt={"Knauf"} width={64} height={48} />
          <Icon className={styles.blogIcon}>chat_bubble</Icon>
        </div>
      </Link>
      <Nav />
    </div>
  );
}
