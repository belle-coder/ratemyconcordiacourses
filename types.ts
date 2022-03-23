export type CardItemT = {
  description?: string;
  image: any;
  matches?: string;
  name: string;
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
  info1?: string;
  info2?: string;
  info3?: string;
  info4?: string;
};