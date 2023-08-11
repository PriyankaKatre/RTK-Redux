import React from "react";
import Navbar from "./components/navBar";
import UserDetails from "./components/UserDetails";
import Memo from './useMemo'
import CakeView from './RTKCakeshop/features/cake/cakeView';
import store from './RTKCakeshop/app/store';
import { Provider } from "react-redux";
import IcecreamView from "./RTKCakeshop/features/icecream/icecreamView";
import UserView from './RTKCakeshop/features/async/userView';

const App = () => {
  return (
    <Provider store={store}>
      <UserView />
      <CakeView />
      <br />
      <IcecreamView />
      <Navbar />
      <UserDetails />
      <Memo />
    </Provider>
  );
};

export default App;
