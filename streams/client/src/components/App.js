import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
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

const App = () => {
  return (
    <div className="ui container">
      {/*All components here that are always visibile*/}
      {/* <Header /> but cant use any nav related component  */}
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList}></Route>
          <Route path="/streams/new" exact component={StreamCreate}></Route>
          <Route path="/streams/edit" exact component={StreamEdit}></Route>
          <Route path="/streams/delete" exact component={StreamDelete}></Route>
          <Route path="/streams/show" exact component={StreamView}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
