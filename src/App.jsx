import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Single from "./pages/single/Single";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Category from "./pages/Category/Category";
function App() {
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/" element={Homepage}>
          <Homepage />
        </Route>
        <Route path="/posts" element={Homepage}>
          <Homepage />
        </Route>
        <Route path="/category/:id" element={Category}>
          <Category />
        </Route>

        <Route path="/post/:id" element={Single}>
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
