import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';

import Home from './screens/Home';
import Glance from './screens/Glance';
import ToDoExample from './screens/ToDoExample';
import ToDoExampleWithReducer from './screens/ToDoExampleWithReducer';
import Login from './screens/Login';
import Profile from './screens/Profile';
import CustomHook from './screens/CustomHook';
import UseCallbackExample from './screens/UseCallbackExample';
import UseMemoExample from './screens/UseMemoExample';
import UseTransitionExample from './screens/UseTransitionExample';
import UseDeferredValueExample from './screens/UseDeferredValueExample';
import UseSyncExternalStoreExample from './screens/UseSyncExternalStoreExample';
import UseIdExample from './screens/UseIdExample';
import ReactHookFormExample from './screens/ReactHookFormExample';
import ArticleWithReduxExample from './screens/ArticleWithReduxExample';
import CodeSplittingExample from './screens/CodeSplittingExample';
import PropTypesExample from './screens/PropTypesExample';
import I18nExample from './screens/I18nExample';
import ToastApp from './screens/ToastApp';

import {
  LocaleProvider
} from './contexts/LocaleContext';
import {
  AuthProvider
} from './contexts/AuthContext';

import ProtectedRoute from './components/ProtectedRoute';

import store from './store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
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
              <Route path="custom-hook" element={<CustomHook />}>
              </Route>
              <Route path="use-callback" element={<UseCallbackExample />}>
              </Route>
              <Route path="use-memo" element={<UseMemoExample />}>
              </Route>
              <Route path="use-transition" element={<UseTransitionExample />}>
              </Route>
              <Route path="use-deferred-value" element={<UseDeferredValueExample />}>
              </Route>
              <Route path="use-sync-external-store" element={<UseSyncExternalStoreExample />}>
              </Route>
              <Route path="use-id" element={<UseIdExample />}>
              </Route>
              <Route path="react-hook-form" element={<ReactHookFormExample />}>
              </Route>
              <Route path="article-with-redux" element={<ArticleWithReduxExample />}>
              </Route>
              <Route path="code-splitting" element={<CodeSplittingExample />}>
              </Route>
              <Route path="prop-types" element={<PropTypesExample />}>
              </Route>
              <Route path="i18n" element={<I18nExample />}>
              </Route>
              <Route path="toast-app" element={<ToastApp />}>
              </Route>
            </Routes>
          </AuthProvider>
        </LocaleProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
