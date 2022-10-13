import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./global";
import Home from "./pages/main";
import configureStore from "./pages/redux/redurces/store/configureStore";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);

export default Routes;
