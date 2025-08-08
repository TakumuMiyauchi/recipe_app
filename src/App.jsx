// import Register from './Register.jsx'
// import List from './List.jsx'
// import ListMore from './ListMore.jsx'

import { Provider } from 'react-redux';
import {store} from "./store";

import { RouterProvider } from 'react-router-dom';
import routesLink from "./routes/routesLink.jsx";

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routesLink} />
    </Provider>
  );
}
