import { StrictMode } from "react";
import { createBrowserRouter } from "react-router";
import { App } from "./App";
import { routes } from "./routes";
import { GenerateList } from "./examples/search-input/GenerateList";
import { RecursiveMenu } from "./examples/recursive-menu/RecursiveMenu";

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
        path: routes.generateList.path,
        element: <GenerateList />,
      },
      {
        path: routes.recursiveMenu.path,
        element: (
          <StrictMode>
            <RecursiveMenu />
          </StrictMode>
        ),
      },
    ],
  },
]);
