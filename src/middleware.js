import { getArticleList } from './reducers/article';
import agent from './api/agent';

const localStorageMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case getArticleList.fulfilled.type:
      window.localStorage.setItem('jwt', "example");
      agent.setToken("example");
      break;
    default:
  }

  return next(action);
};

export { localStorageMiddleware };
