export interface BlogModel {
  body: string;
  id: number;
  title: string;
  userId: number;
  user: object;
  comments: string[];
}
