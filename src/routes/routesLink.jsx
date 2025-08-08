import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Register from "../Register";
import List from "../List";
import ListMore from "../ListMore";

const routesLink = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Register />}></Route>
        <Route path="/myRecipe" element={<List />}></Route>
        <Route path="/about" element={<ListMore />}></Route>
      </>
    )
  );

export default routesLink
