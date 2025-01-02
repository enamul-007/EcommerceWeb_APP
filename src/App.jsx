import React from "react";

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./Pages/HomePage/Index";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/home" element={"this is home rout"} />
      <Route path="/" element={<Homepage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
