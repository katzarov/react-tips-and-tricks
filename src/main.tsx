import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./router";
import "./index.css";

// we might not want strict mode for all examples since we might get into counting renders and so on. Will wrap individual examples as necessary.
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
