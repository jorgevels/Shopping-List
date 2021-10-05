import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "@containers/Home";
import { DataProvider } from "@context/DataProvider";
import Layout from "@components/Layout";
import { hot } from "react-hot-loader/root";
/* import ListPrice from "@components/ListPrice"; */

const AsyncCheckoutContainer = React.lazy(() =>
  import("@components/ListPrice")
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DataProvider>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/listPrice"
                component={AsyncCheckoutContainer}
              />
            </Switch>
          </Layout>
        </BrowserRouter>
      </DataProvider>
    </Suspense>
  );
}

export default hot(App);
