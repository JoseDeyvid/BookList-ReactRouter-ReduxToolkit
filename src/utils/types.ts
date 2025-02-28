export type Book = {
  id: number;
  image_url: string;
  author: string;
  title: string;
  synopsis?: string;
  read: boolean;
  user_id: string
};

export type Note = {
  id: number;
  book_id: number;
  title: string;
  body: string;
}

export type User = {
  id: string,
  email: string
}
