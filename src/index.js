import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import BookstoreService from "./services/BookstoreService";
import { BookstoreServiceProvider } from "./components/BookstoreServiceCooperation";
import ErrorBoundary from "./components/ErrorBoundary";
import store from "./store";

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);
