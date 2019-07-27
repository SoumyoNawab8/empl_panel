import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { usersReducers } from './reducers/userReducer';
import { dashboardReducer } from './reducers/dashboardReducer';

const rootreducers=combineReducers({usersReducers,dashboardReducer});
export const store=createStore(rootreducers,composeWithDevTools(applyMiddleware(thunk)));
