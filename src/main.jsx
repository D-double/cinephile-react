import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import {
  RouterProvider,
} from "react-router-dom";
import router from "./routes.jsx";
// import App from "./App.jsx";
import "./assets/style/main.scss";

import ErrorBoundry from './components/error-boundry';
import store from "./store/store.js";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas, fab, far)
// store.subscribe(() => console.log(store.getState()))



ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
          <RouterProvider router={router}/>
      </ErrorBoundry>
    </Provider>
  // </React.StrictMode>,
);
