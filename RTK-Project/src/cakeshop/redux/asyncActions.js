import redux, { createStore, applyMiddleware } from "redux";
import axios from "axios";
import thunk from "redux-thunk";

const FETCH_USER_REQUESTED = "FETCH_USER_REQUESTED";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILED = "FETCH_USER_FAILED";

const userRequest = () => {
  return {
    type: FETCH_USER_REQUESTED,
  };
};

const userSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user,
  };
};

const userFailed = (error) => {
  return {
    type: FETCH_USER_REQUESTED,
    payload: error,
  };
};

const initialState = {
  loading: false,
  user: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case FETCH_USER_FAILED:
      return {
        ...state,
        loading: false,
        user: [],
        error: action.payload,
      };
  }
};

const fetchUser = () => {
  return (dispatch) => {
    dispatch(userRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((responce) => {
        const user = responce.data.map((data) => data.id);
        //console.log(user);
        dispatch(userSuccess(user));
      })
      .catch((error) => {
        dispatch(userFailed(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunk.default));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchUser());
