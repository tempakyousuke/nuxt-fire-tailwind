type Item = {
  label: string;
  to?: string;
  children?: Item[];
};

export const nav: Item[] = [
  {
    label: "Button",
    children: [
      {
        label: "Button",
        to: "/button",
      },
    ],
  },
];
