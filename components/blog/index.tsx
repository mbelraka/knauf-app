import { BlogModel } from "../../models/blog.model";

import styles from "./Blog.module.scss";

export default function Blog(props: { blog: BlogModel }) {
  return (
    <div className={styles.topContainer}>
      <span className={styles.title}>{props.blog?.title}</span>
      <div className={styles.body}>
        <span className={styles.content}>{props.blog?.body}</span>
      </div>
      <div className={styles.userInformation}>
        Author: {props.blog?.user["email"]}
      </div>
    </div>
  );
}
