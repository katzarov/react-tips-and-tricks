interface Route {
  path: string;
  description: string;
}

type RoutesObject = {
  [key: string]: Route;
};

export const routes: RoutesObject = {
  root: { path: "/", description: "home" },
  searchInput: {
    path: "/search-input",
    description: "optimized controlled search input",
  },
  // dataFetching: {
  //   path: "/data-fetching",
  //   description: "useEffect data fething",
  // },
  // recursiveTreeMenu: {
  //   path: "/recursive-tree-menu",
  //   description: "recursive tree menu",
  // },
};
