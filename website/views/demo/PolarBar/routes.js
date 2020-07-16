export default [
  {
    title: "",
    path: "",
    redirect: "default",
  },

  {
    title: "基础图",
    path: "default",
    component: () => import("./default-polarBar.md"),
  },
  {
    title: "分组图",
    path: "group",
    component: () => import("./group-polarBar.md"),
  },
  {
    title: "堆叠图",
    path: "stack",
    component: () => import("./stack-polarBar.md"),
  },
  {
    title: "其他",
    path: "others",
    component: () => import("./others-polarBar.md"),
  },
];
