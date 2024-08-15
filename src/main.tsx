import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

//screen-size
import ScreenSizeProvider from "./provider/ScreenSizeProvider.tsx";

//routes
import Home from "./routes/Home.tsx";
import UserPage from "./routes/UserPage.tsx";
import About from "./routes/About.tsx";
import AllProject from "./routes/AllProject.tsx";
import ProjectDetails from "./routes/ProjectDetails.tsx";
import Login from "./routes/Login.tsx";
import NotFound from "./routes/NotFound.tsx";
import ManageUser from "./routes/ManageUser.tsx";
import Request from "./routes/Request.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    index: true,
    path: "/",
    element: <Home />,
  },
  {
    path: "/user",
    element: <UserPage />,
    children: [
      { path: "manage", element: <ManageUser /> },
      { path: "request", element: <Request /> },
    ],
  },
  { path: "/about", element: <About /> },
  {
    path: "/projects",
    element: <AllProject />,
  },
  { path: "/projects/:projectID", element: <ProjectDetails /> },
  { path: "/login", element: <Login /> },
  { path: "*", element: <NotFound /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ScreenSizeProvider>
      <RouterProvider router={router} />
    </ScreenSizeProvider>
  </React.StrictMode>
);
