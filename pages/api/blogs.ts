import {NextApiRequest, NextApiResponse} from 'next';

import {BlogModel} from '../../models/blog.model';

// For performance using n+ n + n = 3n instead of n^3. So, rather than looping for every blog, building map and
// concatinating
function processBlogs(blogs: BlogModel[], users: any[], comments: any[]) {
  const mappedBlogs = {};
  const mappedUsers = {};
  const mappedComments = {};
  // Set Blogs
  blogs.forEach((blog) => {
    if (blog) {
      mappedBlogs[blog.id] = blog;
    }
  });

  users.forEach((user) => {
    if (user) {
      mappedUsers[user.id] = user;
    }
  });

  comments.forEach((comment) => {
    if (comment) {
      mappedComments[comment.postId] = mappedComments[comment.postId]
        ? [...mappedComments[comment.postId], comment]
        : [];
    }
  });

  blogs.forEach((blog) => {
    blog.user = mappedUsers[blog.userId];
    blog.comments = mappedComments[blog.id];
  });

  return blogs;
}

async function _getBlogs(): Promise<BlogModel[]> {
  try {
    const [blogs, users, comments] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/comments"),
    ]);

    return processBlogs(
      await blogs.json(),
      await users.json(),
      await comments.json()
    );
  } catch (err: unknown) {
    alert(err);
    return [];
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogModel[]>
): Promise<void> {
  const blogs = await _getBlogs();

  res.status(200).json(blogs);
  res.status(304).json(blogs);
}
