import React from "react";
import FormInput from "./components/Form";
import List from "./components/List";
import Welcome from "./components/Welcome/index";
import Footer from "./components/Footer";
import { DataProvider } from "./utils/DataProvider";

import Layout from "./components/Layout";

function App() {
  return (
    <DataProvider>
      <Layout>
        <div className="App">
          <FormInput />
          <List />
          <Welcome />
          <Footer />
        </div>
      </Layout>
    </DataProvider>
  );
}

export default App;
