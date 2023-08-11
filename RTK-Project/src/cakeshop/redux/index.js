import redux, { createStore, combineReducers, applyMiddleware } from "redux";
import reduxLogger from "redux-logger";
const logger = reduxLogger.createLogger();

const CAKE_ORDERED = "Cake_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

const cakeOrder = () => {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
};

const restockedCake = (qty = 1) => {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
};

const IcecreamOrder = () => {
  return {
    type: ICECREAM_ORDERED,
    payload: 2,
  };
};

const icecreamRestocked = (qty = 5) => {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
};

const cakeInitialState = {
  numberOfCake: 10,
};

const icecreanInitialState = {
  numberOfIcecreams: 20,
};

const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCake: state.numberOfCake - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numberOfCake: state.numberOfCake + action.payload,
      };
    default:
      return state;
  }
};

const icecreamReducer = (state = icecreanInitialState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numberOfIcecreams: state.numberOfIcecreams - 1,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numberOfIcecreams: state.numberOfIcecreams + action.payload,
      };
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfIcecreams: state.numberOfIcecreams - 1,
      };
    default:
      return state;
  }
};

const combineReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});
//const store = createStore(combineReducer, applyMiddleware(logger));
const store = createStore(combineReducer);

//console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("updated store", store.getState())
);

store.dispatch(cakeOrder());
store.dispatch(cakeOrder());
store.dispatch(cakeOrder());
store.dispatch(restockedCake(4));

store.dispatch(IcecreamOrder());
store.dispatch(IcecreamOrder());
store.dispatch(IcecreamOrder());
store.dispatch(icecreamRestocked(4));

unsubscribe();
