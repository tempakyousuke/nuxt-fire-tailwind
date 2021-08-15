type Item = {
  label: string;
  to?: string;
  children?: Item[];
  icon?: string;
};

export const nav: Item[] = [
  {
    label: "手配先管理",
    icon: "handshake",
    to: "/partners",
    children: [
      {
        label: "手配先一覧",
        to: "/partners",
      },
      {
        label: "手配先追加",
        to: "/partners/add",
      },
    ],
  },
];
