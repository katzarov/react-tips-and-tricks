interface Route {
  path: string;
  description: string;
}

type RoutesObject = {
  [key: string]: Route;
};

export const routes: RoutesObject = {
  root: { path: "/", description: "home" },
  recursiveMenu: {
    path: "/recursive-menu",
    description: "recursive menu",
  },
  // dataFetching: {
  //   path: "/data-fetching",
  //   description: "useEffect data fething",
  // },
};
