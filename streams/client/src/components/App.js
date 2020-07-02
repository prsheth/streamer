import React from "react";
import { Router, Route, Switch } from "react-router-dom";
/* For production:
BrowserRouter makes it challenging in production wehen not using any deployment services
Configure web server to respond with index.html in pathname when trying to look for a route
*/
import Header from "./Header";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamView from "./streams/StreamView";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import history from "../history";
const App = () => {
  return (
    <div className="ui container">
      {/*All components here that are always visibile*/}
      {/* <Header /> but cant use any nav related component  */}
      {/* changed to plain router as we dont use its own internal history object use mine so that I can this use outside of react components */}
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList}></Route>
            <Route path="/streams/new" exact component={StreamCreate}></Route>
            <Route
              path="/streams/edit/:id"
              exact
              component={StreamEdit}
            ></Route>
            <Route
              path="/streams/delete/:id"
              exact
              component={StreamDelete}
            ></Route>
            <Route path="/streams/:id" exact component={StreamView}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
