import { useEffect, useState } from "react";

import Blog from "../../components/blog";
import { BlogModel as BlogModel } from "../../models/blog.model";
import styles from "./Blogs.module.scss";

export default function Blogs() {
  const initialBlogs: BlogModel[] = [];
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState(initialBlogs);

  function getBlogs() {
    fetch("api/blogs")
      .then((res: Response) => res.json())
      .then((blogs: BlogModel[]) => setBlogs(blogs));
  }

  useEffect(() => getBlogs, []);

  return (
    <div className={styles.topContainer}>
      <span className={styles.title}>Blogs</span>
      <div className={styles.blogsContainer}>
        {blogs.map((blog: BlogModel, index: number) => (
          <div key={index} className={styles.blog}>
            <Blog blog={blog}></Blog>
          </div>
        ))}
      </div>
    </div>
  );
}
