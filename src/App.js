import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './screens/Home';
import Glance from './screens/Glance';
import ToDoExample from './screens/ToDoExample';
import ToDoExampleWithReducer from './screens/ToDoExampleWithReducer';

import {
  LocaleProvider
} from './contexts/LocaleContext';

function App() {
  return (
    <LocaleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/glance" element={<Glance />}>
          </Route>
          <Route path="/to-do-example" element={<ToDoExample />}>
          </Route>
          <Route path="/to-do-example-with-reducer" element={<ToDoExampleWithReducer />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </LocaleProvider>
  );
}

export default App;
