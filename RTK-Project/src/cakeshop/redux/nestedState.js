import redux, { createStore } from "redux";

const UPDATE_STREET = "UPDATE_STREET";

const streetUpdate = (streetName) => {
  return {
    type: UPDATE_STREET,
    payload: streetName,
  };
};

const initialstate = {
  name: "priyanka",
  address: {
    street: "123 sitlata mata mandir",
    postCode: "456cb",
  },
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case UPDATE_STREET:
      return {
        ...state,
        address: {
          ...state.address,
          street: action.payload,
        },
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});

store.dispatch(streetUpdate("754 priyanka house"));

unsubscribe();
