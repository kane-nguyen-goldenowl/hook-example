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
import Login from './screens/Login';
import Profile from './screens/Profile';

import {
  LocaleProvider
} from './contexts/LocaleContext';
import {
  AuthProvider
} from './contexts/AuthContext';

import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <LocaleProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/glance" element={<Glance />}>
            </Route>
            <Route path="/to-do-example" element={<ToDoExample />}>
            </Route>
            <Route path="/to-do-example-with-reducer" element={<ToDoExampleWithReducer />}>
            </Route>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}>
            </Route>
          </Routes>
        </AuthProvider>
      </LocaleProvider>
    </BrowserRouter>
  );
}

export default App;
