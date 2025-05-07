interface Route {
  path: string;
  description: string;
}

type RoutesObject = {
  [key: string]: Route;
};

export const routes = {
  root: { path: "/", description: "home" },
  generateList: {
    path: "/input-gen-list",
    description: "generate list",
  },
  recursiveMenu: {
    path: "/recursive-menu",
    description: "recursive menu",
  },
  // dataFetching: {
  //   path: "/data-fetching",
  //   description: "useEffect data fething",
  // },
} satisfies RoutesObject;
