/**
 * @format
 */

import React from "react";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { NavigationContainer } from "@react-navigation/native";

//import App from "./App";
import RootPage from "./navigation/RootPage";
import rootReducer, { rootSaga } from "./modules";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
const RootApp = () => (
  <Provider store={store}>
    <NavigationContainer>
      <RootPage />
    </NavigationContainer>
  </Provider>
);

AppRegistry.registerComponent(appName, () => RootApp);
