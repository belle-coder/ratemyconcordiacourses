export type CardItemT = {
  description?: string;
  hasVariant?: boolean,
  hasActions?: boolean,
  image: any;
  matches?: string;
  name: string;
  onHeartPress?:  any
  onXPress?: any
};


export type ReviewT = {
  courseid: number,
  reviewid?: number,
  username?: string,
  review?: string;
  recommend?: boolean,
  overall?: number,
};


export type IconT = {
  name: any;
  size: number;
  color: string;
  style?: any;
};

export type MessageT = {
  image: any;
  description: string;
  name: string;
};


export type TabBarIconT = {
  focused: boolean;
  iconName: any;
  text: string;
};

export type DataT = {
  id: number;
  name: string;
  match?: string;
  description: string;
  image: any;
  reviews: number;
};