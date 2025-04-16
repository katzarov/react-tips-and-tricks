import { createBrowserRouter } from "react-router";
import { App } from "./App";
import { routes } from "./routes";
import { SeachInput } from "./examples/search-input/SearchInput";

export const router = createBrowserRouter([
  {
    path: routes.root.path,
    element: <App />,
    children: [
      {
        index: true,
        element: <div> Select the an example form the menu. </div>,
      },
      {
        path: routes.searchInput.path,
        element: <SeachInput />,
      },
    ],
  },
]);
