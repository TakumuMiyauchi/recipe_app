import Register from './Register.jsx'
import List from './List.jsx'
import ListMore from './ListMore.jsx'

import { Provider } from 'react-redux';
import {store} from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <Register />
      <List />
      <ListMore />
    </Provider>
  );
}
