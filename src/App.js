import React, { lazy, Suspense } from "react";
import "./assets/css/starter.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Switch } from "react-router";

const MongoSearch = lazy(() => import("./pages/MongoSearch"));
const ElasticSearch = lazy(() => import("./pages/ElasticSearch"));

function App() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Switch>
        <Route exact path="/" render={() => <MongoSearch />} />
        <Route exact path="/elastic" render={() => <ElasticSearch />} />
      </Switch>
    </Suspense>
  );
}

export default App;
