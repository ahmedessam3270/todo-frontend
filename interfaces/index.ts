export interface ITodo {
  id: string;
  title: string;
  category: string;
  description: string | null;
  complete: boolean;
  createdAt: string;
}

export interface IUser {
  email: string;
  password: string;
}
