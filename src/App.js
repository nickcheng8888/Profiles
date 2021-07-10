import editProfile from "./components/editProfile"
import displayProfile from "./components/displayProfile"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <div >
    <Router>
        <Switch>
          <Route path="/editProfile" component={editProfile} />
          {/* <Route path="/displayProfile" component={displayProfile} /> */}
        </Switch>
    </Router>
  </div>
  );
}

export default App;
