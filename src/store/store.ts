import { createStore } from "redux";
import { tokenReducer } from './tokens/userReducer';

const store = createStore(tokenReducer);

export default store;