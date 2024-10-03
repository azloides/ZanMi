export interface IUser {
  id: number;
  name: string;
  url: string;
  sity: string;
  about: string;
}

export interface IId extends Record<string, string | undefined> {
  id: string;
}
