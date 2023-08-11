import store from "./app/store.js";
import { order, reStocked } from "./features/cake/cakeSlice.js";
import { iceCreamSliceActions } from "./features/icecream/iceCreamSlice.js";
import { fetchUsers } from "./features/async/user.js";

console.log(fetchUsers());
// console.log(iceCreamSliceActions.iceCreamSliceActions);
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});

// store.dispatch(order());
// store.dispatch(order());
// store.dispatch(order());
// store.dispatch(order());
// store.dispatch(reStocked(5));

// store.dispatch(iceCreamSliceActions.ordered());
// store.dispatch(iceCreamSliceActions.ordered());
// store.dispatch(iceCreamSliceActions.reStocked(10));

store.dispatch(fetchUsers());

//unsubscribe();
