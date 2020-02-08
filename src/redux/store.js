import {createStore} from 'redux';

import rootReducer from './root-reducer';

const store = () => {
  return createStore(rootReducer);
};

export default store;
