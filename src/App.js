import "./App.css";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import EditComponent from "./pages/EditComponent";
import HomePage from "./pages/Home";
import NotFound from './pages/NotFound'
import CharDetail from "./pages/CharDetail";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/edit/:charId" component={EditComponent} />
        <Route exact path="/create" component={EditComponent} />
        <Route exact path="/detail/:charId" component={CharDetail} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default App;
