export interface PostApi {
  id: string;
  author: string;
  content: string;
  likes: number;
  imageUrl: string;
  comments: [
    {
      name: string;
      comment: string;
    }
  ];
}

export interface Post {
  id: string;
  authorName: string;
  authorImageUrl: string;
  authorJob: string;
  imageUrl: string;
  content: string;
  likes: number;
  comments: [
    {
      name: string;
      comment: string;
    }
  ];
}
