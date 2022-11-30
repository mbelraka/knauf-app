import Link from "next/link";
import { useRouter } from "next/router";

import { Routes } from "../../enums/Routes.enum";
import styles from "./Nav.module.scss";

export default function Nav() {
  const router = useRouter();

  return (
    <div className={styles.linksContainer}>
      <Link
        href={Routes.Main}
        className={[
          styles.link,
          router.pathname === Routes.Main ? styles.active : "",
        ].join(" ")}
      >
        Main
      </Link>
      <Link
        href={Routes.Blogs}
        className={[
          styles.link,
          router.pathname === Routes.Blogs ? styles.active : "",
        ].join(" ")}
      >
        Blogs
      </Link>
    </div>
  );
}
