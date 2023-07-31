export interface IAudio {
  url: string,
  title: string,
  author: string,
  thumbnail: string,
  id: number,
};

export interface IProps {
  url: string,
  title: string,
  author: string,
  thumbnail: string,
};

export type Props = {
  title: string,
  author: string,
  thumbnail: string,
  id: number,
};