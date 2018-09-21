import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddlware from './promise-middleware';
import { error, loading } from '../components/app/reducers';
import { user, checkedAuth } from '../components/auth/reducers';
import { toursById, tourList } from '../components/tours/reducers';
import { stops } from '../components/stops/reducers';

const rootReducer = combineReducers({
  error,
  loading,
  user,
  checkedAuth,
  toursById,
  tourList,
  stops
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
      promiseMiddlware
    )
  )
);

export default store;